<script>
	import {fly} from 'svelte/transition'
	let opened = false
	export let disabled = false
	export let classname = 'absolute rounded py-2 shadow-lg right-0 bg-white border border-gray-300 w-72'
	const onClick = () => {
		setTimeout(() => {
			opened = true
		}, 0)
	}
</script>
<div class="relative" on:mouseenter={() => {opened = true}} on:mouseleave={() => {opened = false}}>
	<div on:click={onClick}>
		<slot name="activator"/>
	</div>
	{#if opened && !disabled}
		<div transition:fly={{y:30}} class="{classname}">
			<slot/>
		</div>
	{/if}
</div>

<svelte:window on:click={() => {opened = false}}/>