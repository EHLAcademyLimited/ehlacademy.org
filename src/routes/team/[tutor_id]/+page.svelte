<script>
	import Head from "../../../lib/Head.svelte";
	export let data
	let {tutor} = data
	import {_, locale} from 'svelte-i18n'
	import Footer from '$lib/app-shelf/Footer.svelte'
</script>

<div class="bg-amber-50">
	<div class="container py-8">
		<div class="md:w-48 md:h-48 w-36 h-36 rounded-full bg-cover bg-center mx-auto border-4 sm:border-8 border-slate-300 shadow-lg"
		     style="background-image: url({tutor.profile_pic})"></div>
		<h1 class="text-3xl sm:text-4xl text-center text-amber-700 font-light my-2 md:my-4">{tutor.display_name}</h1>
		<p class="text-gray-500 leading-relaxed">{@html $locale !== 'en' ? tutor.description_alter : tutor.description}</p>
	</div>
</div>

<Footer/>

<Head title={tutor.display_name} description={tutor.description_alter} image={tutor.profile_pic}/>