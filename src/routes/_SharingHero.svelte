<script>
	import {browser} from "$app/environment";
	import {_, t, locale} from 'svelte-i18n'

	function requireJS(url, callback) {
		return new Promise(resolve => {
			if (!browser) return resolve()
			const e = document.createElement("script");
			e.src = url;
			e.type="text/javascript";
			e.addEventListener('load', resolve);
			document.getElementsByTagName("head")[0].appendChild(e);
		})
	}
	import {onMount} from "svelte";
	let items = [undefined, undefined, undefined, undefined]

	const videos = [
		{
			id: 'goFC8EFy6go',
			title_hk: '新世紀決定電子教育成功的三個維度',
			title_cn: '新世纪决定电子教育成功的三个维度',
			author_hk: '前牛津大學教育學院院長Pro. John Furlong EHLA 總教育顧問 ',
			author_cn: '前牛津大学教育学院院长Pro. John Furlong EHLA 总教育顾问 ',
			title_en: 'Three Dimensions That Contribute to the Success of e-Education',
			author_en: 'Ex-head of Dept. of Education, University of Oxford Chief Education Advisor to EHLA ',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/John%20Furlong_%20Three%20Dimensions%20That%20Contribute%20to%20the%20Success%20of%20e-Education.mp4",
			poster: "/video_preview_1.png"
		},
		{
			id: 'FxsoVMA6v78',
			title_hk: '全球視角下的中小學電子教育的實踐、趨勢與挑戰',
			title_cn: '全球视角下的中小学电子教育的实践、趋势与挑战',
			author_hk: '牛津大學學習與新技術研究學系聯席課程總監 Niall Winters ',
			author_cn: '牛津大学学习与新技术研究学系联席课程总监 Dr. Niall Winters ',
			title_en: 'The Current Practices, Trends and Challenges in K12 E-learning over the World',
			author_en: 'Dr. Niall Winters, Learning and New Technologies Research Group Dept. of Education, University of Oxford ',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Niall%20Winters_%20The%20Current%20Practices%2C%20Trends%20and%20Challenges%20in%20K12%20E-learning%20over%20the%20World.mp4",
			poster: "/video_preview_2.png"
		},
		{
			id: '7ztKjnaBNek',
			title_hk: '如何確保EHLA英文教學資源的一致性、可靠性與權威性',
			title_cn: '如何确保EHLA英语教学资源的一致性、可靠性与权力',
			author_hk: '牛津大學語言學家，EHLA 英文總編輯，Dr. Adrian Bullock',
			author_cn: '牛津大学语言学家，EHLA 英文总编辑，Dr. Adrian Bullock ',
			title_en: 'Managing the Quality of EHLA English Language Teaching and Learning Resources',
			author_en: 'Chief Editor of EHLA, Linguist from University of Oxford',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Managing%20the%20Quality%20of%20EHLA%20English%20Language%20Teaching%20and%20Learning%20Resources.mp4",
			poster: "/video_preview_3.png"
		},
		{
			id: 'QTJdWATpCLU',
			title_hk: '總編輯的訪問',
			title_cn: '总编辑的访问',
			author_hk: 'EHLA官方頻道',
			title_en: 'Interview with chief editor',
			author_en: 'EHLA Official Channel',
			video_url: "https://ehla-media.oss-cn-hongkong.aliyuncs.com/Interview.mp4",
			poster: "/video_preview_4.png"
		}
	]

	onMount(() => {
		console.log('cliff: ', 123)
		initSlider()
	})

	const initSlider = async () => {
		try { Splide } catch (e) {
			await requireJS('/js/splide.min.js')
			await requireJS('https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.8.0/dist/js/splide-extension-video.min.js')
		}
		const splide = new Splide( '.splide', {
			heightRatio: 0.5625,
			cover      : true,
			video      : {
				loop: true,
			},
			breakpoints: {
				640: {
					heightRatio: 0.8,
				},
			},
			perPage: 1
		} );
		// splide.mount(window.splide.Extensions);
		splide.mount();
	}
</script>
<!--<video controls src="https://ehla-media.oss-cn-hongkong.aliyuncs.com/Managing%20the%20Quality%20of%20EHLA%20English%20Language%20Teaching%20and%20Learning%20Resources.mp4"></video>-->
<div class="splide ">
	<div class="splide__track">
		<ul class="splide__list">
			{#each videos as v}
				<li class="splide__slide relative">
<!--					<img class="inset-0 z-10 absolute" src="{v.poster}">-->
					<video controls src={v.video_url} poster={v.poster}></video>
					<div class="p-2 sm:py-4 bg-white absolute bottom-0 inset-x-0 text-center text-sm sm:text-base">
						<p class="mb-1">{v.title_hk}</p>
						<p>- {v.author_hk}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>

