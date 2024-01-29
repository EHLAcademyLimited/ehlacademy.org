<script>
	let video_wrap_el
	let video_container_w
	import Cat from './_reader_many_cat.svelte'
	import {t, locale} from 'svelte-i18n'

	const setVideoSize = node => {
		const r = 1.75
		let w
		const {clientWidth, clientHeight} = node
		if (clientHeight * r > clientWidth) {
			w = clientHeight * r
		} else {
			w = clientWidth
		}
		video_container_w = w
	}

	const onResize = () => {
		setVideoSize(video_wrap_el)
	}
</script>

<svelte:window on:resize={onResize}/>

<div class="relative overflow-hidden h-120 md:h-160 bg-black border-b-4 border-black" use:setVideoSize>
	<div class="absolute cc inset-0" bind:this={video_wrap_el}>
		<video style="width: {video_container_w}px; max-width: 9999px;" autoplay loop playsinline src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website/home/video-montage.mp4"></video>
	</div>
	<div class="absolute inset-0 z-10 video-gradient"></div>
	<div class="max-w-screen-lg mx-auto px-6 md:px-12 relative z-20 text-white flex items-center h-full">
		<div>
			{#if $locale === 'en'}
				<h1 class="text-t1 md:text-h1 font-bold">{$t('reader.title')}</h1>
				<p class="text md:text-t1 font-bold mb-6 md:mb-8">{$t('reader.headline_b')}</p>
			{:else}
				<p class="text md:text-t1 md:mb-2">{$t('reader.headline_b')}</p>
				<h1 class="text-t1 md:text-h1 mb-4 font-bold">{$t('reader.title')}</h1>
			{/if}
			<p class="text-p3 md:text-t1">{$t('reader.slogan_1')}</p>
			<p class="text-p3 md:text-t1">{$t('reader.slogan_2')}</p>
		</div>
	</div>
</div>

<div class="bg-cover text-white py-40 relative" style="background-image: url('/reader/many-items.jpg')">
	<div class="absolute inset-0 bg-gradient-to-b from-brown-400 to-transparent"></div>
	<h2 class="relative z-10 font-bold px-8 text-center text-t1">{$t('reader.why_special')}</h2>
</div>

<div class="bg-gray-100">
	<div class="container py-12 md:py-16">
		<div class="_grid items-center">
			<div class="text-brown-700">
				<h2 class="title">{$t('reader.reading_modes.title')}</h2>
				<p class="subtitle">{$t('reader.reading_modes.subtitle')}</p>
				<p class="text-p2">{$t('reader.reading_modes.desc')}</p>
			</div>
			<div><img src="/reader/modes.png" alt="mode"></div>
		</div>
	</div>
</div>

<div class="bg-gray-200">
	<div class="container">
		<div class="flex flex-col md:flex-row md:items-center">
			<div class="flex-1 order-2 md:order-2">
				<img class="hidden md:block" src="/reader/speech-analytic.png" alt="mode">
				<img class="block md:hidden mb-8" src="/reader/speech-analytic-mobile.png" alt="mode">
			</div>
			<div class="flex-1 order-1 md:order-2 my-8 ml-0 md:ml-8 md:my-0">
				<h2 class="text-t2 md:text-t3 mb-1 text-brown-400a">{$t('reader.ai_speech.title')}</h2>
				<p class="text-t1 mb-4 text-brown-400a">{$t('reader.ai_speech.subtitle')}</p>
				<p class="text-p2 text-brown-700">{$t('reader.ai_speech.desc')}</p>
			</div>
		</div>
	</div>
</div>

<div class="bg-gray-100">
	<div class="container py-8 md:py-16">
		<div class="_grid items-center">
			<div>
				<h2 class="title mb-2">{$t('reader.roleplay.title')}</h2>
				<p class="text-p3 md:text-t1 text-brown-500">{$t('reader.roleplay.subtitle')}</p>
			</div>
			<div class="max-w-lg">
				<img src="/reader/role-play.png" alt="mode">
			</div>
		</div>
	</div>
</div>

<div class="bg-gray-100">
	<div class="container pt-8 md:pt-0">
		<div class="_grid items-center">
			<div>
				<h2 class="title">{$t('reader.vocab.title')}</h2>
				<h2 class="subtitle">{$t('reader.vocab.subtitle')}</h2>
<!--				<p class="body">{$t('reader.vocab.desc')}</p>-->
			</div>
			<div class="self-end md:pt-16 md:px-8">
				<img src="/reader/vocab.PNG" alt="mode">
			</div>
		</div>
	</div>
</div>

<div class="bg-gray-100">
	<div class="container py-8 md:py-16">
		<div class="flex flex-col md:flex-row md:items-center">
			<div class="flex-1 order-2 md:order-1 max-w-lg">
				<img src="/reader/comprehesion.PNG" alt="exam">

			</div>
			<div class="flex-1 order-1 md:order-2 mb-8 md:mb-0 ml-0 md:ml-16">
				<h2 class="title">{$t('reader.exam.title')}</h2>
				<p class="text-p3 md:text-t1 text-brown-700">{$t('reader.exam.subtitle')}</p>
			</div>
		</div>
	</div>
</div>

<Cat/>

<div class="bg-gray-100">
	<div class="container py-8">
		<div class="md:text-center">
			<h2 class="title">{$t('reader.levels.title')}</h2>
			<p class="subtitle">{$t('reader.levels.subtitle')}</p>
		</div>
		<div class="relative max-w-xl mx-auto mt-8">
			<div class="hidden md:block absolute bg-brown-400 left-0 top-0 w-full h-full mt-8 ml-8 rounded"></div>
			<img class="relative z-10 rounded shadow" src="/reader/reading-levels.jpg" alt="mode">
		</div>
	</div>
</div>

<div class="mx-2 text-center sm:text-left mt-4 md:mt-8">
	<div class="mx-auto max-w-screen-lg bg-yellow-400 rounded-lg px-4 py-6 sm:p-16 mb-8 sm:mb-12">
		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div class="text-brown-500">
				<div>
					<h1 class="text-t1 md:text-t3 font-bold mb-4 md:mb-8">{$t('reader.subscribe.title')}</h1>

					<p class="text md:text-p3">{@html $t('reader.subscribe.if_school')}</p>
				</div>
			</div>
			<div class="text-white hidden sm:block">
				<svg class="fill-current sm:h-32 md:h-60 mx-auto opacity-80" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M32.7408 26C35.9318 26 38.5186 23.8174 38.5186 21.125L38.5186 19.8959C38.5186 17.7937 36.8035 16.1954 35.7254 15.238C35.0675 14.6537 34.6667 13.8681 34.6667 13C34.6667 12.1319 35.0675 11.3463 35.7254 10.762C36.8035 9.80463 38.5186 8.20631 38.5186 6.10407L38.5186 4.875C38.5186 2.18261 35.9318 -1.41824e-06 32.7408 -1.6972e-06L5.77781 -4.05438e-06C2.58683 -4.33334e-06 3.1168e-05 2.18261 3.09326e-05 4.87499L3.08252e-05 6.10407C3.06414e-05 8.20631 1.71513 9.80463 2.79318 10.762C3.45107 11.3463 3.85188 12.1319 3.85188 13C3.85188 13.8681 3.45107 14.6537 2.79318 15.238C1.71513 16.1954 2.98032e-05 17.7937 2.96195e-05 19.8959L2.9512e-05 21.125C2.92766e-05 23.8174 2.58683 26 5.77781 26L32.7408 26ZM34.6667 21.125C34.6667 22.0225 33.8044 22.75 32.7408 22.75L17.3334 22.75L17.3334 3.25L32.7408 3.25C33.8044 3.25 34.6667 3.97753 34.6667 4.875L34.6667 6.10407C34.6667 6.75665 34.1037 7.48376 32.9329 8.52353C31.6221 9.68766 30.8149 11.266 30.8149 13C30.8149 14.734 31.6221 16.3123 32.9329 17.4765C34.1037 18.5162 34.6667 19.2433 34.6667 19.8959L34.6667 21.125ZM13.4815 3.24999L5.77781 3.24999C4.71415 3.24999 3.85188 3.97753 3.85188 4.87499L3.85188 6.10407C3.85188 6.75665 4.41491 7.48376 5.58568 8.52352C6.89649 9.68765 7.70374 11.266 7.70374 13C7.70374 14.734 6.89649 16.3123 5.58568 17.4765C4.4149 18.5162 3.85188 19.2433 3.85188 19.8959L3.85188 21.125C3.85188 22.0225 4.71415 22.75 5.77781 22.75L13.4815 22.75L13.4815 3.24999Z"/>
				</svg>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<title>{$t('nav.animated_library')}</title>
</svelte:head>

<style>
	.title {
			@apply text-t2 md:text-h1 mb-2 text-brown-400a;
	}

	.subtitle {
			@apply text-t1 mb-4 text-brown-500;
	}

	.body {
			@apply text-p2 text-brown-700;
	}

	._grid {
			@apply grid grid-cols-1 md:grid-cols-2 gap-8;
	}

	.video-gradient {
			background-image: linear-gradient(to bottom,rgba(0,0,0,0.5), transparent);
	}
</style>