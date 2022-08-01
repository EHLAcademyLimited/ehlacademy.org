<script>
	import {t, locale} from 'svelte-i18n'
	const cats = [
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/13-1553947828073.jpg',
			label_hk: '日常生活',
			label_en: 'Daily Life'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/11-1553947825961.jpg',
			label_hk: '地方與活動',
			label_en: 'Place and Activities'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/cms/test/science.jpeg',
			label_hk: '科學與技術',
			label_en: 'Science and Technology'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/9-1553947821043.jpg',
			label_hk: '玩與樂',
			label_en: 'Fun and Games'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/6-1553947841271.jpg',
			label_hk: '動物故事',
			label_en: 'Animal Tales'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/15-1553947830065.jpg',
			label_hk: '社交生活與關係',
			label_en: 'Community, Social Life and Relationships'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/12-1553947826755.jpg',
			label_hk: '悠閒假期與娛樂',
			label_en: 'Holidays and Entertainments'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/3-1553947836766.jpg',
			label_hk: '大自然的奧祕',
			label_en: 'Nature and Discovery'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/5-1553947839770.jpg',
			label_hk: '藝術與音樂',
			label_en: 'Arts and Music'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/14-1553947828831.jpg',
			label_hk: '職業',
			label_en: 'Occupations'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/7-1553947842348.jpg',
			label_hk: '奇幻故事',
			label_en: 'Wonder Tales/ Fantasy'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/4-1553947838141.jpg',
			label_hk: '人物與文化',
			label_en: 'Culture and People'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/images_20180201/8-1553947843812.jpg',
			label_hk: '冒險',
			label_en: 'Adventure'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/cms/audios/202103/17/hobby-1578393324230_1615967531614.jpg',
			label_hk: '愛好與興趣',
			label_en: 'Hobbies and interests'
		},
		{
			img: 'https://ehla-media-bucket.s3.amazonaws.com/cms/audios/202103/31/explore-the-world_1617176262301.jpg',
			label_hk: '探索世界',
			label_en: 'Explore the world'
		}
	]

</script>

<div class="bg-gradient-to-b from-gray-200 to-white">
	<div class="mx-auto max-w-screen-lg py-8 sm:py-16 px-6 sm:px-8">
		<div class="mb-4 md:mb-8">
			<h2 class="text-t2 md:text-h1 mb-1 text-brown-400a md:text-center">{$t('reader.themes.title')}</h2>
			<p class="text-p3 md:text-t1 md:text-center text-brown-700">{$t('reader.themes.subtitle')}</p>
		</div>
		<div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-2 md:gap-4 -mx-4 sm:mx-0">
			{#each cats as cat}
				<div>
					<div class="overflow-hidden rounded sm:rounded-lg">
						<img src="{cat.img}" alt={cat[`label_${$locale}`]} loading="lazy">
					</div>
					<h3 class="text-sm sm:text md:text-p2 text-center mt-0 sm:mt-2 text-brown-500">{cat[`label_${$locale}`]}</h3>
				</div>
			{/each}
		</div>
	</div>
</div>
