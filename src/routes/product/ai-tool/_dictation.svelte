<script>
	import {t, locale} from 'svelte-i18n'
	import LineDot from './_line-dot.svelte'
	import SeeVideo from './_see-video.svelte'
	import Carousel from '$lib/ui/Carousel.svelte'
	import CarouselItem from '$lib/ui/CarouselItem.svelte'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	const dictation_steps = [
		{
			image: '/ai-screens/dictation_1.png',
			title: 'ai.dict.step_1.title',
			desc: 'ai.dict.step_1.desc'
		},
		{
			image: '/ai-screens/dictation_2.png',
			title: 'ai.dict.step_2.title',
			desc: 'ai.dict.step_2.desc'
		},
		{
			image: '/ai-screens/dictation_3.png',
			title: 'ai.dict.step_3.title',
			desc: 'ai.dict.step_3.desc'
		}
	]
	let idx = 0
	const video_id = {
		hk: 'CecbQG_4l7A',
		en: 'vwQfr5oD-Lc'
	}
	const showVideo = () => {
		open(Youtube, {id: video_id[$locale]}, {
			width: '90%'
		})
	}
</script>

<div class="max-w-screen-lg mx-auto py-8 md:py-16 px-4" id="dictation">
	<div class="text-center">
		<LineDot classname="bg-red-500"/>
		<div class="max-w-screen-sm mx-auto text-center sm:text-left">
			<h2 class="text-t1 md:text-h1 font-bold mb-2 text-red-700 my-4 text-center">{$t('ai.dict.title')}</h2>
			<p class="text-p2 md:text-p3 text-gray-500">{$t('ai.dict.desc')}</p>
			<div class="mb-2 sm:mb-0 cc" on:click={showVideo}><SeeVideo/></div>
		</div>
	</div>
	<div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
		<div class="relative">
			<Carousel on:update={e => (idx = e.detail)} auto>
				{#each dictation_steps as s,i}
					<CarouselItem>
						<div class="relative">
							<img src="{s.image}" alt="step" class="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto shadow-lg">
							<div class="absolute rounded inset-x-0 bottom-0 bg-gray-700 text-white p-4 block sm:hidden">
								<p class="text-p2"><span class="text-red-500 font-bold">{$t('ai.step')}{i+1}</span> {$t(s.title)}</p>
							</div>
						</div>
					</CarouselItem>
				{/each}
			</Carousel>
		</div>
		<div class="self-center hidden sm:block">
			{#each dictation_steps as s, i}
				<div class="px-6 py-3 rounded" class:bg-gray-200={i === idx}>
					<div class="flex" class:text-red-500={i === idx}>
						<p class="w-8 text-p3">{i+1}.</p>
						<div>
							<p class="text-p3 font-bold mb-2">{$t(s.title)}</p>
							<p class="text-p2">{$t(s.desc)}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>