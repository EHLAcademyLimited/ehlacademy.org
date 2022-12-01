<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
</script>

<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/elite.jpg" alt="elite" class="w-96 mx-auto mb-4 max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{#if $locale === 'en'}
			Bespoke Elite Writing Programme
		{:else}
			中學精英寫作
		{/if}
	</h1>
	<h1 class="mb-1 text-center text-amber-700">

	</h1>
	<p class="mb-2 text-lg text-slate-700 text-center text-amber-700">Secondary school (International Schools/DSE/GCSE).</p>

	<h2>Objectives</h2>
	<p>To provide students with a rigorous and stimulating programme in which they learn English and sharpen their writing skills through social issues, debating, popular culture, workspace communication, drama, poems and songs, short stories, and sports communication.</p>

	<h2>Through this course, you will</h2>
	<ul>
		<li>discover the "secret sauce" of exceptional writing.</li>
		<li>discover how to add style to your writing on various genres.</li>
		<li>learn how to make your essay more clear, elegant, and evocative</li>
		<li>learn how to make your comment, review, speech, and argumentative text more persuasive, incisive, and refined.</li>
		<li>learn how to cultivate the unique mindset of an "elite" writer.</li>
		<li>learn how to become a more competent and sophisticated writer.</li>
	</ul>

	<h2>Range of text types/genres that will be covered in the course</h2>
	<ul>
		<li>Essay</li>
		<li>Argumentative essay</li>
		<li>Narrative</li>
		<li>Speech</li>
		<li>Debate speech</li>
		<li>Restaurant review</li>
		<li>Film review</li>
		<li>Letter to the editor</li>
		<li>News report/article</li>
		<li>Article in News column</li>
		<li>Reporting feature article based on interview</li>
		<li>Letter</li>
		<li>Letter of application</li>
		<li>Letter of complaints</li>
		<li>Letter of reply to complaints</li>
		<li>Entry/comments</li>
		<li>Email</li>
		<li>Blog post</li>
	</ul>
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


