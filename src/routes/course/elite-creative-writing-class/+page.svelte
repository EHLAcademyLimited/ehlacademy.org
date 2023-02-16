<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import Head from '$lib/Head.svelte'
	import Icon from "$lib/ui/Icon.svelte";
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/creative-writing.jpeg" alt="elite" class="w-96 mx-auto mb-4 max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{#if $locale === 'en'}
			Elite Native Writing (8-11 yro)
		{:else}
			英文精英寫作課程 (8-11 yro)
		{/if}
	</h1>

	{#if $locale === 'hk'}
		<h2>精英寫作技巧</h2>
		<p>教授各種寫作技巧，例如：動詞、連接詞與形容詞的應用技巧 application of verbs, connectives and adjectives 明喻smiles, 暗喻metaphors, 擬聲詞onomatopoeia, 擬人化personification, 製造緊張和懸疑building tension and suspense... </p>

		<h2>教授各種寫作文體</h2>
		<p>包括 descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>

		<h2>創意寫作元素</h2>
		<p>側重於教學生如何運用技巧，一步一步地構建一個具水平的小作品。 同時，加強學生廣泛應用單詞和寫更長、更複雜和更合乎正規語法句子的能力。</p>

		<h2>進階看圖寫作</h2>
		<p>本環節目的是啟發學生在有限或相對簡單的圖片資料之上，發揮想像力，構思更豐富的故事情節，進行更深入的細節描寫，或創造更出人意料的故事結局。同時引導學生使用更複雜的句子結構，以及更高階的詞彙進行故事創作。 </p>

		<h2>高階詞彙運用</h2>
		<p>引導學生在創作時，運用更多變、更豐富、更貼切的詞彙，讓作品的整體質素得以再上升一個層次。</p>
	{:else}
		<h2>Elite writing skills</h2>
		<p> To teach various elite writing skills, including but not limited to similes, metaphors, onomatopoeia, personification, building tension and suspense, and the application of advanced verbs, connectives, adjectives, adverbs...</p>

		<h2>Various text types</h2>
		<p>To explore various text types, including descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>

		<h2>Creative writing elements</h2>
		<p>To teach students how to construct a beautiful writing work step by step. In the meantime, it strengthens their abilities in applying a wide range of words and writing longer, more complex and grammatical sentences. </p>

		<h2>Advanced picture composition</h2>
		<p>To inspire students to use their imaginations on the basis of limited or relatively simple picture materials, to conceive richer storylines, to describe more details, or to create more intriguing story endings.  Meanwhile, students are guided to use more complex sentence structures and advanced vocabulary to write the stories.</p>

		<h2>Advanced vocabulary in use</h2>
		<p>To guide students to diversify the application of vocabulary for their writing, so that the overall quality of their work can be enhanced to a new higher level. </p>
	{/if}
</div>
<style>
	h1 {
		@apply text-3xl;
	}
	h2 {
		@apply text-xl inline-block border-b border-current border-amber-800 mt-4 mb-2;
	}
	ul {
		@apply mb-4 mb-2 text-lg;
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
