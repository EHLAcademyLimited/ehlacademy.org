<script>
	import Download from './_donwload-app-section.svelte'
	import Icon from '$lib/ui/Icon.svelte'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import ReaderSection from './_reader.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	import {t, locale} from 'svelte-i18n'

	const showVideo = () => {
		open(Youtube, {id: $locale === 'hk' ? 'MODs6ghKO0A' : 'sK-pU8L34E8'})
	}
</script>

<div class="h-[30rem] md:h-[40rem] bg-no-repeat bg-cover bg-center text-white relative overflow-hidden">

	<img src="/furlong-speech.jpg" alt="furlong" class="inset-0 absolute z-0 hidden xl:block blur">
	<div class="relative z-10 max-w-screen-xl mx-auto flex h-full px-6 sm:px-8 md:px-12 py-8 md:py-16 bg-cover" style="background-position: 40% center; background-image: url('/furlong-speech.jpg')">

		<div class="max-w-screen-lg mx-auto mt-auto w-full grid grid-cols-3 gap-8">
			<div class="col-span-3 md:col-span-2 self-end">

				<svg class="static mb-2 md:mb-0 fill-current w-6 md:w-8 lg:w-10 mb-2 md:relative -left-6 md:-left-10 lg:-left-14 top-10" viewBox="0 0 89 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M32.116 0.469971C12.25 9.75797 0.381958 27.044 0.381958 46.136C0.381958 59.552 8.63796 69.356 19.99 69.356C29.794 69.356 37.534 62.132 37.534 52.586C37.534 45.362 32.89 39.428 25.924 37.622C17.926 35.816 17.668 35.558 17.668 31.43C17.668 22.4 24.376 13.886 37.276 6.66196L32.116 0.469971ZM82.684 0.469971C62.818 9.75797 50.95 27.044 50.95 46.136C50.95 59.552 59.206 69.356 70.558 69.356C80.362 69.356 88.102 62.132 88.102 52.586C88.102 45.362 83.458 39.428 76.492 37.622C68.494 35.816 68.236 35.558 68.236 31.43C68.236 22.4 74.944 13.886 87.844 6.66196L82.684 0.469971Z"/>
				</svg>

				<h2 style="line-height: 1.25" class="text-p3 md:text-t1 lg:text-t2 mb-4">{$t('furlong_quote.q1.content')}</h2>
				<div class="text-p2 md:text-p3 leading-tight flex">
					<div class="mr-4">—</div>
					<div>
						<div class="font-bold">John Furlong, {$t('3050.team.furlong.t_3')}</div>
					</div>
				</div>
				<div class="inline-flex items-center mt-4 hover:text-yellow-500 cursor-pointer" on:click={showVideo}>
					<div class="mr-2"><Icon className="w-6 sm:w-8" name="video"/></div>
					<p class="text-p2">{$t('school.play_video')}</p>
				</div>
			</div>
			<div class="col-span-1 self-end hidden md:block">
				<img src="/logo.png" alt="logo" class="md:h-24 lg:h-36 ml-auto">
			</div>
		</div>
	</div>
</div>

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
				<a href="/organisation/school">
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

<div class="bg-gray-100 text-brown-400a overflow-hidden">
	<div class="max-w-screen-lg mx-auto px-6 py-12 md:py-20">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-12 items-center">
			<div class="col-span-1">
				<h1 class="text-p4 md:text-t2 font-bold mb-4">{$t('oxford_research.title')}</h1>
				<p class="text-p2 md:text-p3 mb-4 text-brown-500">{$t('oxford_research.desc_short')}</p>
				<a href="/programme/oxford-research">
					<button class="rounded-full bg-brown-400a text-white hover:bg-red-500 py-4 px-8 md:text-p2 font-bold">{$t('oxford_research.more')}</button>
				</a>
			</div>
			<div class="relative col-span-1">
				<img class="w-full transform origin-left lg:scale-125 rounded" src="/oxford.jpg" alt="oxford">
			</div>
		</div>
	</div>
</div>

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