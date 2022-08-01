<script>
	import {t, locale} from 'svelte-i18n'
	import Icon from '$lib/ui/Icon.svelte'
	import Youtube from '$lib/ui/YouTubePopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')

	const showVideo = (id) => {
		open(Youtube, {id})
	}

	const packages = [
		{
			title: 'ai_writing.title_short',
			desc: 'ai_writing.desc',
			li: [
				'ai_writing.f_2',
				'ai_writing.f_3',
				'ai_writing.f_4',
				'ai_writing.f_5',
				'ai_writing.f_6'
			],
			quota: 'school.ai_plan.1000_times',
			more_href: '/organisation/school#writing',
			youtube_id_hk: '2QULOJKuFQA',
			youtube_id_en: 'WdZYNn-28Fs',
			color: 'bg-brown-400a text-white',
			text_color: 'text-brown-400a',
			hover_color: 'hover:bg-brown-500'
		},
		{
			title: 'ai.vocab.school.title',
			desc: 'ai.vocab.school.desc',
			li: [
				'ai.vocab.school.1',
				'ai.vocab.school.2',
				'ai.vocab.school.3',
				'ai.vocab.school.4',
				'ai.vocab.school.5',
				'ai.vocab.school.6',
				'ai.vocab.school.7'
			],
			quota: 'school.ai_plan.1_year',
			more_href: '/product/ai-tool#vocab-builder',
			youtube_id_hk: 'IXZzXC9qbu0',
			youtube_id_en: 'IXZzXC9qbu0',
			color: 'bg-yellow-500 text-gray-700',
			text_color: 'text-yellow-700',
			hover_color: 'hover:bg-yellow-700',
			show_video: true
		},
		{
			title: 'ai.speak.school.title',
			desc: 'ai.speak.school.desc',
			li: [
				'ai.speak.school.1',
				'ai.speak.school.2',
				'ai.speak.school.3',
				'ai.speak.school.4',
				'ai.speak.school.5',
				'ai.speak.school.6',
				'ai.speak.school.7'
			],
			quota: 'school.ai_plan.1_year',
			more_href: '/product/ai-tool#speaking-and-listening',
			youtube_id_hk: 'SCQvygVw9I8',
			youtube_id_en: 'SCQvygVw9I8',
			show_video: true,
			color: 'bg-blue-500 text-white',
			text_color: 'text-blue-500',
			hover_color: 'hover:bg-blue-700'
		},
		{
			title: 'ai.dict.school.title',
			desc: 'ai.dict.school.desc',
			li: [
				'ai.dict.school.1',
				'ai.dict.school.2',
				'ai.dict.school.3',
				'ai.dict.school.4'
			],
			quota: 'school.ai_plan.1_year',
			more_href: '/product/ai-tool#dictation',
			youtube_id_hk: 'kzXbpwJvgJM',
			youtube_id_en: 'ZDi_O6qrsbA',
			color: 'bg-red-500 text-white',
			text_color: 'text-red-500',
			hover_color: 'hover:bg-red-700'
		}
	]
</script>

<div class="bg-gray-100">
	<div class="max-w-screen-lg mx-auto px-6 lg:px-12 pb-4 pt-12 lg:py-16">
		<div class="mb-8 font-bold">
			<h2 class="text-p3 md:text-t1 text-red-500 mb-4">{$t('school.ai_plan.pre_title')}</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 items-end mb-4">
				<h1 class="col-span-2 text-t1 sm:text-t2 md:text-h1 text-brown-700">{@html $t('school.ai_plan.title')}</h1>
				<div class="col-span-1">
					<img src="/ai-tool-thumb.png" alt="ai-tool" class="sm:mx-auto">
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-0 md:gap-2 -mx-2 md:mx-0">
			{#each packages as p, i}
				<div class="col-span-1 bg-white text md:text-p3 md:rounded overflow-hidden md:flex md:flex-col">
					<div class="p-4 md:p-8 md:flex-1">
						<div class="inline-flex md:mb-4 mb-2">
							<div class="h-2 md:h-3 w-16 {p.color} rounded-full"></div>
							<div class="h-2 w-2 md:h-3 md:w-3 {p.color} rounded-full ml-2"></div>
						</div>
						<h2 class="font-bold text-t1 sm:text-t2 mt-2 mb-4 {p.text_color}">{$t(p.title)}</h2>
						<p class="text-p2 sm:text-p3 font-bold text-brown-400 my-4">{$t(p.desc)}</p>
						{#each p.li as li}
							<div class="flex items-center my-2 text-brown-500">
								<div class="w-8 h-8 cc flex-shrink-0 -ml-4">
									<Icon name="tick" className="text-red-500 w-4"/>
								</div>
								<p class="ml-4 leading-tight">{$t(li)}</p>
							</div>
						{/each}

						{#if i === 0}
							<div class="flex">
								<div class="w-full sm:w-1/2">
									<img src="/school/school_writing1.png" alt="writing">
									<img src="/school/school_writing2.png" alt="writing">
								</div>

								<div class="w-full sm:w-1/2">
									<img src="/school/school_writing3.png" alt="writing">
								</div>
							</div>
						{:else if i === 1}
							<img class="w-full" src="/school/school_vocab1.jpeg" alt="">
							<div class="flex flex-wrap">
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/vocab-1.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/vocab-2.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/vocab-3.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/vocab-4.jpg" alt="">
								</div>
							</div>
						{:else if i === 2}
							<div class="flex">
								<img class="w-1/3" src="/ai-screens/speaking_2.png" alt="">
								<img class="w-1/3" src="/ai-screens/speaking_3.png" alt="">
								<img class="w-1/3" src="/ai-screens/speaking_4.png" alt="">
							</div>
						{:else if i === 3}
							<div class="flex flex-wrap">
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/dict1.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/dict4.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/dict3.jpg" alt="">
								</div>
								<div class="w-1/2 sm:w-1/4">
									<img src="/school/dict2.jpg" alt="">
								</div>
							</div>
						{/if}


					</div>
					<div class="flex font-bold text md:text-p2">
						<div class="px-4 md:px-8 h-16 bg-gray-300 bg-opacity-50 flex-1 text-gray-500 inline-flex items-center">
							<div class="sm:flex block items-center">
								<p class="leading-tight" style="line-height: 1.1">{@html $t(p.quota)}</p>
							</div>
						</div>
						{#if p.show_video}
							<div on:click={() => {showVideo(p[`youtube_id_${$locale}`])}} class="px-4 sm:px-8 h-16 cursor-pointer {p.color} {p.hover_color} inline-flex items-center text-white">
								<p class="mr-2">{$t('school.ai_plan.video_intro')}</p>
								<Icon name="video"/>
								<p class="text ml-2">{$t('school.ai_plan.video_coming')}</p>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>