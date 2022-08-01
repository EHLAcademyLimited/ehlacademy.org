<script>
	import {t} from 'svelte-i18n'
	import Icon from '$lib/ui/Icon.svelte'
</script>

<div class="bg-gray-100">
	<div class="max-w-screen-md mx-auto px-6 py-8 sm:py-12">
		<h2 class="text-t1 sm:text-t2 mb-4 text-center font-bold">{$t('download_app')}</h2>
		<div class="flex justify-center mb-4">
			<div class="inline-flex items-center bg-white rounded border border-gray-400 shadow-inner overflow-hidden">
				<div class="w-10 h-10 bg-gray-200 text-gray-500 flex items-center justify-center">
					<Icon name="search" className="w-4"/>
				</div>
				<div class="px-4 font-bold">
					EHLA English
				</div>
			</div>
		</div>
		<div class="block sm:flex justify-center items-center">
			<img src="/app-icon.png" alt="ehla-logo" class="h-20 sm:mr-8 sm:ml-0 sm:mb-0 mx-auto mb-4">
			<div class="flex justify-center items-center px-2">
				<a class="flex-shrink-0" href="https://play.google.com/store/apps/details?id=org.ehlacademy.app.hk" target="_blank">
					<img src="/download-google-play.svg" alt="google-play" class="h-10 sm:h-12">
				</a>
				<a class="flex-shrink-0" href="https://apps.apple.com/hk/app/ehla-e-education-system/id1201035933?l=zh" target="_blank">
					<img src="/download-app-store.svg" alt="app-store" class="h-10 sm:h-12 ml-2 md:ml-4">
				</a>
			</div>
		</div>
	</div>
</div>