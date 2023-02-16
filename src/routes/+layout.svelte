<script>
	import '../styles/tailwind.css';
	import Modal from '$lib/app-shelf/Modal.svelte';
	import Toast from "$lib/app-shelf/Toast.svelte";
	import Footer from "../lib/app-shelf/Footer.svelte";
	import Nav from "$lib/app-shelf/Nav.svelte";

	import en from '../locales/en.js'
	import hk from '../locales/hk.js'
	import cn from '../locales/cn.js'
	import {addMessages, init} from 'svelte-i18n'
	import {page} from "$app/stores";
	const page_without_offset = ['/product/animated-library', '/product/ai-tool', '/programme/3050', '/programme/3050-register', '/school', '/organisation/tutor-center']
	$: is_offset = !page_without_offset.includes($page.url.pathname)
	let lang = $page.url.searchParams.get('lang')
	let is_iframe = $page.url.searchParams.get('iframe')
	addMessages('en', en)
	addMessages('hk', hk)
	addMessages('cn', cn)
	init({
		fallbackLocale: 'en',
		initialLocale: lang
	})
</script>
<Toast>
	<Modal>
		{#if !is_iframe}
			<Nav/>
		{/if}
		<main class:sm:pt-20={!is_iframe && is_offset} class:pt-12={!is_iframe && is_offset}>
			<slot></slot>
		</main>
		{#if !is_iframe}
			<Footer/>
		{/if}
	</Modal>
</Toast>