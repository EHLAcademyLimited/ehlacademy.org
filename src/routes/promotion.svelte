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
	import {getContext} from 'svelte'
	const {openModal, closeModal} = getContext('simple-modal')
	import VocabDetailDialog from "../lib/promotion/VocabDetailDialog.svelte";

	const onLearnMore = () => {
		openModal(VocabDetailDialog)
	}

	const onRedeem = async () => {
		if (!is_authorized) {
			alert('login first')
		} else if (!is_allow_full_extend) {
			alert('你仲未like我地facebook, like 完call我地，再入番黎')
		} else {
			const {data} = await http.post(fetch, '/aiMembershipApi/special_extends_cash_user_plan', null, {
				notification: 'Redeem success'
			})
		}
	}
</script>


<div class="container p-4">
	<div class="h-96 bg-yellow-50 flex items-center justify-center">
		<h1 class="text-4xl">Scroll 到落底扲禮物</h1>
	</div>
	<div class="h-96 bg-yellow-100 flex items-center justify-center">
		<h1 class="text-4xl">Ad 01</h1>
	</div>
	<div class="h-96 bg-yellow-50 flex items-center justify-center">
		<h1 class="text-4xl">Ad 02</h1>
	</div>
	<div class="h-96 bg-yellow-100 flex items-center justify-center">
		<h1 class="text-4xl">Ad 03</h1>
	</div>
	<div class="h-96 bg-yellow-200 flex items-center justify-center">
		<img src="/vocab-present.jpeg" alt="hi" class="w-48">
		<div>
			<img src="/title.jpeg" alt="hi" class="w-48">
			<button on:click={onLearnMore} class="button">Learn more</button>
			<button on:click={onRedeem} class="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded">
				Redeem now
			</button>
		</div>
	</div>
</div>