<script>
	console.log('/one-one-one/[id] +page.svelte')
	export let data
	import {locale, _} from "svelte-i18n";
	const {course} = data
	import Icon from "$lib/ui/Icon.svelte";
</script>

<div class="container py-4 html-content">
	<div class="text-blue-700 flex items-center mb-8">
		<a class="mx-2 hover:underline" href="/course">{$_('one_on_one_title')}</a>
		<Icon name="right2" className="w-3 transform"/>
		<p class="mx-2 text-gray-500">{course[`title_${$locale}`]}</p>
	</div>
	<img src={course.image.data.attributes.url}
	     class="w-96 mx-auto mb-4 max-w-full rounded-lg shadow-xl"
	     alt={course[`title_${$locale}`]}>
	<h1 class="text-center mb-1 text-amber-700 text-3xl">
		{course[`title_${$locale}`]}
	</h1>
	{#if course[`subtitle_${$locale}`]}
		<p class="text-center mb-1 text-amber-700 text-lg sm:text-xl">
			{course[`subtitle_${$locale}`]}
		</p>
	{/if}
	<div class="html-content">
		{@html course[`content_${$locale}`] || course[`content_hk`]}
	</div>
</div>