<script>
	import {t} from 'svelte-i18n'
	const programmes = [
		{
			title: 'nav.oxford_research',
			image: '/oxford.jpg',
			href: 'programme/oxford-research',
			tag: 'programme.tag.academic'
		},
		{
			title: 'nav.charity',
			image: '/charity.jpg',
			href: 'programme/charity',
			tag: 'programme.tag.charity'
		}
	]
</script>

<div class="bg-gray-200">
	<div class="max-w-screen-xl mx-auto py-4 sm:py-12 px-8">
		<h1 class="sm:text-t2 text-t1">{$t('nav.programme')}</h1>
	</div>
</div>

<div class="bg-gray-200">
	<div class="max-w-screen-xl mx-auto px-4 grid-rows-2 pb-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each programmes as p}
				<a href="{p.href}" class="block col-span-1 hover:shadow-lg transition">
					<div class="text-white bg-no-repeat bg-cover bg-center" style="height: 20em; background-image: url({p.image});"></div>
					<div class="bg-white py-6 px-4" style="line-height: 1.2">
						<p class="text-opacity-70 text-red-500 mb-1">{$t(p.tag)}</p>
						<h2 class="text-p3 font-bold">{$t(p.title)}</h2>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<svelte:head>
	<title>{$t('nav.programme')}</title>
</svelte:head>

