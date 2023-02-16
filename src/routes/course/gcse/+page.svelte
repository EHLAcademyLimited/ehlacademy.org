<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
</script>

<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/gcse.jpg" alt="elite" class="w-96 mx-auto mb-6 max-w-full rounded-lg">
	<h1 class="text-center mb-1 text-amber-700">
		GCSE /British Curriculum
	</h1>
	<div class="text-center text-amber-700 text-xl">To cover writing and English Literature under the GCSE exam framework</div>
	<div class="h-1 w-8 bg-amber-700 mx-auto mt-4 mb-8 rounded-lg"></div>

	<div class="bg-amber-100 p-4 rounded-xl">
		<h1 class="text-amber-700">Elite English Literature Class</h1>
		<h2>Objectives</h2>
		<p>To introduce a wide range of literary texts that will provide a solid foundation in English Literature study.</p>
		<p>To enhance school-based learning in preparation for the GCSE in English Literature.</p>

		<h2>Aims</h2>
		<ul>
			<li>To develop student’s familiarity with a range of texts from different genres.</li>
			<li>To develop their awareness of the techniques used by writers, through identifying writers’ choice of language, structure, form and presentation..</li>
			<li>To deepen learners’ understanding of the texts and to enable them to make a personal response informed by their knowledge of literary conventions and terminology.</li>
			<li>To develop learners’ critical and analytical skills and their ability to discuss and convey their ideas effectively.</li>
			<li>To situate texts within their historical, social and cultural context.</li>
			<li>To enable students to make connections between texts, to compare and contrast two or more texts, and to link textual themes to contemporary issues.</li>
		</ul>

		<h2>Range of text types/genres that will be covered in the course</h2>
		<ul>
			<li>Shakespeare plays (Romeo and Juliet, Macbeth, Othello, The Taming of the Shrew, The Merchant of Venice).</li>
			<li>Selection of Romantic Poetry (Coleridge, Shelley, Burns, Keats, Byron, Wordsworth, Poe, Blake).</li>
			<li>Selection of modern poetry (e.e. cummings, Thomas Hardy, Emily Dickinson, T.S Eliot, Wallace Stevens, William Carlos Williams, Dylan Thomas, Seamus Heaney).</li>
			<li>Nineteenth Century Novels (Charles Dickens, Herman Melville, Jane Austen, Daphne Du Maurier, Mary Shelley).</li>
			<li>Twentieth Century Novels (George Orwell: Animal Farm, F. Scott Fitzgerald: The Great Gatsby, Steinbeck: Of Mice and Men, Golding: Lord of the Flies).</li>
			<li>A selection of short stories.</li>
		</ul>
	</div>

	<div class="bg-amber-100 p-4 rounded-xl mt-4">
		<h1 class="text-amber-700">
			Bespoke Elite Writing Class
		</h1>

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


