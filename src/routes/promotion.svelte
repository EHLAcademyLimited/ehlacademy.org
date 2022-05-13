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
				redeem_status: data
			}
		}
	}
</script>

<script>
	export let is_authorized
	export let redeem_status
	import dayjs from 'dayjs'
	import relativeTime from "dayjs/plugin/relativeTime";
	dayjs.extend(relativeTime)
	$: is_allow_full_extend = redeem_status.is_allow
	$: end_date = redeem_status.end_date
	$: time_left = dayjs(end_date).fromNow()
	$: day_diff = dayjs(end_date).diff(dayjs(), 'day')

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


<div>
	<div class="h-96 bg-yellow-50 flex items-center justify-center">
		<div class="container grid grid-cols-2 text-center">
			<img src="/present.png" alt="hi" class="w-60 mx-auto">
			<div class="flex items-center justify-start">
				<h1 class="text-6xl text-amber-500">轆到落底扲禮物</h1>
			</div>
		</div>
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
		<div>
			<img src="/vocab-present2.png" alt="hi" class="w-48">
		</div>
		<div class="ml-8">
			<img src="/title.png" alt="hi" class="w-48 mb-4">
			<button on:click={onLearnMore} class="bg-white text-amber-500 border border-current px-8 py-2 rounded-full text-lg">
				詳情
			</button>
			<button on:click={onRedeem} class="bg-amber-500 text-white px-8 py-2 rounded-full text-lg ml-2 border-4 border-amber-400 font-bold">
				換領
			</button>
			<p class="mt-4 bg-green-500 text-white text-sm rounded px-4 py-2">
				你已經成功換取，有效期還有{day_diff}天
			</p>
		</div>
	</div>
</div>