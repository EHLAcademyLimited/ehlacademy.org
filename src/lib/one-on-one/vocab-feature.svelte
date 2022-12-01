<script>
	import {_, locale} from 'svelte-i18n'
	import Whatsapp from '$lib/one-on-one/whatsapp-enquiry.svelte'
</script>

<div class="article">
	<h2 class="text-4xl mb-2">{$_('vocab_module.title')}</h2>
	<div role="doc-subtitle mb-4" class="mb-4">{$_('vocab_module.subtitle')}</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
		<img src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/vocabulary-spelling-booster-1.jpeg" alt="haha" class="rounded">
		<img src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/vocabulary-spelling-booste-2.jpeg" alt="haha" class="rounded">
	</div>
	<ul>
		{#each [1,2,3,4,5,6] as i}
			<li>🎯 {$_(`vocab_module.p${i}`)}</li>
		{/each}
	</ul>
	<div class="grid md:grid-cols-2 gap-4 my-8">
		<div>
			<p>介紹短片</p>
			<video controls class="mb-2 w-full max-w-screen-sm" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video_1.mp4"></video>
		</div>
		<div>
			<p>使用示範</p>
			<video controls class="w-full max-w-screen-sm" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video2.mp4"></video>
		</div>
	</div>
	<Whatsapp powerful/>
</div>
