<script>
	import {t} from 'svelte-i18n'
	import {locale, _} from "svelte-i18n";

	const tutors = [
		{
			"description":"<p>OUTSTANDING UK EDUCATOR: Meet Teacher Iona, a native of the United Kingdom, who proudly holds a Bachelor of Arts in Social Anthropology from the University of Cambridge, one of the UK's most prestigious institutions.</p><p><br></p><p></p><p>Ms. Iona stands out as an educator with unparalleled linguistic proficiency and a formidable academic background. Her scholastic achievements include an impressive tally of 9A scores in the GCSEs exam, including a remarkable 8 A* distinctions. Her excellence continued through the A-level exams, where she achieved a flawless record of all A scores, earning full marks in every module of English Literature (600/600). Her exceptional performance even placed her among the top five candidates in the entire UK for that year.</p><p><br></p><p></p><p>Iona's commitment to education has led her to diverse teaching experiences. She previously worked at the University of Cape Town, where she tutored first-year university students, demonstrating her dedication to nurturing young minds. With a wealth of knowledge and experience in online English teaching spanning several years, she has become a beacon of learning for her students.</p><p><br></p><p></p><p>Within the educational community, Ms. Iona is a highly regarded member of the EHLA team, making significant contributions to both writing and content development efforts. Beyond her deep involvement in Literature and Elite Writing content, she has invested substantial time delving into DSE Past Papers and Hong Kong assessment standards for DSE Paper 4 - Speaking and Paper 2 - Writing. Her proactive contributions extend to the development of the international issues section of Mock papers and the formulation of examination questions.</p><p><br></p><p></p><p>Teacher Iona's remarkable background, unwavering commitment to education, and multifaceted contributions make her an exceptional teacher with a profound impact on her students.</p>",
			"description_alter":"<p>傑出的英國老師：Iona 老師是英國人，自豪地擁有英國最負盛名的機構之一劍橋大學的社會人類學文學學士學位。</p><p><br></p><p></p><p>Ms.&nbsp;Iona是一位傑出的老師，擁有傑出的語言能力和強大的學術背景。她的學術成就包括在 GCSE 考試中取得令人印象深刻的 9A 成績，其中包括 8 項 A* 成績。 她在 A 級考試中繼續保持著優異的成績，在所有 A 級考試中她都取得了完美的成績，在英語文學的每個模組中都獲得了滿分（600/600）。 她出色的表現甚至使她躋身當年全英國前五名候選人之列。</p><p><br></p><p></p><p>Ms. Iona 對教育的承諾使她獲得了多樣化的教學經驗。 她此前曾在開普敦大學工作，輔導一年級大學生，展現了她對培養年輕人思想的精神。憑藉多年在線英語教學的豐富知識和經驗，她已成為學生學習的對象。</p><p><br></p><p></p><p>在教育界，Iona 女士是 EHLA 團隊中備受推崇的成員，為寫作和內容開發工作做出了重要貢獻。 除了深入研究文學和精英寫作內容外，她還投入大量時間鑽研 DSE 過往試卷以及香港 DSE 試卷 4 - 口語和試卷 2 - 寫作的評估標準。 她對模擬試卷國際問題部分的開發和試題的發展做出了積極的貢獻。</p><p><br></p><p></p><p>Lona卓越的背景、對教育的承諾以及多方面的貢獻使她成為一位傑出的老師，對她的學生產生了正向且深遠的影響。</p>",
			"description_hk":"<p>傑出的英國老師：Iona 老師是英國人，自豪地擁有英國最負盛名的機構之一劍橋大學的社會人類學文學學士學位。</p><p><br></p><p></p><p>Ms.&nbsp;Iona是一位傑出的老師，擁有傑出的語言能力和強大的學術背景。她的學術成就包括在 GCSE 考試中取得令人印象深刻的 9A 成績，其中包括 8 項 A* 成績。 她在 A 級考試中繼續保持著優異的成績，在所有 A 級考試中她都取得了完美的成績，在英語文學的每個模組中都獲得了滿分（600/600）。 她出色的表現甚至使她躋身當年全英國前五名候選人之列。</p><p><br></p><p></p><p>Ms. Iona 對教育的承諾使她獲得了多樣化的教學經驗。 她此前曾在開普敦大學工作，輔導一年級大學生，展現了她對培養年輕人思想的精神。憑藉多年在線英語教學的豐富知識和經驗，她已成為學生學習的對象。</p><p><br></p><p></p><p>在教育界，Iona 女士是 EHLA 團隊中備受推崇的成員，為寫作和內容開發工作做出了重要貢獻。 除了深入研究文學和精英寫作內容外，她還投入大量時間鑽研 DSE 過往試卷以及香港 DSE 試卷 4 - 口語和試卷 2 - 寫作的評估標準。 她對模擬試卷國際問題部分的開發和試題的發展做出了積極的貢獻。</p><p><br></p><p></p><p>Lona卓越的背景、對教育的承諾以及多方面的貢獻使她成為一位傑出的老師，對她的學生產生了正向且深遠的影響。</p>",
			"subtitle":"Top UK teacher, Cambridge University, 9A scores in the GCSEs, all A scores in A level, full marks in English Literature",
			"subtitle_alter":"頂尖英國老師，畢業於劍橋大學，英國高考狀元，英國文學滿分全英國前5名；多年教學經驗 ",
			"subtitle_hk":"頂尖英國老師，畢業於劍橋大學，英國高考狀元，英國文學滿分全英國前5名；多年教學經驗 ",
			"video_demo":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Iona+with+all+type+class.mp4",
			"video_demo_time":87,
			"videos":[
				{
					"link":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Iona-Elite-Literature.mp4.mp4",
					"time":87,
					"title_en":"Class video clip (1)",
					"title_hk":"課堂片段 (1)"
				},
				{
					"link":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/usermodel_School/Pre-DSE+sample.mp4.mp4",
					"time":87,
					"title_en":"Class video clip (2)",
					"title_hk":"課堂片段 (2)"
				}
			],
			"video_intro":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Iona_new_intro__1110.mp4",
			"video_intro_time":39,
			"tutor_id":"130459",
			"display_name":"Iona",
			"profile_pic":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/miss+iona.png",
			"current_classroom_cnt":6
		},
		{
			"description":"<p><b>About Elliot Emery</b></p><p><b><br></b></p><p></p><p>OUTSTANDING UK TEACHER: Meet Teacher Elliot, a native of the United Kingdom with an impressive academic background. Elliot earned his Bachelor of Law degree from the University of Birmingham, UK, followed by a Master of Law degree from the University of Nottingham, UK. His academic prowess is reflected in his remarkable achievement of achieving FULL A scores in UK A Levels and securing 9 A scores in GCSE public examinations, including outstanding A grades in English Language.</p><p><br></p><p></p><p>Elliot invested significant time in studying DSE Past Papers and Hong Kong assessment standards for DSE Paper 4 - Speaking, actively contributing to the development of the international issues section of Paper 4 Mock papers and the formulation of examination questions. Moreover, he is a valued member of the EHLA teacher training community.</p><p><br></p><p></p><p>In addition to his expertise in teaching and assessment, Elliot is a gifted English writer who possesses the ability to produce outstanding pieces of work within a remarkably short timeframe. His talents extend to being an integral member of the Paper 2 Writing team, where his skills shine.</p><p></p><p>Elliot's commitment to education and his exceptional skills make him a truly outstanding teacher with a wealth of knowledge and expertise to offer.</p>",
			"description_alter":"<p><b>關於Elliot Emery</b><b>老師</b></p><p><b><br></b></p><p></p><p>傑出的英國教師：Elliot老師，英國人，有著令人印象深刻的學術背景。Elliot在英國伯明翰大學獲得法學學士學位，隨後在英國諾丁漢大學獲得法學碩士學位。他的學術實力體現在他在英國 A Level 考試中取得全 A 成績，並在 GCSE 公開考試中取得 9 項 A 成績，其中包括英文語言方面的出色 A 成績。</p><p></p><p>Elliot投入大量時間研究DSE往屆試卷及香港DSE試卷4 - 口語的評核標準，並積極參與試卷4模擬試卷國際問題部分的發展及試題的製定。此外，他也是 EHLA 教師培訓的一員。</p><p><br></p><p></p><p>除了在教學和評估方面的專業知識外，Elliot還是一位才華橫溢的英文寫手，有能力在極短的時間內創作出出色的作品。 他的才華延伸到成為 Paper 2 寫作團隊的重要成員，他的技能在其中大放異彩。</p><p><br></p><p></p><p>Elliot對教育的承諾和卓越的技能使他成為一位傑出的教師，擁有豐富的知識和專業知識。</p>",
			"description_hk":"<p><b>關於Elliot Emery</b><b>老師</b></p><p><b><br></b></p><p></p><p>傑出的英國教師：Elliot老師，英國人，有著令人印象深刻的學術背景。Elliot在英國伯明翰大學獲得法學學士學位，隨後在英國諾丁漢大學獲得法學碩士學位。他的學術實力體現在他在英國 A Level 考試中取得全 A 成績，並在 GCSE 公開考試中取得 9 項 A 成績，其中包括英文語言方面的出色 A 成績。</p><p></p><p>Elliot投入大量時間研究DSE往屆試卷及香港DSE試卷4 - 口語的評核標準，並積極參與試卷4模擬試卷國際問題部分的發展及試題的製定。此外，他也是 EHLA 教師培訓的一員。</p><p><br></p><p></p><p>除了在教學和評估方面的專業知識外，Elliot還是一位才華橫溢的英文寫手，有能力在極短的時間內創作出出色的作品。 他的才華延伸到成為 Paper 2 寫作團隊的重要成員，他的技能在其中大放異彩。</p><p><br></p><p></p><p>Elliot對教育的承諾和卓越的技能使他成為一位傑出的教師，擁有豐富的知識和專業知識。</p>",
			"subtitle":"TOP-NOTCH UK TEACHER; Law Degree & Law Master Degree; FULL A Scores in A Level & GCSE; Gifted Writer",
			"subtitle_alter":"狀元級英國老師; 法學碩士學位; 英國 A Level 取得全優成績; GCSE 9優成績; 極具天賦的英文寫作人",
			"subtitle_hk":"狀元級英國老師; 法學碩士學位; 英國 A Level 取得全優成績; GCSE 9優成績; 極具天賦的英文寫作人",
			"video_demo":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Elliot%2BWriting%2Bdemo.mp4.mov",
			"video_demo_time":76,
			"videos":[
				{
					"link":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Elliot-intro-and-1on1-1116.mp4",
					"time":17,
					"title_en":"Introduction",
					"title_hk":"自我介紹"
				}
			],
			"video_intro":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Elliot-intro-and-1on1-1116.mp4",
			"video_intro_time":17,
			"tutor_id":"130371",
			"display_name":"Elliot",
			"profile_pic":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Eliot.jpg",
			"current_classroom_cnt":6
		},
		{
			"description":"<p>EXCEPTIONAL TEACHER FROM THE USA: &nbsp;Ms. Summer, a native of the United States, who proudly holds a Bachelor of Arts in Education from Western Government University in Utah, USA.</p><p><br></p><p></p><p>Ms. Summer is an outstanding English teacher with over a decade of teaching experience. Her commitment to continuous self-improvement in teaching quality is unwavering. She demonstrates exceptional attentiveness to her students and possesses a talent for effective instruction. Notably, her expertise shines in the realm of writing instruction, where she provides outstanding guidance to her students, earning her the admiration of many.</p><p><br></p><p></p><p>Ms. Summer's dedication extends to her meticulous study of DSE Past Papers and Hong Kong assessment standards for DSE Paper 4 - Speaking. Her active involvement in shaping the international issues section of Mock papers and the formulation of examination questions has been instrumental in enhancing the learning experience for students. The DSE Paper Speaking Mock Training Class, in which she plays a vital role, has been of significant benefit to students preparing for the DSE Paper 4 exam.</p><p><br></p><p></p><p>Moreover, within the educational community, she is a valued member of the EHLA teacher training community, where her expertise and commitment further enrich the teaching and learning environment.</p><p><br></p><p></p><p>Ms. Summer's teaching background, her dedication to teaching excellence, and her significant contributions make her an exceptional teacher, greatly appreciated by her students.</p>",
			"description_alter":"<p>來自美國的傑出教師：Summer老師是美國人，她自豪地擁有美國猶他州西部政府大學的教育文學學士學位。</p><p><br></p><p></p><p>Summer女士是一位優秀的英語教師，擁有十多年的教學經驗。 她對不斷自我提高教學品質的承諾是突出的。 她對學生表現出非凡的關注，並擁有優秀教學的天賦。 值得注意的是，她的專業知識在寫作教學領域尤其突出，她為學生提供了出色的指導，贏得了很多人的喜愛。</p><p><br></p><p></p><p>Summer女士對DSE歷年試卷和香港DSE試卷4 - 口語的評估標準進行了細緻的研究。 她積極參與模擬試卷國際議題部分的發展和試題的製定，這有助於增強學生的學習體驗。 她在DSE試卷口語模擬訓練班中扮演了重要的角色，對準備DSE試卷4考試的學生來說受益匪淺。</p><p><br></p><p></p><p>此外，她是 EHLA教師培訓群的重要成員。Summer女士的教學背景、對卓越教學的執著以及她的努力使她成為一位出色的老師，深受學生的讚賞。</p>",
			"description_hk":"<p>來自美國的傑出教師：Summer老師是美國人，她自豪地擁有美國猶他州西部政府大學的教育文學學士學位。</p><p><br></p><p></p><p>Summer女士是一位優秀的英語教師，擁有十多年的教學經驗。 她對不斷自我提高教學品質的承諾是突出的。 她對學生表現出非凡的關注，並擁有優秀教學的天賦。 值得注意的是，她的專業知識在寫作教學領域尤其突出，她為學生提供了出色的指導，贏得了很多人的喜愛。</p><p><br></p><p></p><p>Summer女士對DSE歷年試卷和香港DSE試卷4 - 口語的評估標準進行了細緻的研究。 她積極參與模擬試卷國際議題部分的發展和試題的製定，這有助於增強學生的學習體驗。 她在DSE試卷口語模擬訓練班中扮演了重要的角色，對準備DSE試卷4考試的學生來說受益匪淺。</p><p><br></p><p></p><p>此外，她是 EHLA教師培訓群的重要成員。Summer女士的教學背景、對卓越教學的執著以及她的努力使她成為一位出色的老師，深受學生的讚賞。</p>",
			"subtitle":"Senior teacher from USA, Bachelor's Degree in Arts, Elementary Education, over 10 years teaching experience",
			"subtitle_alter":"美國資深老師，基礎教育文學學士學位，超過10年教學經驗",
			"subtitle_hk":"美國資深老師，基礎教育文學學士學位，超過10年教學經驗",
			"video_demo":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Summer_demo.mp4.mp4",
			"video_demo_time":10,
			"video_intro":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Summer_intro.mp4",
			"video_intro_time":8,
			"videos":[
				{
					"link":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Summer_intro.mp4",
					"time":8,
					"title_en":"Introduction",
					"title_hk":"自我介紹"
				},
				{
					"link":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Summer_demo.mp4.mp4",
					"time":10,
					"title_en":"Class video clip",
					"title_hk":"課堂片段"
				}
			],
			"tutor_id":"134551",
			"display_name":"Summer",
			"profile_pic":"https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/teacher_profic/Summer.jpg",
			"current_classroom_cnt":132
		}
	]
