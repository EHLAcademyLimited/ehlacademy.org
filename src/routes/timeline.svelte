<script>
	import Icon from "../lib/ui/Icon.svelte";
	import {_} from 'svelte-i18n'
</script>

<div class="container text-gray-700 py-8">
	<div class="flex">
		<div class="w-32 relative">
			<div class="w-6 h-6 bg-green-500 rounded-full mx-auto"></div>
			<div class="absolute inset-y-0 bg-green-500 left-1/2 -ml-0.5 w-[2px]"></div>
		</div>
		<div class="pb-4">
			<div class="year">2022</div>
			<h3 class="font-bold">{$_('timeline.2022.h')}</h3>
			<p>{$_('timeline.2022.p1')}</p>
			<p>{$_('timeline.2022.p2')}</p>
			<ul>
				{#each [1,2,3,4,5,6,7,8] as i}
					<li class="flex items-center mb-2">
						<Icon name="tick" className="w-4 text-green-500"/>
						<div class="ml-2">{$_(`timeline.2022.${i}`)}</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex">
		<div class="w-32 relative">
			<div class="w-6 h-6 bg-green-500 rounded-full mx-auto"></div>
			<div class="absolute inset-y-0 bg-green-500 left-1/2 -ml-0.5 w-[2px]"></div>
		</div>
		<div class="pb-4">
			<div class="year">2020</div>
			<h3 class="font-bold">{$_('timeline.2021.h')}</h3>
			<p>{$_('timeline.2021.p1')}</p>
		</div>
	</div>
	<div class="flex">
		<div class="w-32 relative">
			<div class="w-6 h-6 bg-green-500 rounded-full mx-auto"></div>
			<div class="absolute inset-y-0 bg-green-500 left-1/2 -ml-0.5 w-[2px]"></div>
		</div>
		<div class="pb-4">
			<div class="year">2019</div>
			<h3 class="font-bold">{$_('timeline.2019.h')}</h3>
			<p>{$_('timeline.2019.p1')}</p>
		</div>
	</div>
	<div class="flex">
		<div class="w-32 relative">
			<div class="w-6 h-6 bg-green-500 rounded-full mx-auto"></div>
		</div>
		<div class="pb-4">
			<div class="year">2017</div>
			<h3 class="font-bold">{$_('timeline.2017.h')}</h3>
			<p>{$_('timeline.2017.p1')}</p>
		</div>
	</div>
</div>

<style>
	p {
		@apply mb-4;
	}
	.year {
		@apply font-bold text-green-700 text-p3 mb-1;
	}
	h3 {
		@apply text-t1 font-normal mb-2;
	}
</style>