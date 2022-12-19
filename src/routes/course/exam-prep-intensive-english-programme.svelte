<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import ExamTrainingPack from '$lib/one-on-one/exam-training-pack.svelte'
	import VocabFeature from '$lib/one-on-one/vocab-feature.svelte'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/Head.svelte'
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="article mx-auto p-4 max-w-screen-lg" use:avoidMultipleVideoPlay>
	<h1>{$_(slug)}</h1>
	{#if $locale === 'hk'}
		<p>(小四至小六)</p>
	{:else}
		<p>P4-P6</p>
	{/if}
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg" alt="banner">
	{#if $locale === 'hk'}
		<p>為幫學生全面預備呈分試，課程編排上，外籍老師在課堂上的教學，不會只局限在會話等狹窄範疇，而會針對多個範疇(讀、寫、聽、說、文法)對學生進行特訓。</p>
		<p>🎯 閱讀及對話主題教學之中，也會延伸教授內容及語境中的相關詞彙、文法(Grammar)、朗讀、發音及表達、閱讀理解技巧。過程當中也會不時滲入日常對話教學，引導學生to speak like a native. </p>
		<p>🎯 這個課堂另一寶貴的部分，在於老師會持續引導及教授學生就不同閱讀主題一對一進行互動和討論，除了拓寬閱讀視野，對提升學生英文說話及聆聽能力幫助甚大，非本地老師可以做到。</p>

		<ul>
			<li>⭐ 課程真正符合香港教育局要求</li>
			<li>⭐ 讀、寫、聽、說、文法全面兼顧</li>
			<li>⭐ 根據學生水平及需要調校內容及難度</li>
			<li>⭐ 學生可以根據水平及需要，靈活選擇以下範疇(可選全部)：</li>
			<li>🎯 閱讀＋說話 </li>
			<li>🎯 閱讀理解技巧提升</li>
			<li>🎯 寫作</li>
			<li>🎯 文法應用</li>
			<li>🎯 聆聽</li>
			<li>🎯 升中面試對答訓練</li>
		</ul>
	{:else}
		<p>🎯 The main learning focus is on reading, writing and speaking. Learning is extended to vocabulary building,  pronunciation and recitation, grammar and reading comprehension. In between the classes, daily life conversation and speaking sessions will be brought in to nurture children's ability to "speak like a native".</p>
		<p>🎯 Another valuable part of this class is about offering the opportunity of one-on-one interactions and discussions with native speaker teachers on various reading topics. The goal of students is not just to broaden the reading horizons, but also try the best to train themselves up to enhance the level of speaking proficiency, so as to build up their competitive advantage in future study life.</p>
		<p class="underline">Tailored content and difficulty level to fit the student's level and needs:</p>
		<ul>
			<li>🎯 Reading & Speaking</li>
			<li>🎯 Reading Comprehension Skills</li>
			<li>🎯 Writing</li>
			<li>🎯 Grammar Usage</li>
			<li>🎯 Listening Skills</li>
			<li>🎯 Interview training for prompting to secondary school (升中面試訓練)</li>
		</ul>
	{/if}

	<div class="p-2 bg-yellow-100">
		<ExamTrainingPack/>
	</div>
	<div class="p-2 bg-blue-100">
		<VocabFeature/>
	</div>
	<div class="p-4 bg-gray-200 rounded">
		<li>{$_('lesson_format')}</li>
		<li>{$_('lesson_duration_30_40')}</li>
		<WhatsappEnquiry/>
	</div>
</div>

<Head
				title={$_(slug)}
				image="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg"
/>
<style>
	h1 {
		@apply sm:text-3xl text-2xl;
	}
	h2 {
		@apply sm:text-xl text-base inline-block border-b border-current border-amber-800 mt-4 mb-2;
	}
	p {
		@apply sm:text-lg text-base;
	}
	ul {
		@apply mb-4 mb-2 sm:text-lg text-base;
	}
	li {
		@apply pl-4 relative text-slate-700;
	}
	li:before {
		@apply w-1.5 h-1.5 bg-gray-400 rounded-full absolute left-0 top-3;
		content: ' ';
	}
</style>