</script>

<div class="bg-white bg-no-repeat bg-right-bottom bg-size">
	<div class="max-w-screen-lg px-6 py-12 md:py-16 lg:py-20 mx-auto">
		<div class="grid grid-cols-1">
			<div class="text-brown-500">
				<div class="mb-4 md:mb-8 text-center">
					<p class="text-p3 md:text-t1 font-bold mb-4">{$t('3050.team.title1')}</p>
					<h1 class="text-t2 md:text-h1 text-red-500 font-bold">{$t('3050.team.title2')}</h1>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each tutors as tutor}
						<a href="/team/{tutor.tutor_id}" class="md:text-center flex md:block">
							<div class="w-[120px] h-[120px] md:w-[200px] md:h-[200px] overflow-hidden rounded-full mx-auto border-8 border-slate-200 shadow-lg flex-shrink-0">
								<img src={tutor.profile_pic} alt={tutor.display_name} class="">
							</div>
							<div class="ml-4 md:ml-0">
								<h3 class="mt-2 mb-1 text-p3">{tutor.display_name}</h3>
								<p class="md:px-8 text-sm md:text-base">{$locale !== 'en' ? tutor.subtitle_alter : tutor.subtitle}</p>
							</div>
						</a>
					{/each}
				</div>

				<div class="text-center mt-12">
					<a class="inline-block rounded-full bg-yellow-700 hover:bg-yellow-500 hover:text-black text-white px-6 py-3 md:px-8 md:py-4 text md:text-p2 text-white font-bold"
					   href="/team">{$t('learn_more')}</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    .bg-size {
        background-size: 50%;
    }
    @media (max-width: 768px) {
        .bg-size {
            background-size: 60%;
        }
    }
    @media (max-width: 620px) {
        .bg-size {
            background-size: 60%;
        }
    }
    @media (max-width: 520px) {
        .bg-size {
            background-size: 70%;
        }
    }
    @media (max-width: 400px) {
        .bg-size {
            background-size: 90%;
        }
    }
</style>