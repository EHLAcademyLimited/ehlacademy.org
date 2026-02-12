<script>
	export let data;
	import { locale, _ } from "svelte-i18n";
	const { course } = data;
	import Icon from "$lib/ui/Icon.svelte";
	let activeTab = course.content_ib_pyp_en ? "ib_pyp" : "default";
</script>

<div class="container py-4">
	<div class="flex items-center mb-8">
		<a class="text-blue-800 mx-2 hover:underline" href="/course"
			>{$_("one_on_one_title")}</a
		>
		<Icon name="right2" className="w-3 transform" />
		<p class="mx-2 text-gray-500">{course[`title_${$locale}`]}</p>
	</div>
	<img
		src={course.image.data.attributes.url}
		class="w-96 mx-auto mb-4 max-w-full rounded-lg shadow-xl"
		alt={course[`title_${$locale}`]}
	/>
	<h1 class="text-center mb-1 text-amber-700 text-3xl">
		{course[`title_${$locale}`]}
	</h1>
	{#if course[`subtitle_${$locale}`]}
		<p class="text-center mb-1 text-amber-700 text-lg sm:text-xl">
			{course[`subtitle_${$locale}`]}
		</p>
	{/if}

	{#if course.content_ib_pyp_en}
		<div
			class="flex flex-wrap justify-center gap-2 sm:gap-4 my-8 border-b border-amber-200 pb-4"
		>
			<button
				class="px-6 py-2 rounded-full transition-all duration-300 font-medium {activeTab ===
				'british'
					? 'bg-amber-700 text-white shadow-md transform scale-105'
					: 'bg-transparent text-amber-700 border border-amber-700 hover:bg-amber-50'}"
				on:click={() => (activeTab = "british")}
			>
				British
			</button>
			<button
				class="px-6 py-2 rounded-full transition-all duration-300 font-medium {activeTab ===
				'ib_pyp'
					? 'bg-amber-700 text-white shadow-md transform scale-105'
					: 'bg-transparent text-amber-700 border border-amber-700 hover:bg-amber-50'}"
				on:click={() => (activeTab = "ib_pyp")}
			>
				IB PYP
			</button>
			<button
				class="px-6 py-2 rounded-full transition-all duration-300 font-medium {activeTab ===
				'hk_primary'
					? 'bg-amber-700 text-white shadow-md transform scale-105'
					: 'bg-transparent text-amber-700 border border-amber-700 hover:bg-amber-50'}"
				on:click={() => (activeTab = "hk_primary")}
			>
				HK Primary
			</button>
		</div>
	{/if}

	<div class="html-content pb-12">
		{#if activeTab === "ib_pyp"}
			{@html course.content_ib_pyp_en}
		{:else if activeTab === "hk_primary"}
			{@html course.content_hk_primary_en}
		{:else if activeTab === "british"}
			{@html course.content_en}
		{:else}
			{@html course[`content_${$locale}`] || course[`content_hk`]}
		{/if}
	</div>
</div>
