<script>
	import Icon from "../ui/Icon.svelte";
	import {locale, t} from 'svelte-i18n'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	const showVideo = () => {
		open(Youtube, {id: $locale === 'hk' ? 'MODs6ghKO0A' : 'sK-pU8L34E8'})
	}
</script>

<div class="h-[30rem] md:h-[40rem] bg-no-repeat bg-cover bg-center text-white relative overflow-hidden">

	<img src="/furlong-speech.jpg" alt="furlong" class="inset-0 absolute z-0 hidden xl:block blur">
	<div class="relative z-10 max-w-screen-xl mx-auto flex h-full px-6 sm:px-8 md:px-12 py-8 md:py-16 bg-cover" style="background-position: 40% center; background-image: url('/furlong-speech.jpg')">

		<div class="max-w-screen-lg mx-auto mt-auto w-full grid grid-cols-3 gap-8">
			<div class="col-span-3 md:col-span-2 self-end">

				<svg class="static mb-2 md:mb-0 fill-current w-6 md:w-8 lg:w-10 mb-2 md:relative -left-6 md:-left-10 lg:-left-14 top-10" viewBox="0 0 89 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M32.116 0.469971C12.25 9.75797 0.381958 27.044 0.381958 46.136C0.381958 59.552 8.63796 69.356 19.99 69.356C29.794 69.356 37.534 62.132 37.534 52.586C37.534 45.362 32.89 39.428 25.924 37.622C17.926 35.816 17.668 35.558 17.668 31.43C17.668 22.4 24.376 13.886 37.276 6.66196L32.116 0.469971ZM82.684 0.469971C62.818 9.75797 50.95 27.044 50.95 46.136C50.95 59.552 59.206 69.356 70.558 69.356C80.362 69.356 88.102 62.132 88.102 52.586C88.102 45.362 83.458 39.428 76.492 37.622C68.494 35.816 68.236 35.558 68.236 31.43C68.236 22.4 74.944 13.886 87.844 6.66196L82.684 0.469971Z"/>
				</svg>

				<h2 style="line-height: 1.25" class="text-p3 md:text-t1 lg:text-t2 mb-4">{$t('furlong_quote.q1.content')}</h2>
				<div class="text-p2 md:text-p3 leading-tight flex">
					<div class="mr-4">—</div>
					<div>
						<div class="font-bold">John Furlong, {$t('3050.team.furlong.t_3')}</div>
					</div>
				</div>
				<div class="inline-flex items-center mt-4 hover:text-yellow-500 cursor-pointer" on:click={showVideo}>
					<div class="mr-2"><Icon className="w-6 sm:w-8" name="video"/></div>
					<p class="text-p2">{$t('school.play_video')}</p>
				</div>
			</div>
			<div class="col-span-1 self-end hidden md:block">
				<img src="/logo.png" alt="logo" class="md:h-24 lg:h-36 ml-auto">
			</div>
		</div>
	</div>
</div>