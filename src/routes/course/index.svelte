<script context="module">
	export const prerender = false;
	import {locale, _} from 'svelte-i18n'
	import Head from '$lib/Head.svelte'
	import Footer from '$lib/app-shelf/Footer.svelte'
</script>

<script>
	const ad_list = [
		{
			title_en: 'GCSE',
			title_hk: 'GCSE 英國適應課程',
			title_cn: 'GCSE英国合适课程',
			href: 'gcse',
			image: '/one-on-one/gcse.jpg'
		},
		{
			title_en: 'Bespoke Elite Writing Programme',
			title_hk: '中學英文精英寫作',
			title_cn: '中学英语精英写作',
			href: 'elite-writing',
			image: '/one-on-one/elite.jpg'
		},
		{
			title_en: 'Elite Native Writing (8-11yro)',
			title_hk: '英文精英寫作 (8-11yro)',
			title_cn: '中文精英写作 (8-11yro)',
			href: 'elite-creative-writing-class',
			image: '/one-on-one/creative-writing.jpeg'
		},
		{
			title_en: 'English Literature and Elite Writing (6-7 yro)',
			title_hk: '英國文學與精英寫作(6-7歲)',
			title_cn: '英国文学与精英写作(6-7岁)',
			href: 'elite-english-literature-6-7',
			image: '/one-on-one/elite-eng-literature-6-7.jpeg'
		},
		{
			title_en: 'Elite English Literature',
			title_hk: '英國文學',
			title_cn: '英国文学',
			href: 'elite-english-literature',
			image: '/one-on-one/elite-eng-literature.png'
		},
		{
			title_en: 'Elite English Literature (8-11yro)',
			title_hk: '英國文學(8-11yro)',
			title_cn: '英国文学（8-11岁）',
			href: 'elite-english-literature-for-8-11',
			image: '/one-on-one/eng-literature-primary.jpeg'
		},
		{
			title_en: 'DSE Speaking',
			title_hk: 'DSE英文說話考試',
			title_cn: 'DSE英语会话考试',
			href: 'dse-speaking',
			image: '/one-on-one/dse-oral.jpg'
		},
		{
			title_en: 'Reading & Speaking Programme (below 6 yro)',
			title_hk: '小精英級K班課程',
			title_cn: '小精英級K班课程',
			href: 'reading-and-speaking-for-kindergarten'
		},
		{
			title_en: 'Story telling and speaking',
			title_hk: '英文故事閱讀與會話課堂',
			title_cn: '英语故事阅读与会话课堂',
			href: 'story-telling-and-speaking'
		},
		{
			title_en: 'Exam-prep (呈分試) Intensive English Programme',
			title_hk: '呈分試英文特訓外教課程',
			title_cn: '呈分试英语特训外教课程',
			subtitle_en: '(P4-P6)',
			subtitle_hk: '(小四至小六)',
			href: 'exam-prep-intensive-english-programme'
		},
		{
			title_en: 'English Language Leap Programme',
			title_hk: '補底增強(特製) 英文躍升計劃',
			title_cn: '补底增强(特制) 英文跃升计划',
			href: 'english-language-leap-programme'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '精英閱讀與主題對談',
			title_cn: '精英阅读与主题对话',
			href: 'reading-and-speaking-elite-programme'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '閱讀、寫作與主題對話',
			title_cn: '阅读、写作与主题对话',
			subtitle_en: 'UK curriculum',
			subtitle_hk: '英國適應課程',
			href: 'reading-writing-and-speaking-bridging-uk'
		}
	]
</script>

<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each ad_list as item}
			<div class="mb-4">
				<a class="mb-2 block" href="/course/{item.href}">
					<div class="relative overflow-hidden" style="padding-top: 56%">
						{#if item.image}
							<img class="absolute inset-0 rounded -top-4" src="{item.image}" alt={item.title_en}>
						{:else}
							<img class="absolute inset-0 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{item.href}.jpg" alt={item.title_en}>
						{/if}
					</div>
					<h2 class="mt-2 text-gray-700 font-bold text-2xl">{item[`title_${$locale}`]}</h2>
					{#if item[`subtitle_${$locale}`]}
						<p class="mt-1 text-gray-500 font-bold text-lg">{item[`subtitle_${$locale}`]}</p>
					{/if}
				</a>
			</div>
		{/each}
	</div>
</div>

<Head title={$_('one_on_one')}/>