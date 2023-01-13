<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import AfterClassRevisionModule from '$lib/one-on-one/after-class-revision-module.svelte'
	import VocabFeature from '$lib/one-on-one/vocab-feature.svelte'
	import ImportantSharing from '$lib/one-on-one/important-sharing.svelte'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import Head from '$lib/Head.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="p-4 article container" use:avoidMultipleVideoPlay>
	<div class="mb-8">
		<h1>{$_(slug)}</h1>
		<p>(L1-L4)</p>
		<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg" alt="banner">
		{#if $locale === 'hk'}
			<p>閱讀與英語會話是英文重要基礎! Zoom課堂提供了不可多得的純正英語環境及機會給孩子，在故事閱讀教學之中學習與外籍老師實時互動，不知不覺提升英文閱讀、聆聽和說話能力。這是香港本地老師和父母難以做到的!</p>
		{:else}
			<p>Reading and speaking are important foundations of English language! The story reading class provides an excellent English speaking environment and opportunity for children to learn and interact with native speaker teachers, and improve their English reading, listening and speaking proficiency.</p>
		{/if}
	</div>

	<div class="my-8">
		<ImportantSharing/>
	</div>

	<div class="p-2 bg-yellow-100">
		<AfterClassRevisionModule/>
	</div>

	<div class="p-2 bg-blue-100">
		<VocabFeature/>
	</div>
</div>
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



<Head
				title={$_(slug)}
				image="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.url.pathname.split('/').pop()}.jpg"
/>