<script context="module">
	export const prerender = false;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/ui/WhatsappEnquiry.svelte'
	import Head from '$lib/Head.svelte'
	import Icon from "$lib/ui/Icon.svelte";
	const slug = $page.url.pathname.split('/').pop()
</script>

<div class="container py-4">
	<a href="/course" class="text-blue-500 mb-4 flex whitespace-nowrap">
		<Icon name="right3" className="w-2.5 transform rotate-180 mr-1"/>
		{$_('back')}
	</a>
	<img src="/one-on-one/dse-oral.jpg" alt="elite" class="w-96 mx-auto mb-4 max-w-full">
	<h1 class="text-center mb-1 text-amber-700">
		{#if $locale === 'en'}
			DSE Speaking (Exam-driven)
		{:else}
			DSE英文說話考試－模擬訓練課程
		{/if}
	</h1>

	{#if $locale === 'hk'}
		<h2>須知：DSE</h2>
		<p>英文說話(Oral)考試主題範圍非常廣闊，學生很難在短時間內完成應試準備。同時，英語說話及表達能力、小組使用英語進行主題討論的能力均是香港學生(包括精英學生在內)最薄弱的環節。DSE考試 "一試定勝負”，要贏(5**) 或者至少“唔輸”，以下兩方面缺一不可：</p>
		<ul>
			<li>(1) 給予自己充分時間進行真正能力提升</li>
			<li>(2) 摘星應試技巧訓練</li>
		</ul>
		<p>好多學生經常受坊間誤導，認為可以在中六最後一年衝刺時，靠補考試“形式化技巧”過關。這是在欺騙自己以及用自己前途開玩笑! 試想想：</p>
		<ul>
			<li>(a) 中六時同學要同時準備多個科目考試，不可能有太多時間分配給英文科；</li>
			<li>(b) 當同學面對一個連“睇都睇唔明”的主題內容，或相關主題內容的詞彙嚴重不足時，如何靠坊間所謂“形式化技巧”過關？！除非你當考官只是一個擺設。</li>
		</ul>
		<p>建議：同學需要實實在在趁中三、中四及中五尚有時間時，給自己進行真正能力提升。</p>
		<p>目標：幫助同學提早達到DSE 5**所需要的能力以及技巧</p>

		<h2>課程強勢特色</h2>
		<ul>
			<li>英美老師陪學生進行英文說話及小組主題討論訓練，指導同學進行提升</li>
			<li>採用DSE 真實考題進行學習訓練</li>
			<li>課堂內容加入雙語註釋，確保同學可以完全明白及吸收</li>
			<li>指導DSE Speaking 5**技巧</li>
		</ul>

		<h2>課堂設為上下三小節：</h2>
		<ul>
			<li>(i) 指導同學相關主題重要詞彙(雙語註釋)以及表達；指導主題討論的要點表達</li>
			<li>(ii) 進行模擬考試訓練：老師作為考官；學生進行限時模擬小組討論，以及個人問答回應</li>
			<li>(iii) 老師點評表現，及給學生改善建議</li>
		</ul>
		<p>包括 descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>

		<h2>創意寫作元素</h2>
		<p>側重於教學生如何運用技巧，一步一步地構建一個具水平的小作品。 同時，加強學生廣泛應用單詞和寫更長、更複雜和更合乎正規語法句子的能力。</p>

		<h2>進階看圖寫作</h2>
		<p>本環節目的是啟發學生在有限或相對簡單的圖片資料之上，發揮想像力，構思更豐富的故事情節，進行更深入的細節描寫，或創造更出人意料的故事結局。同時引導學生使用更複雜的句子結構，以及更高階的詞彙進行故事創作。 </p>

		<h2>高階詞彙運用</h2>
		<p>引導學生在創作時，運用更多變、更豐富、更貼切的詞彙，讓作品的整體質素得以再上升一個層次。</p>
	{:else}
		<h2>Background, recommendations and objectives</h2>
		<p>Key notes: The DSE English Speaking exam encompasses a very wide array of topics, and it is difficult for students to prepare for it in a short period of time. Moreover, the English speaking proficiency is the Achilles heel of Hong Kong students (including many elite students). Students get only one shot in the DSE exam. In order to achieve the 5** grade or at least "not to lose", the following two aspects are indispensable:</p>
		<ul>
			<li>(1) Give yourself enough time to truly improve your English speaking proficiency</li>
			<li>(2) familiarize yourself with the exam-taking skills for the grade of 5**</li>
		</ul>
		<p>Many students are often misled that they can 'win' in the examination just counting on the 'exam skills' when they are sprinting in the final year of Secondary 6.  This is deceiving yourself and joking about your future for that:</p>
		<ul>
			<li>(a) Secondary 6 students have to prepare for multiple subject examinations at the same time, and it is bearly possible to allocate too much time to English subject;</li>
			<li>(b) When students are faced with a topic that is hard to understand, or their vocabulary level of the related topic is seriously insufficient, how can they rely on the so-called "exam skills" to pass the exam ?!  Unless you deem the examiner just a decoration.</li>
		</ul>
		<p>Recommendation: Students need to really improve their English proficiency while they still have time in Secondary 3, 4 and 5.</p>
		<p>Goal: To help students achieve the abilities and skills required for DSE 5** at an early stage.</p>

		<h2>Course strong features</h2>
		<ul>
			<li>British and American teachers train up students English speaking proficiency and group discussion abilities, and guide them to improve;</li>
			<li>DSE past exam papers are adopted in calss for learning and training;</li>
			<li>Bilingual annotations are added to ensure that students can fully understand and absorb the class content;</li>
			<li>DSE Speaking 5** skills set will be taught in class.</li>
			<li>The class is set to include three sections:</li>
		</ul>

		<h2>This class is set to include three sections</h2>
		<ul>
			<li>(i) Teach students important vocabulary (bilingual annotations) and key expressions on relevant topic discussions</li>
			<li>(ii) Mock exam training: the teacher acts as an examiner; students engage in time-limited mock group discussions and individual Q&A responses</li>
			<li>(iii) The teacher comments on performance and makes suggestions for improvement to students</li>
		</ul>
	{/if}

	<ul class="mt-8 p-4 bg-gray-200 rounded">
		<li>{$_('lesson_format')}</li>
		<li>{$_('lesson_duration_40')}</li>
		<WhatsappEnquiry/>
	</ul>
</div>
<style>
	h1 {
		@apply text-3xl;
	}
	h2 {
		@apply text-xl inline-block border-b border-current border-amber-800 mt-6 mb-2;
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
