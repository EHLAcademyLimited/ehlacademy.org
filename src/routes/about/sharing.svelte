<script>
	import {t, locale} from 'svelte-i18n'
	const videos = [
		{
			id: 'goFC8EFy6go',
			title_hk: '新世紀決定電子教育成功的三個維度',
			author_hk: 'John Furlong教授，前牛津大學教育學院院長',
			title_en: 'Three Dimensions That Contribute to the Success of e-Education',
			author_en: 'Professor John Furlong, ex-head of Education Department, Oxford University'
		},
		{
			id: 'FxsoVMA6v78',
			title_hk: '全球視角下的中小學電子教育的實踐、趨勢與挑戰',
			author_hk: 'Niall Winters, 牛津大學教育學院理學碩士教育（學習與技術）課程聯席總監, 牛津大學教育學院學習及新技術學系副教授',
			title_en: 'The Current Practices, Trends and Challenges in K12 E-learning over the World',
			author_en: 'Niall Winters, Co-Director of the MSc Education, Associate Professor of Learning and New Technologies, Department of Education, University of Oxford',
		},
		{
			id: '7ztKjnaBNek',
			title_hk: '如何確保EHLA英文教學資源的一致性、可靠性與權威性',
			author_hk: 'Adrian Bullock',
			title_en: 'Managing the Quality of EHLA English Language Teaching and Learning Resources',
			author_en: 'Adrian Bullock'
		},
		{
			id: 'QTJdWATpCLU',
			title_hk: '總編輯的訪問',
			author_hk: 'EHLA官方頻道',
			title_en: 'Interview with chief editor',
			author_en: 'EHLA Official Channel'
		},
		{
			id: 'ADcpwIAI17g',
			title_hk: '閱讀對學習英文的重要性被嚴重低估',
			author_hk: 'EHLA官方頻道',
			title_en: 'How Important is Reading for English Learning',
			author_en: 'EHLA Official Channel'
		},
		{
			id: 'qnA3w0PFofI',
			title_hk: 'EHLA智能教育，一個革命性的教育項目',
			author_hk: 'EHLA官方頻道',
			title_en: 'EHLA iEducation, A revolutionary educational project\n',
			author_en: 'EHLA Official Channel'
		},
		{
			id: '0TSKToBdBS0',
			title_hk: '為什麼亞洲學生需要學習英語文學呢？',
			author_hk: 'EHLA官方頻道',
			title_en: 'Why is it crucial for students in Asia to engage more deeply in literature?',
			author_en: 'EHLA Official Channel'
		},
		{
			id: 's4p6SZ92-Hw',
			title_hk: 'EHLA智慧教育生態系統與亞洲英語學習環境的聯繫',
			author_hk: 'EHLA官方頻道',
			title_en: 'The connections between our ecosystem and already-emplaced English learning in Asia.',
			author_en: 'EHLA官方頻道'
		},
		{
			id: 'Z96vh_gLx9Q',
			title_hk: '學習英語文學讓學生的英語能力更上一層樓',
			author_hk: 'EHLA官方頻道',
			title_en: 'Providing a diverse range of reading resources that students are sure to grow from.',
			author_en: 'EHLA Official Channel'
		}
	]
</script>

<div class="max-w-screen-lg mx-auto px-4 my-8 sm:my-12">
	<h1 class="sm:text-t2 text-t1">{$t('sharing.title')}</h1>
</div>

<div class="max-w-screen-lg mx-auto px-4 my-8 sm:my-12">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
		{#each videos as v}
			<div>
				<div class="v-wrap">
					<iframe src="https://www.youtube.com/embed/{v.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<h2 class="text-p2 mt-2">{v[`title_${$locale}`]}</h2>
				<p class="text-sm text-gray-400">{v[`author_${$locale}`]}</p>
			</div>
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