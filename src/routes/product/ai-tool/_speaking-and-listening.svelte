<script>
	import {t, locale} from 'svelte-i18n'
	import LineDot from './_line-dot.svelte'
	import SeeVideo from './_see-video.svelte'
	import Carousel from '$lib/ui/Carousel.svelte'
	import CarouselItem from '$lib/ui/CarouselItem.svelte'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	const steps = [
		{
			image: '/ai-screens/speaking_1.png',
			title: 'ai.speak.step_1.title',
			desc: 'ai.speak.step_1.desc'
		},
		{
			image: '/ai-screens/speaking_2.png',
			title: 'ai.speak.step_2.title',
			desc: 'ai.speak.step_2.desc'
		},
		{
			image: '/ai-screens/speaking_3.png',
			title: 'ai.speak.step_3.title',
			desc: 'ai.speak.step_3.desc'
		},
		{
			image: '/ai-screens/speaking_4.png',
			title: 'ai.speak.step_4.title',
			desc: 'ai.speak.step_4.desc'
		}
	]
	let idx = 0

	const video_id = {
		hk: '_zYxPspIea0',
		en: 'cxS4aYRSdnU'
	}
	const showVideo = () => {
		open(Youtube, {id: video_id[$locale]})
	}
</script>

<div class="bg-gray-100 border-t border-b border-gray-200" id="speaking-and-listening">
	<div class="max-w-screen-lg mx-auto py-8 sm:py-12 px-4">

		<div class="mb-4 text-center">
			<LineDot classname="bg-blue-500"/>
			<h2 class="text-t1 md:text-h1 font-bold mt-4 mb-2 text-blue-700">{$t('ai.speak.title')}</h2>
			<p class="text-p2 md:text-p3 text-gray-500">{$t('ai.speak.desc')}</p>
			<div on:click={showVideo} class="mb-4 flex justify-center sm:block"><SeeVideo/></div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			<div class="mt-4 grid grid-cols-2 gap-4 hidden sm:block">
				{#each steps as s, i}
					<div class="p-4 rounded" class:bg-white={i === idx} class:-translate-y-1={i === idx}>
						<h3 class="font-bold text-p3" class:text-blue-700={i === idx}>{$t(s.title)}</h3>
						<p class="text-p2 text-gray-500">{$t(s.desc)}</p>
					</div>
				{/each}
			</div>
			<div>
				<Carousel on:update={e => (idx = e.detail)} auto>
					{#each steps as s,i}
						<CarouselItem>
							<div class="relative">
								<img src="{s.image}" alt="step" class="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto shadow-lg">
								<div class="absolute rounded inset-x-0 bottom-0 bg-gray-700 text-white p-4 block sm:hidden">
									<p class="text-p2"><span class="text-blue-500 font-bold">{$t('ai.step')}{i+1}</span> {$t(s.title)}</p>
								</div>
							</div>
						</CarouselItem>
					{/each}
				</Carousel>
			</div>
		</div>
	</div>
</div>
