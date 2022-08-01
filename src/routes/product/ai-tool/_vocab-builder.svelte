<script>
	import {t, locale} from 'svelte-i18n'
	import LineDot from './_line-dot.svelte'
	import SeeVideo from './_see-video.svelte'
	import Carousel from '$lib/ui/Carousel.svelte'
	import CarouselItem from '$lib/ui/CarouselItem.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	const steps = [
		{
			image: '/ai-screens/vocab_1.png',
			title: 'ai.vocab.feature_1.title'
		},
		{
			image: '/ai-screens/vocab_2.png',
			title: 'ai.vocab.feature_2.title'
		},
		{
			image: '/ai-screens/vocab_3.png',
			title: 'ai.vocab.feature_3.title'
		}
	]
	let idx = 0
	const video_id = {
		hk: 'CqlB3BAFAIE',
		en: 'rZR9Igq9rgc'
	}
	const showVideo = () => {
		open(Youtube, {
			id: video_id[$locale]
		})
	}
</script>

<div class="px-6 py-8 md:p-8 sm:p-16" id="vocab-builder">
	<div class="max-w-screen-lg mx-auto">
		<div class="text-center">
			<div class="flex justify-center"><LineDot classname="bg-yellow-500"/></div>
			<h2 class="text-p4 md:text-h1 font-bold mb-2 text-yellow-700 my-4 text-center">{$t('ai.vocab.title')}</h2>
			<p class="text md:text-p3 text-gray-500">{$t('ai.vocab.desc')}</p>
			<div on:click={showVideo} class="flex justify-center"><SeeVideo/></div>
		</div>

		<div class="block sm:hidden">
			<Carousel on:update={e => (idx = e.detail)} auto>
				{#each steps as s,i}
					<CarouselItem>
						<div class="relative pb-24">
							<img src="{s.image}" alt="step" class="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto shadow-lg">
							<div class="absolute inset-x-0 bottom-0 bg-gray-700 text-white p-4 block sm:hidden rounded">
								<p class="text-p2">{$t(s.title)}</p>
							</div>
						</div>
					</CarouselItem>
				{/each}
			</Carousel>
		</div>

		<div class="hidden sm:grid my-4 grid-cols-3 gap-8 grid-cols-1">
			{#each steps as s, i}
				<div class="rounded overflow-hidden">
					<img src="{s.image}" alt={s.title} class="w-full max-w-xs sm:max-w-sm mx-auto">
					<div class="p-6 bg-white">
						<p class="font-bold text-p2">{$t(s.title)}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>