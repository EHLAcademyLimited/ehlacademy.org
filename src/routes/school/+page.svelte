<script>
	import Package from './_school_ai_package.svelte'
	import AT from './_school_at.svelte'
	import Reader from './_school_reader.svelte'
	import Icon from '$lib/ui/Icon.svelte'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import VideoPopup from '$lib/ui/VideoPopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	import {t, locale} from 'svelte-i18n'
	const {openModal, closeModal} = getContext('simple-modal')
	import SchoolLoginDialog from "../../lib/school/SchoolLoginDialog.svelte";

	const showVideo = (obj) => {
		console.log(obj, $locale)
		open(Youtube, {
			id: obj.youtube_id
		})
	}

	const logins = [
		{
			title: 'school.student_login',
			href: 'https://id.ehlacademy.org',
			dot_color: 'bg-yellow-500',
			bg_color: 'bg-brown-500',
			role: 'student'
		},
		{
			title: 'school.teacher_login',
			href: 'https://teach.ehlacademy.org',
			dot_color: 'bg-red-500',
			bg_color: 'bg-brown-700',
			role: 'teacher'
		}
	]

	const conference = [
		{
			year: '2018',
			youtube_id: '9COPMtUq_Bo',
		},
		{
			year: '2019',
			youtube_id: 'MODs6ghKO0A',
		}
	]

	const onLogin = (l) => {
		openModal(SchoolLoginDialog, {
			role: l.role
		}, {
			width: '95%',
			maxWidth: '400px'
		})
	}
</script>

<div class="relative overflow-hidden">
	<img class="inset-0 absolute z-0 hidden xl:block blur w-full" src="/school/hero.jpg" alt="blur">
	<div class="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 h-140 md:h-160 bg-no-repeat bg-cover sm:bg-top bg-right text-white" style="background-image: url('/school/hero.jpg')">
		<div class="h-full flex items-center">
			<div class="mx-auto md:px-16 w-full -mt-16 sm:mt-8">
				<h1 class="text-p2 md:text-p4 font-bold mb-2 inline-block border-b-2 border-current">{$t('school.corner')}</h1>
				<h2 class="text-t1 sm:text-t2 md:text-h1 mb-4 text-shadow"><span style="font-size: 0.8em">
					{$t('school.hero_1')}</span><br/>
					{$t('school.hero_2')}</h2>
				<p class="text md:text-p2 max-w-xl bg-brown-700 bg-opacity-50">
					{$t('school.hero_desc')}
				</p>
			</div>
		</div>
	</div>
</div>

