<script>
	import {_, t, locale} from 'svelte-i18n'
	const v = {
		id: '7ztKjnaBNek',
		title_hk: '如何確保EHLA英文教學資源的一致性、可靠性與權威性',
		title_cn: '如何确保EHLA英语教学资源的一致性、可靠性与权力',
		author_hk: '牛津大學語言學家，EHLA 英文總編輯，Dr. Adrian Bullock',
		title_en: 'Managing the Quality of EHLA English Language Teaching and Learning Resources',
		author_en: 'Chief Editor of EHLA, Linguist from University of Oxford',
		video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Managing%20the%20Quality%20of%20EHLA%20English%20Language%20Teaching%20and%20Learning%20Resources.mp4",
		poster: "/video_preview_3.png"
	}
</script>

<div class="bg-yellow-100 bg-no-repeat bg-right-bottom bg-size">
	<div class="max-w-screen-lg px-6 py-12 md:py-16 mx-auto">
		<div class="grid grid-cols-1">
			<div class="text-brown-500">
				<div class="mb-4 md:mb-8 text-center">
					{#if $locale === "en"}
						<p class="text-p3 md:text-t1 font-bold mb-0 sm:mb-4">e-Publishing | Teaching and Learning Resources</p>
						<h1 class="text-t2 md:text-h1 text-red-500 font-bold">Trustworthy, Authoritative</h1>
						<p class="text-lg sm:text-2xl mt-2 sm:mt-4">Rigorous Quality Management of EHLA English Teaching and Learning Resources</p>
					{:else}
						<p class="text-p3 md:text-t1 font-bold mb-0 sm:mb-4">電子出版 | 教與學資源</p>
						<h1 class="text-t2 md:text-h1 text-red-500 font-bold">值得信賴，權威</h1>
						<p class="text-lg sm:text-2xl mt-2 sm:mt-4">EHLA英文教與學資源的嚴格品質管理</p>
					{/if}
				</div>

				<div class="my-4">
					<div class="rounded-2xl overflow-hidden">
						<video controls src={v.video_url} poster={v.poster}></video>
						<div class="p-2 sm:py-4 bg-gray-400 text-white text-center text-sm sm:text-lg">
							<p class="mb-1">{v[`title_${$locale}`]}</p>
							<p>{v[`author_${$locale}`]}</p>
						</div>
					</div>
				</div>

				{#if $locale === "en"}
					<div class="mt-4 sm:mt-8 sm:text-xl">
						<p class="mb-4">At EHLA, we are committed to providing high-quality, trustworthy, and authoritative English teaching and learning resources through our rigorous quality management process.</p>
						<p class="font-bold mb-2">Why Choose Our Resources?</p>
						<ul class="bullet-points">
							<li>Trustworthy: Our resources are developed by experts in the field and reviewed by experienced educators to ensure accuracy and relevance.</li>
							<li>Authoritative: Our quality management process ensures that our resources meet the highest standards of educational excellence.</li>
							<li>Effective: Our resources are designed to engage learners and support teachers in achieving their goals.</li>
						</ul>
					</div>
				{:else}
					<div class="mt-4 sm:mt-8 sm:text-xl">
						<p class="mb-4">在EHLA，我們致力於透過嚴格的品質管理流程提供高品質、值得信賴和權威的英文教學和學習資源。</p>
						<p class="font-bold mb-2">為什麼選擇我們的資源？</p>
						<ul class="bullet-points">
							<li>值得信賴：我們的資源由該領域的專家開發，並由經驗豐富的教育工作者審查，以確保準確性和相關性。</li>
							<li>權威：我們的品質管理流程確保我們的資源符合教育卓越的卓越標準。</li>
							<li>有效：我們的資源旨在讓學習者參與進來，並支援老師實現他們的目標。</li>
						</ul>
					</div>

				{/if}

			</div>
		</div>
	</div>
</div>

<style>
	.bullet-points li {
		@apply relative pl-4;
	}
	.bullet-points li:before {
		content: "";
		@apply absolute left-0 top-2 w-1.5 h-1.5 bg-gray-500 rounded-full;
	}
</style>