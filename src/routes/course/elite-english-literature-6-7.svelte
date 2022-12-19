<script>
	import {_, locale} from "svelte-i18n";
	import Icon from "$lib/ui/Icon.svelte";
	import Head from "../../lib/Head.svelte";
	$: title = $locale === 'en' ?
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

	{#if $locale === 'hk'}
		<h2>課堂宗旨</h2>
		<ul>
			<li>通過接觸各種當代和現代英國文學文本，培養學生在流利度、準確性和理解力方面的閱讀技能。</li>
			<li>培養英語閱讀的樂趣，擴大學生的詞彙量和語法意識。</li>
			<li>練習一系列閱讀技巧，包括：拆解和理解新單詞、利用背景知識、進行推理、理解因果關係、識別主題、排序和預測。</li>
			<li>通過有指導的提問和討論，培養學生對語言、結構和表達方式如何有助於意義的理解。</li>
			<li>為學生提供參與各種文本類型（包括簡單的詩歌、敘事和戲劇）的協作寫作項目的機會，從而加深他們對寫作過程中不同步驟的理解（頭腦風暴、計劃/組織想法、起草、 編輯和“出版”，或大聲朗讀完成的作品）。</li>
			<li>在協作寫作過程中，學生將發展他們的詞彙、拼寫、語法和正確使用標點符號的知識。</li>
		</ul>
		<h2>課程中可能涵蓋的文本</h2>
		<ul>
			<li>一系列流行的當代兒童故事（例如 Julia Donaldson、Dick King Smith、Anthony Browne、Jill Tomlinson）</li>
			<li>一系列經典兒童故事（例如 Enid Blyton、Roald Dahl、Judith Kerr、“小王子”、“小熊維尼”、童話/寓言）</li>
			<li>兒童詩歌（例如俳句、書法、打油詩、敘事詩、肯寧、自由詩）。</li>
			<li>兒童短劇。</li>
			<li>非小說類：一系列非小說類文本，包括有關動物、身體、空間、天氣和季節以及恐龍等主題的信息文本； 名人傳記； 新聞報導； 一封信或邀請函、一份食譜和一篇日記。</li>
		</ul>
	{:else}
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
	{/if}
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
