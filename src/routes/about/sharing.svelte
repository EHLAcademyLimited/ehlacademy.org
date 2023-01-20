<script>
	import {t, locale} from 'svelte-i18n'
	const videos = [
		{
			id: 'goFC8EFy6go',
			title_hk: '新世紀決定電子教育成功的三個維度',
			title_cn: '新世纪决定电子教育成功的三个维度',
			author_hk: '前牛津大學教育學院院長Pro. John Furlong EHLA 總教育顧問 ',
			author_cn: '前牛津大学教育学院院长Pro. John Furlong EHLA 总教育顾问 ',
			title_en: 'Three Dimensions That Contribute to the Success of e-Education',
			author_en: 'Ex-head of Dept. of Education, University of Oxford Chief Education Advisor to EHLA ',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/John%20Furlong_%20Three%20Dimensions%20That%20Contribute%20to%20the%20Success%20of%20e-Education.mp4\n"
		},
		{
			id: 'FxsoVMA6v78',
			title_hk: '全球視角下的中小學電子教育的實踐、趨勢與挑戰',
			title_cn: '全球视角下的中小学电子教育的实践、趋势与挑战',
			author_hk: '牛津大學學習與新技術研究學系聯席課程總監 Niall Winters ',
			author_cn: '牛津大学学习与新技术研究学系联席课程总监 Dr. Niall Winters ',
			title_en: 'The Current Practices, Trends and Challenges in K12 E-learning over the World',
			author_en: 'Dr. Niall Winters, Learning and New Technologies Research Group Dept. of Education, University of Oxford ',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Niall%20Winters_%20The%20Current%20Practices%2C%20Trends%20and%20Challenges%20in%20K12%20E-learning%20over%20the%20World.mp4\n"
		},
		{
			id: '7ztKjnaBNek',
			title_hk: '如何確保EHLA英文教學資源的一致性、可靠性與權威性',
			title_cn: '如何确保EHLA英语教学资源的一致性、可靠性与权力',
			author_hk: '牛津大學語言學家，EHLA 英文總編輯，Dr. Adrian Bullock',
			author_cn: '牛津大学语言学家，EHLA 英文总编辑，Dr. Adrian Bullock ',
			title_en: 'Managing the Quality of EHLA English Language Teaching and Learning Resources',
			author_en: 'Chief Editor of EHLA, Linguist from University of Oxford',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Managing%20the%20Quality%20of%20EHLA%20English%20Language%20Teaching%20and%20Learning%20Resources.mp4"
		},
		{
			id: 'QTJdWATpCLU',
			title_hk: '總編輯的訪問',
			title_cn: '总编辑的访问',
			author_hk: 'EHLA官方頻道',
			title_en: 'Interview with chief editor',
			author_en: 'EHLA Official Channel',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Interview.mp4"
		},
		{
			id: 'ADcpwIAI17g',
			title_hk: '閱讀對學習英文的重要性被嚴重低估',
			title_cn: '阅读对学习英语的重要性被严重低估',
			author_hk: 'EHLA官方頻道',
			title_en: 'How Important is Reading for English Learning',
			author_en: 'EHLA Official Channel',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/How%20Important%20is%20Reading%20for%20English%20Learning.mp4"
		},
		// {
		// 	id: 'qnA3w0PFofI',
		// 	title_hk: 'EHLA智能教育，一個革命性的教育項目',
		// 	title_cn: 'EHLA智能教育，一个革新性的教育项目',
		// 	author_hk: 'EHLA官方頻道',
		// 	title_en: 'EHLA iEducation, A revolutionary educational project\n',
		// 	author_en: 'EHLA Official Channel',
		// 	video_url: "",
		// 	is_cn: false
		// },
		{
			id: '0TSKToBdBS0',
			title_hk: '為什麼亞洲學生需要學習英語文學呢？',
			title_cn: '为什么亚洲学生需要学习英语文学呢？',
			author_hk: 'EHLA官方頻道',
			title_en: 'Why is it crucial for students in Asia to engage more deeply in literature?',
			author_en: 'EHLA Official Channel',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Why%20is%20it%20crucial%20for%20students%20in%20Asia%20to%20engage%20more%20deeply%20in%20literature_.mp4"
		},
		{
			id: 's4p6SZ92-Hw',
			title_hk: 'EHLA智慧教育生態系統與亞洲英語學習環境的聯繫',
			title_cn: 'EHLA智慧教育生态系统与亚洲英语学习环境的联系',
			author_hk: 'EHLA官方頻道',
			title_en: 'The connections between our ecosystem and already-emplaced English learning in Asia.',
			author_en: 'EHLA官方頻道',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/The%20connections%20between%20our%20ecosystem%20and%20already-emplaced%20English%20learning%20in%20Asia..mp4"
		},
		{
			id: 'Z96vh_gLx9Q',
			title_hk: '學習英語文學讓學生的英語能力更上一層樓',
			title_cn: '学习英语文学让学生的英语能力更上一层楼',
			author_hk: 'EHLA官方頻道',
			title_en: 'Providing a diverse range of reading resources that students are sure to grow from.',
			author_en: 'EHLA Official Channel',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Providing%20a%20diverse%20range%20of%20reading%20resources%20that%20students%20are%20sure%20to%20grow%20from..mp4"
		}
	]
</script>

<div class="max-w-screen-lg mx-auto px-4 my-8 sm:my-12">
	<h1 class="sm:text-t2 text-t1">{$t('sharing.title')}</h1>
</div>

<div class="max-w-screen-lg mx-auto px-4 my-8 sm:my-12">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
		{#each videos as v}
			{#if !(v.is_cn === false && $locale === 'cn')}
			<div>
				<div class="v-wrap">
<!--					<iframe src="https://www.youtube.com/embed/{v.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
					<video preload="metadata" controls playsinline class="absolute inset-0 w-full h-full">
						<source src="{v.video_url}#t=12" type="video/mp4">
					</video>
				</div>
				<h2 class="text-p2 mt-2">{v[`title_${$locale}`]}</h2>
				{#if v[`author_${$locale}`]}
					<h2 class="text-gray-500 text-xs">{v[`author_${$locale}`]}</h2>
				{/if}
			</div>
			{/if}
		{/each}
	</div>
</div>

<svelte:head>
	<title>{$t('nav.sharing')}</title>
</svelte:head>

<style>
	.v-wrap {
			padding-top: 56.25%;
			max-width: 500px;
			overflow: hidden;
			@apply relative
	}

	iframe {
			@apply absolute inset-0 w-full h-full
	}
</style>