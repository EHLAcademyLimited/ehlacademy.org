<script context="module">
	import {http} from "$lib/http";
	export const load = async ({url, fetch}) => {
		const {success} = await http.get(fetch, '/userApi/ping_access_token', {
			access_token: url.searchParams.get('access_token')
		})
		const {data} = await http.post(fetch, '/aiMembershipApi/is_allow_full_extend')
		return {
			props: {
				is_authorized: success,
				is_allow_full_extend: data && data.is_allow
			}
		}
	}
</script>

<script>
	export let is_authorized
	export let is_allow_full_extend
	import {notifications} from "$lib/store/notification";

	const onRedeemClick = async () => {
		const {data} = await http.post(fetch, '/aiMembershipApi/special_extends_cash_user_plan', null, {
			notification: 'Redeem success'
		})
	}
</script>

<div class="container p-4">
	<h1 on:click={() => {notifications.success('hi')}} class="text-4xl font-light mb-4">EHLA Promotion</h1>
	<p>is_allow_full_extend: {is_allow_full_extend}</p>
	{#if is_authorized}
		<button on:click={onRedeemClick} class="{is_allow_full_extend ?
		'bg-blue-500 text-white hover:bg-blue-400' :
		'bg-gray-300 text-white'} px-4 py-2 rounded">
			Redeem vocab
		</button>
	{:else}
		<p>Please login in</p>
	{/if}
</div>