<script>
	import {t} from 'svelte-i18n'
</script>

<div class="max-w-screen-lg mx-auto rounded p-8 border-t border-gray-300">
	<div class="py-16">
		<h1 class="text-t1 sm:text-h1">{$t('about_ehla.title')}</h1>
	</div>

	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 mb-16">
		<div>
			<p class="text-p3 mb-4">{$t('about_ehla.desc_1')}</p>
			<p class="text-p3">{$t('about_ehla.desc_2')}</p>
		</div>
		<div>
			<img src="/ehla-teachers.jpg" alt="ehla-team" class="w-full rounded">
		</div>
	</div>
</div>

<svelte:head>
	<title>{$t('nav.about_ehla')}</title>
</svelte:head>