<div class="grid grid-cols-2 mt-auto text-white">
	{#each logins as l}
		<button on:click={() => {onLogin(l)}} target="_blank" class="{l.bg_color} flex items-center justify-center h-20 md:h-32 hover:bg-brown-400a">
			<div class="flex items-center">
				<div class="w-3 h-3 {l.dot_color} rounded-full"></div>
				<p class="mx-3 text-p2 md:text-p3 font-bold">{$t(l.title)}</p>
				<Icon className="w-3" name="right"/>
			</div>
		</button>
	{/each}
</div>

<div class="bg-white">
	<div class="max-w-screen-xl mx-auto py-12 md:py-24 xl:py-32 px-6 md:px-12 xl:px-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
			<div>
				<img src="/snap-group.jpg" alt="forum" class="w-full">
			</div>
			<div class="self-center">
				<h2 class="text-t1 md:text-t2 font-bold mb-4 text-brown-700">{$t('school.conference')}</h2>
				<p class="text-p2 md:text-p3 mb-8 text-brown-500">{$t('school.conference_desc')}</p>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 sm:mt-4">
			{#each conference as c}
				<div class="group cursor-pointer py-4 px-2 sm:px-4 bg-gray-200 hover:bg-red-500 hover:text-white rounded inline-flex items-center">
					<div class="font-bold flex-1">
						<p class="group-hover:text-white text-red-500 leading-none mb-2">{c.year}</p>
						<iframe class=" w-full h-60" src="https://www.youtube.com/embed/{c.youtube_id}"
						        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						        allowfullscreen></iframe>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div id="contact" class="bg-gray-200 px-4 sm:px-12 py-8 md:py-16">
	<h1 class="md:text-center text-t1 sm:text-t2 mb-8">{$t('contact_us_for_enquiry')}</h1>
	<div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div>
			<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1Z" stroke="#007AFF" stroke-width="2" stroke-linecap="round"/>
				<path d="M1 2.5L10 8L19 2.5" stroke="#007AFF" stroke-width="2" stroke-linecap="round"/>
			</svg>
			<p class="my-2">{$t('contact_us.email')}</p>
			<p class="text-gray-400">school.support@ehlacademy.org</p>
		</div>
		<div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.516 2.01194C6.206 2.26194 2.017 6.65194 2.033 11.9289C2.03564 13.4822 2.40753 15.0127 3.118 16.3939L2.06 21.4949C2.0471 21.5587 2.05048 21.6247 2.06983 21.6868C2.08919 21.749 2.1239 21.8052 2.17075 21.8504C2.2176 21.8955 2.27508 21.9281 2.33787 21.9452C2.40067 21.9622 2.46675 21.9632 2.53 21.9479L7.564 20.7639C8.89729 21.4228 10.361 21.7754 11.848 21.7959C17.275 21.8789 21.799 17.6009 21.968 12.2159C22.15 6.44094 17.351 1.73494 11.516 2.01094V2.01194ZM17.523 17.3789C16.7975 18.1019 15.9364 18.6745 14.9892 19.064C14.042 19.4536 13.0272 19.6523 12.003 19.6489C10.798 19.6526 9.60869 19.376 8.52901 18.8409L7.828 18.4939L4.741 19.2199L5.391 16.0889L5.045 15.4169C4.4841 14.3297 4.19324 13.1234 4.197 11.8999C4.197 9.82994 5.009 7.88294 6.483 6.41994C7.9522 4.96564 9.93576 4.14958 12.003 4.14894C14.089 4.14894 16.049 4.95494 17.523 6.41894C18.2492 7.13458 18.8255 7.98779 19.2182 8.92871C19.6109 9.86962 19.8121 10.8794 19.81 11.8989C19.81 13.9509 18.985 15.9289 17.523 17.3799V17.3789Z" fill="#00A84D"/>
				<path d="M16.842 14.045L14.911 13.495C14.7864 13.4592 14.6545 13.4576 14.529 13.4903C14.4036 13.5231 14.2893 13.5889 14.198 13.681L13.726 14.159C13.6284 14.2579 13.5037 14.3259 13.3676 14.3543C13.2316 14.3828 13.0901 14.3705 12.961 14.319C12.048 13.952 10.126 12.256 9.63502 11.407C9.56619 11.2871 9.53475 11.1493 9.54472 11.0114C9.5547 10.8735 9.60564 10.7418 9.69102 10.633L10.103 10.103C10.1823 10.0015 10.2325 9.88023 10.2482 9.75234C10.2639 9.62445 10.2445 9.4947 10.192 9.377L9.38002 7.553C9.33409 7.45105 9.26514 7.36114 9.1786 7.29034C9.09205 7.21954 8.99026 7.16979 8.88124 7.14498C8.77221 7.12017 8.65891 7.12098 8.55025 7.14736C8.44159 7.17374 8.34053 7.22496 8.25502 7.297C7.71602 7.75 7.07602 8.437 6.99902 9.2C6.86202 10.543 7.44202 12.236 9.63602 14.27C12.171 16.619 14.202 16.93 15.523 16.611C16.273 16.431 16.873 15.708 17.25 15.117C17.3103 15.0231 17.3477 14.9164 17.3593 14.8054C17.3708 14.6945 17.3562 14.5823 17.3165 14.4781C17.2768 14.3738 17.2132 14.2803 17.1308 14.2051C17.0484 14.1299 16.9495 14.075 16.842 14.045Z" fill="#00A84D"/>
			</svg>
			<p class="my-2">Whatsapp</p>
			<p class="text-gray-400">(+852) 9455 6793 / 9883 0418</p>
		</div>
	</div>
</div>

<svelte:head>
	<title>{$t('nav.school_corner_page_title')}</title>
</svelte:head>

<style>
	.text-shadow {
			text-shadow: 2px 2px rgba(0,0,0,0.7);
	}
  .blur {
      filter: blur(2em);
  }
	.ripple-bg {
		background-image: url("/ripple.png");
		background-position: right bottom;
		background-size: cover;
		background-repeat: no-repeat;
	}
	@media (max-width: 620px) {
		.ripple-bg {
			background-image: url("/ripple-mobile.png");
			background-position: center bottom;
			background-size: 100%;
		}
	}
</style>