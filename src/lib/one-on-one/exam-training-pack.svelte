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
		<p class="mb-4">ðé¿åæµªè²»é¢â æµªè²»æéâä½ éè¦ççä»¥ä¸ç­çã</p>
		<p class="mb-4">ðçå®å¢æ¢çï¼ä½ ææç½çºä»éº¼ä¹åè£ç¿è±æï¼è£æ¥µé½åå¾ååå ï¼ä»¥åè¦æéº¼åï¼åå¯ä»¥æçæ­£åææï¼</p>
	{/if}
	<video class="max-w-screen-sm" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video5.mp4"></video>
	{#if show_price}
		<div class="bg-brown-100 rounded p-2 mt-4">
			{#if $locale === 'hk'}
				<p>ð ç®ååªéæ¾çµ¦å ±è®ãä¸å°ä¸ãããå¤§ç­èª²ãæãå°çµèª²ãçå­¸çå®¶é·ä»¥ç¹å¹æ¯å¥HK$30è¨é±ãæ¯å¥å­¸ç¿æéä¸åæã</p>
			{:else}
				<p>ð Currently only open to subscription for one-on-one class, big class or small-group class students at a special price of HK$30 per set. Study time for each set: one month.</p>
			{/if}
			<Whatsapp powerful/>
		</div>
	{/if}
</div>