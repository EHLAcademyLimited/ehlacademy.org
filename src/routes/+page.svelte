<script>
	import Download from './_donwload-app-section.svelte'
	import FurlongBanner from "../lib/static-section/FurlongBanner.svelte";
	import ReaderSection from './_reader.svelte'
	import SharingHero from "./_SharingHero.svelte";
	import {_, t, locale} from 'svelte-i18n'



	const conference = [
		{
			year: '2018',
			youtube_id: '9COPMtUq_Bo',
		},
		{
			year: '2019',
			youtube_id: 'MODs6ghKO0A',
		}
	]



</script>

<FurlongBanner/>

<div class="bg-gray-100 pt-8 md:pt-16 bg-right-bottom bg-no-repeat bg-size-hill relative overflow-hidden">

	<img src="/ai-ai-ai.png" alt="deco" class="hidden md:block pointer-events-none absolute left-0 bottom-0 lg:w-full transform md:scale-125 xl:scale-100"
	     style="max-width: 1600px">
	<div class="relative z-10 max-w-screen-lg mx-auto md:text-center">
		<h1 class="px-6 font-bold text-t2 md:text-h1 mb-4 sm:mb-8 text-red-500">{$t('sharing.title')}</h1>

		<div class="px-6">
			<a class="inline-block rounded-full bg-red-500 text-white hover:bg-red-700 px-6 py-3 md:px-8 md:py-4 text md:text-p2 text-white font-bold"
			   href="/about/sharing">
				{$t('learn_more')}
			</a>
		</div>

		<div class="px-2 sm:px-6 mt-4 sm:mt-8 sm:mb-16 mb-8">
			<SharingHero/>
		</div>
	</div>
</div>

<div class="relative overflow-hidden">
	<img class="inset-0 absolute z-0 hidden xl:block blur w-full" src="/school/hero.jpg" alt="blur">
	<div class="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 h-140 md:h-160 bg-no-repeat bg-cover sm:bg-top bg-right text-white" style="background-image: url('/school/hero.jpg')">
		<div class="h-full flex items-center">
			<div class="mx-auto md:px-16 w-full -mt-16 sm:mt-8">
				<h1 class="text-p2 md:text-p4 font-bold mb-2 inline-block border-b-2 border-current">{$t('school.corner')}</h1>
				<h2 class="text-t1 sm:text-t2 md:text-h1 mb-4 text-shadow"><span style="font-size: 0.8em">
					{$t('school.hero_1')}</span><br/>
					{$t('school.hero_2')}</h2>
				<p class="text md:text-p2 max-w-xl bg-brown-700 bg-opacity-50">
					{$t('school.hero_desc')}
				</p>
			</div>
		</div>
	</div>
</div>

<div class="bg-white">
	<div class="max-w-screen-xl mx-auto py-12 md:py-24 xl:py-32 px-6 md:px-12 xl:px-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
			<div>
				<img src="/snap-group.jpg" alt="forum" class="w-full">
			</div>
			<div class="self-center">
				<h2 class="text-t1 md:text-t2 font-bold mb-4 text-brown-700">{$t('school.conference')}</h2>
				<p class="text-p2 md:text-p3 mb-8 text-brown-500">{$t('school.conference_desc')}</p>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 sm:mt-4">
			{#each conference as c}
				<div class="group cursor-pointer py-4 px-2 sm:px-4 bg-gray-200 hover:bg-red-500 hover:text-white rounded inline-flex items-center">
					<div class="font-bold flex-1">
						<p class="group-hover:text-white text-red-500 leading-none mb-2">{c.year}</p>
						<iframe class=" w-full h-60" src="https://www.youtube.com/embed/{c.youtube_id}"
						        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						        allowfullscreen></iframe>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<ReaderSection/>

<div class="bg-cover bg-center pl-8 md:pl-24 py-40 text-white relative" style="background-image: url('/uk-school.webp')">
	<h1 class="max-w-screen-sm z-20 relative text-t1 sm:text-h1 drop-shadow-xl mt-12 mb-8">{$_('one_on_one_title')}</h1>
	<a class="inline-block rounded-full bg-yellow-700 hover:bg-yellow-500 hover:text-black text-white px-6 py-3 md:px-8 md:py-4 text md:text-p2 text-white font-bold"
	   href="/course">
		{$t('learn_more')}
	</a>
</div>

<div class="bg-cover bg-center pl-8 md:pl-24 py-40 relative" style="background-image: url('/milestone.jpeg')">
	<h1 class="text-white max-w-screen-sm z-20 relative text-t1 sm:text-h1 drop-shadow-xl mb-8">{$_('nav.milestone')}</h1>
	<a class="inline-block rounded-full bg-white hover:text-black px-6 py-3 md:px-8 md:py-4 text md:text-p2 font-bold"
	   href="/about/milestone/?lang=en">
		{$t('learn_more')}
	</a>
</div>

<svelte:head>
	<title>{$t('nav.index')}</title>
	<meta name="description" content={$t('nav.index_desc')}>
</svelte:head>

<style>
	.blur {
		filter: blur(2em);
	}

	.bg-size-hill {
		background-image: url('/ai-tool-hills.png');
		background-size: 100%;
	}

	@media (max-width: 1280px) {
		.bg-size-hill {
			background-size: 120%;
		}
	}

	@media (max-width: 768px) {
		.bg-size-hill {
			background-image: url('/ai-tool-hills-mobile.png');
			background-size: 100%;
		}
	}

	@media (min-width: 768px) {
		.bg-size-baby-shape {
			background-image: url('/baby-app-shapes-2.png')
		}
	}
</style>