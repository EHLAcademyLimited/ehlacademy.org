<script>
	import Icon from "../../lib/ui/Icon.svelte";
	import {_} from 'svelte-i18n'
	import TimelineItem from "../../lib/TimelineItem.svelte";
</script>
<div class="bg-cover bg-center pl-8 md:pl-24 py-20 text-white relative" style="background-image: url('/milestone.jpeg')">
	<div class="absolute z-10 inset-0 backdrop"></div>
	<h1 class="mx-auto max-w-screen-lg z-20 relative text-t1 sm:text-h1 drop-shadow-xl">{$_('timeline.title')}</h1>
</div>
<div class="mx-auto max-w-screen-lg pr-2 text-gray-700 py-8">
	<TimelineItem>
		<div class="year">2022</div>
		<h3 class="font-bold">{$_('timeline.2022.h')}</h3>
		<p>{$_('timeline.2022.p1')}</p>
		<p>{$_('timeline.2022.p2')}</p>
		<ul>
			{#each [1,2,3,4,5,6,7,8] as i}
				<li class="flex items-center mb-2">
					<Icon name="tick" className="w-4 text-green-500 flex-shrink-0"/>
					<div class="ml-2 leading-tight">{$_(`timeline.2022.${i}`)}</div>
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
		<img class="w-72 rounded" src="/oxford.jpg" alt="oxford">
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
	.backdrop {
		background-image: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0));
	}
</style>