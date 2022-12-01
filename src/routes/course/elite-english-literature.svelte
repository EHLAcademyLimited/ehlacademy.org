<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
</script>
<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/elite-eng-literature.png" alt="elite" class="w-96 rounded-lg mb-4 mx-auto max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{#if $locale === 'en'}
			Elite English Literature Course
		{:else}
			英國文學
		{/if}
	</h1>
	<p class="text-center mb-2 text-lg text-amber-700">Secondary school (British Curriculum/ International Schools/DSE/GCSE).</p>
	<h2>Objectives</h2>
	<p>To introduce a wide range of literary texts that will provide a solid foundation in English Literature study.</p>
	<p>To enhance school-based learning in preparation for the HKDSE in English Literature.</p>
	<h2>Aims</h2>
	<ul>
		<li>To develop student’s familiarity with a range of texts from different genres.</li>
		<li>To develop their awareness of the techniques used by writers, through identifying writers’ choice of language, structure, form and presentation.</li>
		<li>To deepen learners’ understanding of the texts and to enable them to make a personal response informed by their knowledge of literary conventions and terminology.</li>
		<li>To develop learners’ critical and analytical skills and their ability to discuss and convey their ideas effectively.</li>
		<li>To situate texts within their historical, social and cultural context.</li>
		<li>To enable students to make connections between texts, to compare and contrast two or more texts, and to link textual themes to contemporary issues.</li>
	</ul>
	<h2>Range of Texts that may be covered in the course</h2>
	<ul>
		<li>Shakespeare plays (Romeo and Juliet, Macbeth, Othello, The Taming of the Shrew, The Merchant of Venice).</li>
		<li>Selection of Romantic Poetry (Coleridge, Shelley, Burns, Keats, Byron, Wordsworth, Poe, Blake).</li>
		<li>Selection of modern poetry (e.e. cummings, Thomas Hardy, Emily Dickinson, T.S Eliot, Wallace Stevens, William Carlos Williams, Dylan Thomas, Seamus Heaney).</li>
		<li>Nineteenth Century Novels (Charles Dickens, Herman Melville, Jane Austen, Daphne Du Maurier, Mary Shelley).</li>
		<li>Twentieth Century Novels (George Orwell: Animal Farm, F. Scott Fitzgerald: The Great Gatsby, Steinbeck: Of Mice and Men, Golding: Lord of the Flies).</li>
		<li>A selection of short stories.</li>
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


