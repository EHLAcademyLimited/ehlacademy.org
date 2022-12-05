<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
</script>
<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/eng-literature-primary.jpeg" alt="elite" class="w-96 rounded-lg mb-4 mx-auto max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{#if $locale === 'en'}
			English Literature Programme
		{:else}
			小學英國文學
		{/if}
	</h1>
	<p class="text-center mb-2 text-lg text-amber-700">Primary School Level (Years 4-6, Key Stage 2 in the UK).</p>
	<p class="text-center mb-2 text-lg text-amber-700">Students aged: 8-11 years</p>

	<h2>Aims</h2>
	<ul>
		<li>To develop learners’ pleasure in reading English texts and to develop their vocabulary and understanding of the conventions of a range of texts including fiction, poetry and non-fiction.</li>
		<li>To encourage learners to deepen their comprehension while reading through discussion of key themes, language techniques and characterisation in stories.</li>
		<li>To guide the application of higher-order analytical skills when responding to a text, including inference, interpretation, comparison and evaluation.</li>
		<li>To develop learners’ abilities in reading aloud, including correct pronunciation, intonation, tone, volume and expression in ways that demonstrate and enhance meaning. Learners will thus be guided in reading texts aloud and the performance of dialogues and poems.</li>
		<li>To improve readers’ skills in tackling non-fiction texts, including: skim and scan reading for gist and specific information, taking useful notes, and synthesising information for a purpose.</li>
	</ul>
	<h2>Content of the Course</h2>
	<p>The course will be comprised of extracts from a wide range of classic and contemporary young readers’ fiction, poetry, plays and non-fiction texts.</p>
	<p>This may include:</p>
	<ul>
		<li>Classical Myths and Legends</li>
		<li>Traditional Stories/ Fairy Tales/ Fables</li>
		<li>Modern Fiction</li>
		<li>Books from other Cultures and Traditions</li>
		<li>Young Readers’ Poetry</li>
		<li>Plays for young actors</li>
		<li>Factual Information Texts: for example, magazine or news articles on Science, History or Geography; extracts from textbooks; a short biography or recount.</li>
	</ul>
</div>

<style>
	h1 {
		@apply text-3xl;
	}
	h2 {
		@apply text-xl inline-block border-b border-amber-800 mt-4 mb-2 text-amber-800;
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


