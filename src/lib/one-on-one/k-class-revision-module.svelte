<script>
	import {_, locale} from 'svelte-i18n'
	import Whatsapp from '$lib/one-on-one/whatsapp-enquiry.svelte'
</script>

<div class="article">
	<h2 class="mb-2">{$_('k3_revision_pack.title')}</h2>
	<div role="doc-subtitle" class="leading-tight mb-4">{$_('k3_revision_pack.subtitle')}</div>
	<p>{$_('k3_revision_pack.desc')}</p>
	<video class="max-w-screen-sm" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video3.mp4"></video>
	<div class="pb-8">
	<Whatsapp powerful/>
	</div>
</div>