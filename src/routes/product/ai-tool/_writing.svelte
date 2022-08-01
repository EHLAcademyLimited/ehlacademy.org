<script>
	import {t} from 'svelte-i18n'
	import LineDot from './_line-dot.svelte'
	const steps = [
			'ai_writing.f_2',
			'ai_writing.f_3',
			'ai_writing.f_4',
			'ai_writing.f_5',
			'ai_writing.f_6',
	]
</script>

<div id="writing" class="bg-brown-100a bg-no-repeat bg-right-bottom bg-size" style="background-image: url('/writing0bg.png');">
	<div class="max-w-screen-lg mx-auto px-6 pt-12 sm:pt-16 md:pt-20 md:pb-0">
		<div class="mb-4 md:mb-8 max-w-screen-sm">
			<LineDot classname="bg-brown-400a"/>
			<h2 class="font-bold text-t1 sm:text-t2 mt-2 mb-4 text-brown-400a">{$t('ai_writing.title')}</h2>
			<p class="text-p2 sm:text-p3 font-bold text-brown-400">{$t('ai_writing.desc')}</p>
		</div>
		<p class="text-p2 sm:text-p3 font-bold text-brown-400">{$t('ai_writing.other_features')}</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16">
			<div>
				{#each steps as s, i}
					<div class="flex my-4 text-p2 md:text-p3">
						<p class="w-8 md:w-12 flex-shrink-0 font-bold text-brown-400">{i + 1}</p>
						<p class="text-brown-700">{$t(s)}</p>
					</div>
				{/each}
			</div>
			<div>
				<img src="/writing.png" alt="writing" class="w-full">
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
            background-size: 90%;
        }
    }
</style>