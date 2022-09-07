<script>
	import Icon from "../lib/ui/Icon.svelte";
	import {_} from 'svelte-i18n'
	import TimelineItem from "../lib/TimelineItem.svelte";
</script>
<div class="bg-gray-200 text-center px-4 py-16">
	<h1 class="text-t1 sm:text-h1">{$_('timeline.title')}</h1>
</div>
<div class="container text-gray-700 py-8">
	<TimelineItem>
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
	</TimelineItem>

	<TimelineItem>
		<div class="year">2020</div>
		<h3 class="font-bold">{$_('timeline.2021.h')}</h3>
		<p>{$_('timeline.2021.p1')}</p>
	</TimelineItem>

	<TimelineItem>
		<div class="year">2019</div>
		<h3 class="font-bold">{$_('timeline.2019.h')}</h3>
		<p>{$_('timeline.2019.p1')}</p>
	</TimelineItem>

	<TimelineItem no_line>
		<div class="year">2017</div>
		<h3 class="font-bold">{$_('timeline.2017.h')}</h3>
		<p>{$_('timeline.2017.p1')}</p>
	</TimelineItem>
</div>

<style>
	p {
		@apply mb-4;
	}
	.year {
		@apply font-bold text-red-700 text-p2 mb-1 leading-tight;
	}
	h3 {
		@apply text-t1 text-blue-800 font-normal mb-2;
	}
</style>