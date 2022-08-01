<script>
	import {t} from 'svelte-i18n'
	export let item
	export let segment
	export let is_white = false
</script>

{#if item.href}
	<a href={item.href} class="cursor-pointer px-4 py-4 inline-flex items-center tracking-wide font-bold text-sm" class:text-white={is_white}>
		<span class="whitespace-nowrap">{$t(item.label)}</span>
		<span class:w-6={segment === item.href} class="transition-all h-1 w-0 bg-gray-700 rounded-full absolute bottom-0 inset-x-0 mx-auto"></span>
	</a>
{:else}
	<div class="cursor-pointer px-4 py-4 inline-flex items-center tracking-wide font-bold text-sm" class:text-white={is_white}>
		<span class="text-sm whitespace-nowrap">{$t(item.label)}</span>
		<span class:w-6={segment === item.href} class="transition-all h-1 w-0 bg-gray-700 rounded-full absolute bottom-0 inset-x-0 mx-auto"></span>
		{#if item.children.length}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.001 36" class="ml-1 w-3 h-3 fill-current"><path d="M32.914 8.443L18.004 21.32 3.078 8.443 0 12.013l18.004 15.542L36 12.015"></path></svg>
		{/if}
	</div>
{/if}