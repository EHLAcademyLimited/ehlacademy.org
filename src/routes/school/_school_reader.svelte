<script>
	import {t, locale} from 'svelte-i18n'
	import Youtube from '$lib/ui/YoutubePopup.svelte'
	import {getContext} from 'svelte'
	const {open} = getContext('simple-modal')
	import Icon from "$lib/ui/Icon.svelte";
	const showVideo = () => {
		open(Youtube, {
			id: 'J_HRTcpSRsA'
		})
	}
	const showVideo2 = () => {
		open(Youtube, {
			id: 'hzdn5JjEx0Q'
		})
	}
</script>

<div class="bg-yellow-100 bg-no-repeat bg-right-bottom bg-size" style="background-image: url('/school/reader-items.png');">
	<div class="max-w-screen-lg px-8 py-12 md:py-16 lg:py-32 mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div class="text-brown-500">
				<div class="mb-4 md:mb-8">
					<p class="text-p3 md:text-t1 font-bold mb-2">{@html $t('school.reader.pre_title')}</p>
					<h1 class="text-t2 md:text-h1 text-red-500 font-bold">{@html $t('school.reader.title')}</h1>
					<div class="text-p2 md:text-p3 mt-2">{$t('school.reader.amount')}</div>
				</div>

				<div class="mb-4 md:mb-8 font-bold">
					<div>
						{#each [1,2,3,4,5,6,7] as i}
							<div class="flex items-center my-2 text-brown-500">
								<div class="w-8 h-8 cc flex-shrink-0 -ml-4">
									<Icon name="tick" className="text-red-500 w-4"/>
								</div>
								<p class="ml-4 leading-tight text-p2">{$t(`school.reader.${i}`)}</p>
							</div>
						{/each}
					</div>
				</div>

				<p class="text md:text-p2 mb-4 md:mb-8">
					{@html $t('school.reader.desc')}
				</p>

				<button on:click={showVideo} class="text inline-block font-bold md:text-p2 bg-yellow-700 rounded px-8 py-4 text-white hover:bg-yellow-500 hover:text-black">{$t('school.reader.video_demo')}</button>
				<button on:click={showVideo2} class="text inline-block font-bold md:text-p2 bg-yellow-700 rounded px-8 py-4 text-white hover:bg-yellow-500 hover:text-black mb-1">{$t('school.reader.video_intro')}</button>

			</div>
			<div class="h-64 sm:h-0">

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