<script>
	import {locale} from 'svelte-i18n'
</script>

<div class="font-bold text-blue-500 mb-4">
	{#if $locale === 'hk'}
		❝一個同外籍老師學英文，聽及講咗1年英文的小朋友，與另一個無同等經歷的小朋友，分別是什麼？❞
	{:else}
		Sharing
	{/if}
</div>
<video class="max-w-full max-w-xl" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/story-telling.mp4"></video>