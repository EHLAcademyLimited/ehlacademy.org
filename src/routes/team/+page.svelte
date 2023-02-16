<script context="module">
	import {http} from "$lib/http";
	export const load = async ({fetch}) => {
		const {success, data} = await http.get(fetch, '/tutorApi/list_zoom_tutor')
		let tutor_list = data.filter(t => {
			let name = t.display_name
			return name.indexOf('科') < 0
					&& name.indexOf('VIP') < 0
					&& name.indexOf('Writing') < 0
					&& name.indexOf('John') < 0
		})
		return {
			props: {
				tutor_list
			}
		}
	}
</script>


<script>
	import {locale, _} from "svelte-i18n";
	import Head from "../../lib/Head.svelte";
	import FurlongBanner from "../../lib/static-section/FurlongBanner.svelte";
	export let tutor_list
</script>
<FurlongBanner/>
<div class="container my-8">
	<p class="text-2xl mb-4">
		{#if $locale === 'en'}
			Managing the Quality of EHLA English Language Teaching and Learning Resources
		{:else}
			如何確保EHLA英文教學資源的一致性、可靠性與權威性
		{/if}
	</p>
	<div class="relative">
		<div style="padding-top: 56%"></div>
		<iframe class="absolute w-full h-full inset-0" src="https://www.youtube.com/embed/7ztKjnaBNek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</div>

<div class="bg-[#FFE173] overflow-hidden text-center">
	<div class="max-w-screen-lg mx-auto py-8 md:py-12 relative">
		<div class="relative z-10">
			<img src="/quality-crown.png" alt="cp ratio" class="mx-auto max-w-[90px] mb-4">
			<p class="text-t1 sm:text-t2 text-amber-700 md:mb-2">{$_('3050.team.title1')}</p>
			<h2 class="text-p1 sm:text-p3 lg:text-5xl text-amber-700">{$_('3050.team.title2')}</h2>
		</div>
	</div>
</div>
<div class="container py-8 md:py-12 text-slate-700">
	{#if tutor_list}
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		{#each tutor_list as tutor}
			<a href="/team/{tutor.tutor_id}" class="md:text-center flex md:block">
				<div class="w-[120px] h-[120px] md:w-[200px] md:h-[200px] overflow-hidden rounded-full mx-auto border-8 border-slate-200 shadow-lg flex-shrink-0">
					<img src={tutor.profile_pic} alt={tutor.display_name} class="">
				</div>
				<div class="ml-4 md:ml-0">
					<h3 class="mt-2 mb-1 text-p3">{tutor.display_name}</h3>
					<p class="md:px-8 text-sm md:text-base">{$locale !== 'en' ? tutor.subtitle_alter : tutor.subtitle}</p>
				</div>
			</a>
		{/each}
	</div>
	{/if}
</div>

<Head title={$_('nav.top_team')}/>
