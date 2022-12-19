<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import ImportantSharing from '$lib/one-on-one/important-sharing.svelte'
	import AfterClassRevisionModule from '$lib/one-on-one/after-class-revision-module.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/Head.svelte'

	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="article mx-auto p-4 max-w-screen-lg" use:avoidMultipleVideoPlay>
	<h1>{$_(slug)}</h1>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg" alt="banner">
	{#if $locale === 'hk'}
		<p>閱讀與英語會話是英文重要基礎! 3至6歲是語言學習一個極為重要的階段。課程提供了不可多得的純正英語環境及機會給孩子，在閱讀教學之中學習與外籍老師實時互動，不知不覺提升英文閱讀和說話能力。這是香港本地老師和父母難以做到的!</p>
		<p>🎯 外籍老師在小故事閱讀及對話主題教學之中，也會延伸教授內容及語境中的相關詞彙、Sentence pattern(句式)、朗讀、發音及表達。過程當中也會不時滲入日常對話教學，引導小朋友to speak like a native.</p>
		<p>🎯 對K2, K3小朋友，課程亦會加入與升小一面試Interview 相關的重要內容。</p>
		<p class="underline">升小一面試經常要求具備以下能力：</p>
		<ul>
			<li>🍏Q&A 英文對答系列*</li>
			<li>🍉Words & pronunciation</li>
			<li>🍇Number recognition</li>
			<li>🍓Show & Tell 看圖說話</li>
			<li>🍑Storytelling 看圖說故事</li>
			<li>🍎Read aloud 小文章朗讀</li>
		</ul>
		<p>*英小或國際學校特別要求小朋友具備相當不錯的英文口語能力</p>
	{:else}
		<p>🎯 For kindergarten kids, the main learning focus is on reading of short stories & rhymes. In the reading context, learning is extended to vocabulary building, phonics, pronunciation, recitation and sentence pattern.</p>
		<p>🎯 In between the reading and extension learning classes, daily life conversation and speaking sessions will be brought in to nurture children's ability to "speak like a native".</p>
		<p>🎯 For K2 & K3, the programme covers P1 interview related content and training (升小一面試Interview 相關的預備內容)</p>
		<ul>
			<li>🍏Q&A</li>
			<li>🍉Words & pronunciation</li>
			<li>🍇Number recognition</li>
			<li>🍓Show & Tell</li>
			<li>🍑Storytelling</li>
			<li>🍎Read aloud</li>
		</ul>
	{/if}

	<div class="bg-yellow-100 p-2 my-4">
		<ImportantSharing/>
	</div>

	<div class="bg-blue-100 p-2 my-4">
		<AfterClassRevisionModule/>
	</div>

	<div class="p-4 bg-gray-200 rounded">
		<ul class="mb-4">
			<li>{$_('lesson_target')}： K2-K3</li>
			<li>{$_('lesson_format')}</li>
			<li>{$_('lesson_duration_30')}</li>
		</ul>
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


