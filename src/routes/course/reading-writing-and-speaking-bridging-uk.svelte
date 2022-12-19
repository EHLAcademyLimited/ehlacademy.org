<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/Head.svelte'
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="p-4 article container" use:avoidMultipleVideoPlay>
	<div class="mb-8">
		<h1>{$_(slug)}</h1>
		{#if $locale === 'hk'}
			<div role="doc-subtitle">英國適應課程</div>
		{:else}
			<div role="doc-subtitle">UK Curriculum</div>
		{/if}
		<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg" alt="banner">
		{#if $locale === 'hk'}
			<p>本課程旨在幫助學生適應英國學校的英文水平要求，讓學生強化學習，以及進行思維訓練，目標是將學生英文綜合能力、思維分析能力及視野提升至英國同級學生的相若水平。 </p>
			<p>這個課堂最寶貴的部分，不在於學了什麼閱讀主題，而在於可以把握機會盡情地和英國老師就某個閱讀主題一對一進行互動和討論，目標是，除了拓寬自己的閱讀視野，還要盡力培養自己能具備Native speaker 語言能力，以提早適應在英國的學習生活! </p>
		{:else}
			<p>This Zoom class is to bridge students' English proficiency in reading, writing and speaking with their counterparts in the UK.</p>
			<p>The most valuable part of this class is not about what reading topics students will learn, but about taking the opportunity to interact one-on-one with British teachers on various reading topics. The goal is not just to broaden the reading horizons, but also try the best to train themselves up to harness native speaker language skills, so as to adapt to their study life in the UK.</p>
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


