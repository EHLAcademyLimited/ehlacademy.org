<script>
	import {t} from 'svelte-i18n'
	import Icon from '$lib/ui/Icon.svelte'
</script>
<div class="rounded inline-flex mx-auto items-center p-4 hover:bg-red-500 hover:text-white text-red-700 mt-1 cursor-pointer">
	<Icon name="video"/>
	<div class="pl-2">{$t('watch_intro_video')}</div>
</div>