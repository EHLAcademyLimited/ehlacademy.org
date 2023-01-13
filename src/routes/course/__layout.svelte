<script>
	import {locale} from "svelte-i18n";
	import WhatsappEnquiry from "../../lib/ui/WhatsappEnquiry.svelte";
</script>

<slot></slot>

<div class="container">
	<div class="rounded-lg p-4 bg-amber-100 my-4">
		{#if $locale === 'cn'}
			<p>欢迎组队/包班报名，享受学费💖优惠</p>
			<p>详情请联系：</p>
			<p>🌐微信服务号：EHLA HK</p>
			<p>🌐WhatsApp：(＋852) 9654 8680</p>
			<p>🌐Line: (＋852) 9654 8680</p>
		{:else}
			<WhatsappEnquiry/>
		{/if}
	</div>
</div>