<script>
	import {_} from 'svelte-i18n'
	import {page} from '$app/stores'

	export let image = "https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/ehla-zoom-key-image.jpeg";
	export let title = "";
	export let description = "EHLA｜源於牛津，超質素教學";
	export let keywords = "EHLA,網課,英文,香港,zoom堂,老師,外語,英美老師,低學費,質素教學,小組課,大班課,面試,文法應用,應試,會話,閱讀理解,升中,寫作,應試技巧,主題討論,grammar,小學,K班,初小,高小,中學,初中,DSE,試堂";
	export let is_ehla_title = true
	$: _title = is_ehla_title ? title + ' - EHLA' : title
</script>

<svelte:head>
	<title>{_title}</title>

	<meta name="description" content="{description}" />
	<meta name="keywords" content="{keywords}" />

	<meta property="og:title" content="{_title}">
	<meta property="og:site_name" content={$_('site_title')}>
	<meta property="og:description" content="{description}">
	<meta property="og:image:secure_url" content="{image}">
	<meta property="og:url" content="https://{$page.url.host}{$page.url.pathname}">

	<meta name="twitter:title" content="{_title}">
	<meta name="twitter:description" content="{description}">
	<meta name="twitter:image" content="{image}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://{$page.url.host}{$page.url.pathname}">
	<slot/>
</svelte:head>
