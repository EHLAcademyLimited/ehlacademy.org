<script>
	export let showNavigation2 = true
	export let index = 0
	export let useItemWidth = false // slide width determined by item width
	export let slidesPerScreen = 1 // when useItemWidth is set to false
	export let prevDisabled = false
	export let nextDisabled = false
	export let forceShowPrevNext = false
	export let auto = false

	import {createEventDispatcher, onMount, setContext} from 'svelte'
	import { scale } from 'svelte/transition';
	import { debounce } from "debounce";
	const dispatch = createEventDispatcher()

	const TOUCH_SLOP = 20

	let animating = false
	let translate = 100
	let touchStartX
	let touchMoved
	let sideNavTransform
	let drag_offset = 0

	let SliderEl
	let SlideItemsEl = []
	let total_width
	let slide_item_width
	let slide_item_count = 0

	let auto_id

	$: isFirst = index === 0
	$: isLast = index >= slide_item_count - 1

	$: {
		if (SliderEl) {
			let init_offset = 0
			if (useItemWidth) {
				init_offset = (SliderEl.clientWidth / 2) - (slide_item_width / 2)
			}
			translate = drag_offset + (-slide_item_width * index) + init_offset
		}
	}

	setContext('slider', {
		setChildEl: node => SlideItemsEl.push(node)
	})

	const setSliderAndItemWidth = () => {
		const first_item = SlideItemsEl[0]
		if (!first_item) throw 'Please include SSliderItem.svelte in slots'
		if (useItemWidth) {
			slide_item_width = first_item.clientWidth
		} else {
			slide_item_width = SliderEl.clientWidth / slidesPerScreen
		}
		slide_item_count = SlideItemsEl.length
		total_width = slide_item_width * slide_item_count
		SlideItemsEl.forEach(el => el.style.minWidth = slide_item_width + 'px')
	}

	function setSlideScale () {
		for (let i = 0; i < slide_item_count; i++){
			let offsetToCurrent = Math.abs(index - i)
			let scale = Math.max(1 - (offsetToCurrent * 0.3), 0.8)
			let slide = SlideItemsEl[i]
			slide.style.transform = `scale(${scale})`
		}
	}

	onMount (() => {
		// TODO: this will fuck up the navigation
		// if (auto) {
		// 	auto_id = setInterval(() => {
		// 		if (isLast) backToStart()
		// 		else next()
		// 	}, 2000)
		// }
		const resizeHandler = () => {
			setSliderAndItemWidth()
			setSlideScale()
		}
		const dHandler = debounce(resizeHandler, 200)
		setSliderAndItemWidth()
		setSlideScale()
		SliderEl.addEventListener('touchstart', onSideNavTouchStart,  { passive: false });
		SliderEl.addEventListener('touchmove', onSideNavTouchMove,  { passive: false });
		SliderEl.addEventListener('touchend', onSideNavTouchEnd,  { passive: false });
		window.addEventListener('resize', dHandler)
		return () => {
			SliderEl.removeEventListener('touchstart', onSideNavTouchStart);
			SliderEl.removeEventListener('touchmove', onSideNavTouchMove);
			SliderEl.removeEventListener('touchend', onSideNavTouchEnd);
			window.removeEventListener('resize', dHandler)
			if (auto_id) window.clearInterval(auto_id)
		}
	})

	function onSideNavTouchStart (e) {
		// NOTE: do not preventDefault here as this will block the click interaction with the content inside the slider
		touchStartX = e.touches[0].pageX;
	};

	function onSideNavTouchMove (e) {
		var newTouchX = e.touches[0].pageX;
		sideNavTransform = newTouchX - touchStartX;
		if (sideNavTransform > 0 && prevDisabled) return
		if (sideNavTransform < 0 && nextDisabled) return

		touchMoved = true
		// only when user drag horizontally intentionally, block the prevent vertical scrolling
		// if block this from start - user cannot vertically scroll page when dragging on the slider
		if (Math.abs(sideNavTransform) > 20) {
			e.preventDefault()
		}
		drag_offset = sideNavTransform
	};


	function onSideNavTouchEnd  (e) {
		// NOTE: do not preventDefault here as this will block the click interaction with the content inside the slider
		if(!touchMoved) return
		if (auto_id) clearInterval(auto_id)
		auto = false

		animating = true
		touchMoved = false

		requestAnimationFrame(() => {
			if (Math.abs(sideNavTransform) < TOUCH_SLOP) {
				drag_offset = 0
			} else {
				const isNext = sideNavTransform < 0
				if (isNext) next()
				else prev()
				drag_offset = 0
			}
		})
	}

	const onNextClick = () => {
		if (auto_id) clearInterval(auto_id)
		auto = false
		dispatch('nextClick', index)
		next()
	}

	const onPrevClick = () => {
		if (auto_id) clearInterval(auto_id)
		auto = false
		dispatch('prevClick', index)
		prev()
	}

	export function next () {
		if (isLast) return
		animating = true
		index += 1
		setSlideScale()
		dispatch('update', index)
	}

	export function prev () {
		if (isFirst) return
		animating = true
		index -= 1
		setSlideScale()
		dispatch('update', index)
	}

	export function backToStart () {
		if (isFirst) return
		animating = true
		index = 0
		setSlideScale()
		dispatch('update', index)
	}
</script>

<div class="dl-slider" bind:this={SliderEl}>
	<div class="dl-slider__main" class:animating
			 style="transform: translateX({translate}px); width: {total_width}px">
		<slot/>
	</div>
	{#if showNavigation2}
		{#if !prevDisabled || (!isFirst && !forceShowPrevNext)}
			<button on:click={onPrevClick} class="nav-btn nav-btn--prev text-gray-500" transition:scale="{{duration: 500}}">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-8 h-8"><path d="M27.556 32.914L14.68 18.004 27.555 3.078 23.986 0 8.443 18.004 23.984 36"></path></svg>
			</button>
		{/if}
		{#if !nextDisabled || (!isLast && !forceShowPrevNext)}
			<button on:click={onNextClick} class="nav-btn nav-btn--next text-gray-500" transition:scale="{{duration: 500}}">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-8 h-8 transform rotate-180"><path d="M27.556 32.914L14.68 18.004 27.555 3.078 23.986 0 8.443 18.004 23.984 36"></path></svg>
			</button>
		{/if}
	{/if}
</div>

<style>
	.dl-slider {
		width: 100%;
		height: 100%; /* TODO */
		overflow: hidden;
		position: relative;
	}
	.dl-slider__main {
		height: 100%; /* TODO */
		display: flex;
		align-items: center;
		will-change: transform;
	}
	.dl-slider__main.animating {
		transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1);
	}
	.nav-btn  {
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nav-btn.nav-btn--prev {
		left: 0;
	}
	.nav-btn.nav-btn--next {
		right: 0;
	}
</style>

