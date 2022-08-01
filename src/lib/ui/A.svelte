<script>
	export let href
	export let classname
	$: is_external = href.indexOf('http') > -1
</script>

<a href={href} class={classname} target="{is_external ? '_blank' : ''}"><slot/></a>