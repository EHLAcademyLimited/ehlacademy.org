<script>
	import '../styles/tailwind-output.css';
	import Modal from '$lib/app-shelf/Modal.svelte';
	import Toast from "$lib/app-shelf/Toast.svelte";
	import Nav from "$lib/app-shelf/Nav.svelte";

	import en from '../locales/en.js'
	import hk from '../locales/hk.js'
	import {addMessages, init} from 'svelte-i18n'
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
		<slot></slot>
	</Modal>
</Toast>