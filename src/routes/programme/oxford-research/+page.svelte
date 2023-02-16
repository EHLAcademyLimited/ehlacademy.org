<script>
	import {t} from 'svelte-i18n'
	import Sidebar from './_sidebar.svelte'
</script>

<Sidebar segment="oxford-research">
	<img src="/oxford.jpg" alt="oxford" class="w-full">
	<div class="px-4 py-8 sm:p-8 bg-white">
		<h1 class="text-p3 sm:text-t1 mb-8">{$t('oxford_research.title')}</h1>
		<p class="text sm:text-p3">{$t('oxford_research.desc')}</p>
	</div>
</Sidebar>

<svelte:head>
	<title>{$t('nav.oxford_research')}</title>
</svelte:head>