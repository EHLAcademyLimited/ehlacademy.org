<script>
	console.log('/one-one-one +page.svelte')
	export let data
	const {courses} = data
	import Head from '$lib/Head.svelte'
	import {_, locale} from 'svelte-i18n'
</script>

<div class="bg-gray-100 border-b border-gray-300">
	<div class="text-3xl sm:text-4xl py-8 text-center">{$_('one_on_one_title')}</div>
</div>
<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
		{#each courses as item}
			<div class="mb-4">
				<a class="mb-2 block" href="/course/{item.id}">
					<div class="relative overflow-hidden border-4 border-gray-300 rounded-xl shadow-lg" style="padding-top: 58%">
						<img class="absolute inset-0 rounded-lg" src="{item.attributes.image.data.attributes.url}"
						     alt={item.attributes.title_en}>
					</div>
					<h2 class="mt-2 text-gray-800 text-2xl">{item.attributes[`title_${$locale}`]}</h2>
					{#if item.attributes[`subtitle_${$locale}`]}
						<h2 class="mt-2 text-gray-700 text-lg leading-tight">{item.attributes[`subtitle_${$locale}`]}</h2>
					{/if}
				</a>
			</div>
		{/each}
	</div>
</div>

<Head title={$_('one_on_one_title')}/>
