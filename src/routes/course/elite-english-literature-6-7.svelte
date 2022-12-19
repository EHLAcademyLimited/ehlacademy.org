<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
	import Head from "../../lib/Head.svelte";
	let title = $locale === 'en' ?
			'English Literature and Elite Writing (6-7 yro)' :
			'英國文學與精英寫作(6-7歲)'
</script>
<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/elite-eng-literature-6-7.jpeg" alt="elite" class="w-96 rounded-lg mb-4 mx-auto max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{title}
	</h1>
	<p class="text-center mb-2 text-lg text-amber-700">Years 2-3 (Age 6-7 years).</p>
	<p class="text-center mb-2 text-lg text-amber-700">Based upon the British Curriculum</p>

	<h2>Aims</h2>
	<ul>
		<li>To develop students’ reading skills in terms of fluency, accuracy and comprehension through exposure to a diverse range of contemporary and modern texts in English Literature.</li>
		<li>To foster enjoyment in reading in English and to expand student’s vocabulary and grammatical awareness.</li>
		<li>To practice a range of reading skills, including: decoding and understanding new words, drawing on background knowledge, making inferences, understanding cause and effect, identifying themes, sequencing and prediction.</li>
		<li>Through guided questioning and discussion, develop students’ understanding of how language, structure and presentation contribute to meaning.</li>
		<li>To provide opportunity for students to engage in collaborative writing projects for a range of text types (including simple poetry, narratives and plays) and so to develop their understanding of the different steps in the writing process (brainstorming, planning/ organising ideas, drafting, editing and ‘publishing’, or reading aloud the finished piece).</li>
		<li>In the collaborative writing process, students will develop their knowledge of vocabulary, spelling, grammar and correct use of punctuation.</li>
	</ul>
	<h2>Texts that may be covered in the course</h2>
	<ul>
		<li>A range of popular contemporary children’s stories (e.g. Julia Donaldson, Dick King Smith, Anthony Browne, Jill Tomlinson)</li>
		<li>A range of classic children’s stories (e.g. Enid Blyton, Roald Dahl, Judith Kerr, ‘The Little Prince’, ‘Winnie the Pooh’, fairy tales/ fables)</li>
		<li>Poetry for children (e.g. Haiku, Calligram, Limerick, Narrative Poetry, Kenning, Free Verse).</li>
		<li>Short Plays for children.</li>
		<li>Non-fiction: A range non-fiction texts including informational texts on topics such as animals, the body, space, the weather and seasons, and dinosaurs; a biography of a famous person; a news report; a letter or invitation, a recipe, and a diary entry.</li>
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

<Head {title}/>
