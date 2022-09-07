<script>
	export let no_line
</script>
<div class="flex">
	<div class="w-12 sm:w-20 relative flex-shrink-0">
		<div class="w-6 h-6 border-red-500 border-4 bg-white relative z-10 rounded-full mx-auto"></div>
		{#if !no_line}
			<div class="absolute inset-y-0 bg-red-500 opacity-80 left-1/2 -ml-[2px] w-[4px]"></div>
		{/if}
	</div>
	<div class="pb-4 w-full">
		<slot/>
	</div>
</div>