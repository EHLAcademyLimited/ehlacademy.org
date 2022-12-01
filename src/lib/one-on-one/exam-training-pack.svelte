<script>
	import {locale, _} from 'svelte-i18n'
	import Whatsapp from '$lib/one-on-one/whatsapp-enquiry.svelte'
	export let show_price
</script>

<div class="article">
	<div class="mb-4">
		<h2>{$_('exam_training_pack.title')}</h2>
		<div role="doc-subtitle">{$_('exam_training_pack.subtitle')}</div>
	</div>
	{#if $locale === 'hk'}
		<p class="mb-4">👉避免浪費錢❗ 浪費時間❗你需要睇睇以下短片。</p>
		<p class="mb-4">👉睇完呢條片，你會明白為什麼之前補習英文，補極都唔得嘅原因；以及要怎麼做，先可以有真正嘅成效？</p>
	{/if}
	<video class="max-w-screen-sm" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video5.mp4"></video>
	{#if show_price}
		<div class="bg-brown-100 rounded p-2 mt-4">
			{#if $locale === 'hk'}
				<p>👉 目前只開放給報讀「一對一」、「大班課」或「小組課」的學生家長以特價每套HK$30訂閱。每套學習時間一個月。</p>
			{:else}
				<p>👉 Currently only open to subscription for one-on-one class, big class or small-group class students at a special price of HK$30 per set. Study time for each set: one month.</p>
			{/if}
			<Whatsapp powerful/>
		</div>
	{/if}
</div>