<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, params}) => {
		const res = await http.get(fetch, '/tutorApi/zoom_tutor_by_id', {
			tutor_id: params.tutor_id
		})

		return {
			props: {
				tutor: res.data,
				videos: res.data.videos
			}
		}
	}
</script>

<script>
	export let tutor
	export let videos = []
	let classroom = []

	import {_, locale} from 'svelte-i18n'
	import Footer from '$lib/app-shelf/Footer.svelte'
	let is_loading = true
	let page_num = 1
	let show_load_more = true
</script>

<div class="bg-amber-50">
	<div class="container py-8">
		<div class="md:w-48 md:h-48 w-36 h-36 rounded-full bg-cover bg-center mx-auto border-4 sm:border-8 border-slate-300 shadow-lg"
		     style="background-image: url({tutor.profile_pic})"></div>
		<h1 class="text-3xl sm:text-4xl text-center text-amber-700 font-light my-2 md:my-4">{tutor.display_name}</h1>
		<p class="text-gray-500 leading-relaxed">{@html $locale !== 'en' ? tutor.description_alter : tutor.description}</p>
	</div>
</div>

<div class="container my-4">
	<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
		{#if videos}
		{#each videos as v}
			<div>
				<p class="text-indigo-700 mb-2">{v[`title_${$locale}`]}</p>
				{#if v.link.startsWith('https')}
					<video preload="metadata" controls playsinline class="rounded w-full">
						<source src="{v.link}#t=0.1" type="video/mp4">
					</video>
				{:else}
					<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
						<iframe src="https://www.youtube.com/embed/{v.link}"
						        class="absolute inset-0 w-full h-full"
						        widget_referrer="1"
						        title="YouTube video player" frameborder="0"
						        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

						</iframe>
					</div>
				{/if}
			</div>
		{/each}
		{/if}
	</div>
</div>

<Footer/>
