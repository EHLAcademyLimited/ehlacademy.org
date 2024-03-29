<!-- modified from svelte-simple-model: https://github.com/flekschas/svelte-simple-modal -->

<script>
	import { setContext as baseSetContext } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Icon from '$lib/ui/Icon.svelte'
	import {page} from "$app/stores";

	export let key = 'simple-modal';
	export let closeButton = true;
	export let closeOnEsc = false;
	export let closeOnOuterClick = false;
	export let closeOnAnyClick = false;
	export let styleBg = { top: 0, left: 0 };
	export let styleWindow = {};
	export let styleContent = {};
	export let setContext = baseSetContext;
	export let transitionBg = fade;
	export let transitionBgProps = { duration: 300 };
	export let transitionWindow = fly;
	export let transitionWindowProps = { duration: 300, y: 100 };

	$: {
		if ($page) close()
	}

	const defaultState = {
		closeButton: true,
		closeOnEsc,
		closeOnOuterClick,
		closeOnAnyClick,
		styleBg,
		styleWindow,
		styleContent,
		transitionBg,
		transitionBgProps,
		transitionWindow,
		transitionWindowProps,
		overflow: 'auto',
		width: '90%',
		maxWidth: ''
	};
	let state = { ...defaultState };

	let Component = null;
	let props = null;

	let background_el;
	let wrap;

	const camelCaseToDash = str => str
			.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

	const toCssString = (props) => Object.keys(props)
			.reduce((str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`, '');

	$: cssBg = toCssString(state.styleBg);
	$: cssWindow = toCssString(state.styleWindow);
	$: cssContent = toCssString(state.styleContent);
	$: currentTransitionBg = state.transitionBg;
	$: currentTransitionWindow = state.transitionWindow;
	$: width = state.width || 'auto'
	$: maxWidth = state.maxWidth || 'auto'
	let padding = '1em'
	let bg_class = 'bg-white'
	let overflow = 'auto'

	const toVoid = () => {};
	let onOpen = toVoid;
	let onClose = toVoid;
	let onOpened = toVoid;
	let onClosed = toVoid;

	const open = (
			NewComponent,
			newProps = {},
			options = {},
			callback = {}
	) => {
		Component = NewComponent;
		props = newProps;
		state = { ...defaultState, ...options };
		padding = state.padding || '1em'
		bg_class = state.bg_class || 'bg-white'
		overflow = state.overflow || 'auto'
		onOpen = callback.onOpen || toVoid;
		onClose = callback.onClose || toVoid;
		onOpened = callback.onOpened || toVoid;
		onClosed = callback.onClosed || toVoid;
	};

	const close = (callback = {}) => {
		onClose = callback.onClose || onClose;
		onClosed = callback.onClosed || onClosed;
		Component = null;
		props = null;
	};

	const handleKeyup = (event) => {
		if (state.closeOnEsc && Component && event.key === 'Escape') {
			event.preventDefault();
			close();
		}
	};

	const handleOuterClick = (event) => {
		if (
				state.closeOnOuterClick && (
						event.target === background_el || event.target === wrap
				)
		) {
			event.preventDefault();
			close();
		}
	};

	const handleWindowClick = () => {
		if (state.closeOnAnyClick) {
			event.preventDefault();
			close();
		}
	}

	setContext(key, {
		open: open ,
		openModal: open ,
		closeModal: close
	});
</script>

<svelte:window on:click={handleWindowClick} on:keyup={handleKeyup}/>

{#if Component}
	<div
					class="fixed flex justify-center items-center w-full h-full bg-black bg-opacity-60 z-[9999]"
					on:click={handleOuterClick}
					bind:this={background_el}
					transition:currentTransitionBg={state.transitionBgProps}
					style={cssBg}
	>
		<div class="relative m-2 max-h-full" style="width: {width}; max-width:{maxWidth}" bind:this={wrap}>
			<div
							class="relative max-w-full max-h-full m-8 rounded {bg_class}"
							transition:currentTransitionWindow={state.transitionWindowProps}
							on:introstart={onOpen}
							on:outrostart={onClose}
							on:introend={onOpened}
							on:outroend={onClosed}
							style={cssWindow}
			>
				<div class="relative overflow-auto" style="{cssContent}; padding: {padding}; overflow: {state.overflow}; max-height: calc(100vh - 4rem)">
					{#if state.closeButton}
						<button class="z-50 flex w-10 h-10 absolute right-2 top-2 rounded-full bg-white items-center justify-center hover:bg-blue-500 hover:text-white" on:click={close}>
							<Icon name="close" className="w-4"/>
						</button>
					{/if}
					<svelte:component this={Component} {...props} />
				</div>
			</div>
		</div>
	</div>
{/if}
<slot></slot>
