<script context="module">
	export const prerender = true;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/Head.svelte'
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="article p-4 container" use:avoidMultipleVideoPlay>
	<div class="mb-8">
		<h1>{$_(slug)}</h1>
		<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg" alt="banner">
		{#if $locale === 'hk'}
			<p class="mb-4">任教老師：優秀外籍老師</p>
			<p >本課程旨在：</p>
			<p >🎯 透過以下主題範疇，突破傳統學校限制，以精英方式培養學生進行閱讀、寫作思維和語言訓練，以及大幅提升學生的視野。 </p>
			<p >🎯 培養學生(包括精英學生)能夠像外國精英學生一樣，能夠對不同主題範疇，進行深入的口語探討，超越香港精英學生的天然局限。這對學生將來無論升學、海外留學或精英就業，皆極具意義! </p>
			<p >🎯 這個課堂另一寶貴的部分，在於老師會持續引導及教授學生就不同閱讀主題一對一進行互動和討論，除了拓寬閱讀視野，對提升學生英文說話及聆聽能力幫助甚大，非本地老師可以做到。</p>
			<p >主題範疇：</p>
			<p>科學、文化、環保、氣候、歷史、人物、日常生活、世界見聞 </p>
			<b>備註:</b>
			<p>香港學生(包括精英學生)的英文Skeaking能力往往和閱讀和寫作能力相差較大，導致：海外留學時或將來就業工作時處於競爭弱勢! </p>
		{:else}
			<p>🎯 The main learning focus is on reading, writing and speaking. Learning is extended to cover the following themes: Science, culture, environmental protection, climate change, history, people, daily life, world experience...</p>
			<p>🎯 In between the classes, daily life conversation and speaking sessions will be brought in to nurture children's ability to "speak like a native".</p>
			<p>🎯 Another valuable part of this class is about offering the opportunity of one-on-one interactions and discussions with native speaker teachers on various reading topics. The goal of students is not just to broaden the reading horizons, but also try the best to train themselves up to reach the level of near native speaker language proficiency, so as to build up their competitive advantage in future study life.</p>
			<p>⭐ Adjust content and difficulty according to students' level and needs</p>
			<b>Remark:</b>
			<p>UK curriculum is subject to enquiry</p>
		{/if}
	</div>
	<div class="p-4 bg-gray-200 rounded">
		<ul class="mb-4">
			<li>{$_('lesson_format')}</li>
			<li>{$_('lesson_duration_40')}</li>
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



