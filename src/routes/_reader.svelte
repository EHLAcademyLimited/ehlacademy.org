<script>
	import {t} from 'svelte-i18n'
</script>

<div class="bg-yellow-100 bg-no-repeat bg-right-bottom bg-size" style="background-image: url('/school/reader-items.png');">
	<div class="max-w-screen-lg px-6 py-12 md:py-16 lg:py-32 mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div class="text-brown-500">
				<div class="mb-4 md:mb-8">
					<p class="text-p3 md:text-t1 font-bold">{$t('reader.headline_a')}</p>
					<h1 class="text-t2 md:text-h1 text-red-500 font-bold">{$t('reader.title')}</h1>
				</div>

				<div class="mb-4 md:mb-8 font-bold">
					<p class="text-p2 md:text-p3">{$t('reader.slogan_1')}</p>
					<p class="text-p2 md:text-p3">{$t('reader.slogan_2')}</p>
				</div>

				<a class="inline-block rounded-full bg-yellow-700 hover:bg-yellow-500 hover:text-black text-white px-6 py-3 md:px-8 md:py-4 text md:text-p2 text-white font-bold" href="product/animated-library">{$t('learn_more')}</a>
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