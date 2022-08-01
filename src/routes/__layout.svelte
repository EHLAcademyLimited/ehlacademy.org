<script>
	import '../styles/tailwind-output.css';
	import Modal from '$lib/app-shelf/Modal.svelte';
	import Toast from "$lib/app-shelf/Toast.svelte";
	import Footer from "../lib/app-shelf/Footer.svelte";
	import Nav from "$lib/app-shelf/Nav.svelte";

	import en from '../locales/en.js'
	import hk from '../locales/hk.js'
	import {addMessages, init} from 'svelte-i18n'
	import {page} from "$app/stores";
	const page_without_offset = ['/product/animated-library', '/product/ai-tool', '/programme/3050', '/programme/3050-register', '/school', '/organisation/tutor-center']
	$: is_offset = !page_without_offset.includes($page.url.pathname)
	addMessages('en', en)
	addMessages('hk', hk)
	init({
		fallbackLocale: 'en',
		initialLocale: 'hk'
	})
</script>
<Toast>
	<Modal>
		<Nav/>
		<main class:sm:pt-20={is_offset} class:pt-12={is_offset}>
			<slot></slot>
		</main>
		<Footer/>
	</Modal>
</Toast>