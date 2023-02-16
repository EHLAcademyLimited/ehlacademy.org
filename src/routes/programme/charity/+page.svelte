<script>
	import {t} from 'svelte-i18n'
	import Sidebar from '../_sidebar.svelte'
</script>

<Sidebar>
	<img src="/charity.jpg" alt="charity" class="w-full">
</Sidebar>

<svelte:head>
	<title>{$t('nav.charity')}</title>
</svelte:head>