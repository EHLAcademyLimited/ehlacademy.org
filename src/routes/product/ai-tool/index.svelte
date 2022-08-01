<script>
	import {t, locale} from 'svelte-i18n'
	import Dictation from './_dictation.svelte'
	import VocabBuilder from './_vocab-builder.svelte'
	import SpeakingAndListening from './_speaking-and-listening.svelte'
</script>

<div class="bg-gray-100 pt-24 md:pt-32 bg-right-bottom bg-no-repeat bg-size-hill relative overflow-hidden">

	<img src="/ai-ai-ai.png" alt="deco" class="hidden md:block pointer-events-none absolute left-0 bottom-0 lg:w-full transform md:scale-125 xl:scale-100" style="max-width: 1600px">
	<div class="relative z-10 max-w-screen-lg mx-auto px-6 md:text-center">
		<h1 class="font-bold text-t2 md:text-h1 mb-4 text-red-500">{$t('ai.title')}</h1>
		<h2 class="text-p3 lg:text-t1 text-gray-400 mb-4 md:mb-6">{$t('ai.desc')}</h2>


		<img src="/ai-screen.png" alt="app-screen" class="hidden md:block">
		<div class="-mx-4">
			<img src="/ai-screen-mobile-2.png" alt="app-screen" class="block md:hidden">
		</div>
	</div>
</div>

{#if $locale === 'en'}
{:else}
<div class="bg-gray-100">
	<div class="mx-auto max-w-screen-md px-4 py-8 sm:py-12 md:py-24">
		<h2 class="text-p3 md:text-t1 mb-4 font-bold">{$t('ai.why.title')}</h2>
		<p class="text-p2 md:text-p3 text-gray-500 mb-4">{$t('ai.why.desc_1')}</p>
		<p class="text-p2 md:text-p3 text-gray-500">{$t('ai.why.desc_2')}</p>
	</div>
</div>
{/if}

<Dictation/>

<SpeakingAndListening/>

<VocabBuilder/>

<div class="mx-auto max-w-screen-lg px-4">
	<div class="bg-gray-200 mt-4 -mx-2 md:mx-0 ripple-bg rounded">
		<div class="grid grid-cols-1 sm:grid-cols-2 bg-center bg-no-repeat">
			<div class="px-4 py-12 sm:py-12 sm:pl-8 sm:pr-0 md:p-24 md:pr-0">
				<h1 class="text-t2 md:text-h1 text-red-700 font-bond mb-1">{$t('subscribe')}</h1>
				<p class="text-red-700 text-p3 md:text-t1 mb-4">{$t('ai.title')}</p>
				<a href="/premium" class="bg-red-500 text-white px-10 py-4 rounded font-bold inline-block">{$t('go_to_subscribe_page')}</a>
				<p class="mt-8 text-p3">
					{@html $t('ai.subscribe.school')}
				</p>
			</div>
			<div class="self-end">
				<img src="/ai-tool-screen-blur2.png" alt="app-screen" class="mx-auto sm:ml-auto">
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<title>{$t('nav.ai_tool')}</title>
</svelte:head>

<style>
    .bg-position {
        background-position: -4em 5em;
    }
		@media (max-width: 1024px) {
        .bg-position {
            background-position: 50% 8em;
        }
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