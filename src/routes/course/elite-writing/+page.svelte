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
	{#if $locale === 'en'}
		<h1 class="text-center mb-1 text-amber-700">
			Bespoke Elite Writing Programme
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

		<h2>🍀The Uniqueness of EHLA Elite Writing Course Design and Teaching Flow</h2>
		<p>For Elite Writing Class (secondary schl), generally speaking, the course is designed meticulously around the following key stages and skills:</p>
		<p>Taking Argumentative essay writing skills teaching as an example:</p>
		<ul>
			<li>Introduce essay text type. Stylistic features (formal tone, objective language, persuasive language, structure of an essay).</li>
			<li>How to start: generating ideas, brainstorming, listing pros and cons, researching.</li>
			<li>Start to develop a point of view to use as the main argument. Planning – organising ideas and creating a plan for the essay: introduction, body paragraphs each with a key point, conclusion. Working out logical order of arguments.</li>
			<li>Draft writing. Write the introduction, 2 paragraphs and a conclusion as a group guided writing activity (to serve as a after-class writing task).</li>
			<li>Editing, proof-reading. Checking back for mistakes and looking for opportunities for improvement. Students can work as a group editing a poor/mediocre level essay and working how to improve it.</li>
			<li>Compare two versions, looking at differences between an ok level essay and a great level.</li>
			<li>This could be done cyclically, so students do this planning, drafting, editing and comparison process over 2-3 lessons on one theme/ essay question, before moving on to the next topic.</li>
		</ul>
	{:else}
		<h1 class="text-center mb-1 text-amber-700">
			中學精英寫作
		</h1>
		<p class="mb-2 text-lg text-slate-700 text-center text-amber-700">Secondary school (International Schools/DSE/GCSE).</p>

		<h2>目標</h2>
		<p>為學生提供一個十分獨特、進取且能激發思考的精英寫作課程，讓他們通過社會議題、辯論、流行文化、工作場所交流、戲劇、詩歌和歌曲、短篇小說和體育活動等範疇來提高相關高階寫作技巧(learn English and sharpen their writing skills through social issues, debating, popular culture, workspace communication, drama, poems and songs, short stories, and sports communication.)
		</p>

		<h2>通過本課程，學生將 </h2>
		<ul>
			<li>發現卓越寫作的“重要元素”</li>
			<li>探索如何為各種類型的寫作增加強烈風格</li>
			<li>學習如何使你的文章更清晰、優雅和令人回味</li>
			<li>了解如何使您的評論、演講和議論文更具說服力、敏銳及精煉</li>
			<li>學習如何培養“精英”創作者的獨特心態</li>
			<li>學習如何成為一個更有能力和成熟的創作者</li>
		</ul>

		<h2>課程將涵蓋的文本類型/範圍 </h2>
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

		<h2>🍀EHLA精英寫作課程設計及教學流程的獨到之處</h2>
		<p>對於精英寫作班（中學），一般來說，課程是圍繞以下幾個關鍵階段和技巧精心設計的：</p>
		<p>以議論文寫作技巧教學為例：</p>
		<ul>
			<li>介紹論文的文本類型。 文體特徵（正式語氣、客觀語言、說服性語言、文章結構）。</li>
			<li>如何開始：寫作要點Brainstorming、列出利弊論點、探討研究。</li>
			<li>開始發展一個觀點作為主要論點。 計劃——組織想法並為論文制定計劃：引言、正文段落，每個段落都有一個關鍵或主題句、結論。 制定論點的邏輯順序。</li>
			<li>草稿寫作。 將引言、2 段和結論作為指導的寫作活動（作為課後寫作任務）。</li>
			<li>編輯、校對。 檢查錯誤並尋找改進的機會。 學生可以嘗試編輯一篇水平不佳/水平一般的文章，並研究如何改進它。</li>
			<li>比較兩個版本，看看一般水平和優秀水平之間的差異。</li>
			<li>以上循環進行，因此學生可以在 2-3 節課上針對一個主題/文章問題進行規劃、寫作練習、編輯和比較的過程，然後再進入下一個主題。</li>
		</ul>
	{/if}

</div>
<style>
	h1 {
		@apply text-3xl;
	}
	h2 {
		@apply text-xl inline-block border-b border-current border-amber-800 mt-4 mb-2;
	}
	p {
		@apply text-lg mb-2;
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


