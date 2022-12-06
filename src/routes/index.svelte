<script>
	import Download from './_donwload-app-section.svelte'
	import FurlongBanner from "../lib/static-section/FurlongBanner.svelte";
	import ReaderSection from './_reader.svelte'
	import {t, locale} from 'svelte-i18n'
</script>

<FurlongBanner/>

<div class="bg-gray-100 pt-12 md:pt-16 bg-right-bottom bg-no-repeat bg-size-hill relative overflow-hidden">

	<img src="/ai-ai-ai.png" alt="deco" class="hidden md:block pointer-events-none absolute left-0 bottom-0 lg:w-full transform md:scale-125 xl:scale-100" style="max-width: 1600px">
	<div class="relative z-10 max-w-screen-lg mx-auto px-6 md:text-center">
		<h1 class="font-bold text-t2 md:text-h1 mb-4 text-red-500">{$t('ai.title')}</h1>
		<h2 class="text-p3 lg:text-t1 text-gray-400 mb-4 md:mb-6">{$t('ai.desc')}</h2>
		<a class="inline-block rounded-full bg-red-500 text-white hover:bg-red-700 px-6 py-3 md:px-8 md:py-4 text md:text-p2 text-white font-bold" href="product/ai-tool">{$t('learn_more')}</a>

		<img src="/ai-screen.png" alt="app-screen" class="hidden md:block">
		<div class="-mx-4">
			<img src="/ai-screen-mobile-2.png" alt="app-screen" class="block md:hidden">
		</div>
	</div>
</div>

<div class="bg-brown-100 text-brown-400a overflow-hidden">
	<div class="max-w-screen-lg mx-auto px-6 py-12 md:py-20">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-12 items-center">
			<div class="col-span-1">
				<h1 class="text-p4 md:text-t2 font-bold mb-4">{$t('school.corner')}</h1>
				<p class="text-p2 md:text-p3 mb-4 text-brown-500">{$t('school.hero_desc')}</p>
				<a href="/school">
					<button class="rounded-full bg-brown-400a text-white hover:bg-red-500 py-4 px-8 md:text-p2 font-bold">{$t('oxford_research.more')}</button>
				</a>
			</div>
			<div class="relative col-span-1">
				<img class="w-full transform origin-left lg:scale-125 rounded" src="/school/hero.jpg" alt="school">
			</div>
		</div>
	</div>
</div>

<ReaderSection/>

<div class="bg-purple-500 text-white bg-right bg-no-repeat bg-size-baby-shape">
	<div class="max-w-screen-lg mx-auto px-6 md:py-24 pt-8 pb-4 relative">
		<img class="absolute -left-72 top-36 hidden md:block" src="/baby-app-shapes.png" alt="shapes">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative z-10">
			<div>
				<div class="flex items-center mb-4">
					<img src="/baby-app-icon.png" alt="baby-app-icon" class="w-12 md:w-16">
					<h2 class="ml-4 text-t1 md:text-t3 font-bold md:whitespace-nowrap">{$t('baby.title')}</h2>
				</div>
				<p class="md:text-p3 text-p2">{$t('baby.desc')}</p>
				<div class="flex flex-col-reverse md:flex-col">
					<a href={`https://ehla-baby.com?lang=${$locale}`} target="_blank" class="text-center inline-block font-bold my-4 md:my-8 rounded-full font-bold px-8 py-4 md:max-w-lg text-p2" style="background: #F7BD01">{$t('baby.button')}</a>
					<img class="rounded-lg" src={`/baby_app_screen_${$locale}.png`} alt="baby-app-screen">
				</div>
			</div>
			<div>
				<img src="/baby-app-character.png" alt="baby-app-screen">
			</div>
		</div>
	</div>
</div>

<Download/>

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