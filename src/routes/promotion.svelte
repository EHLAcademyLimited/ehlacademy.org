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
	$: is_allow_full_extend = redeem_status.is_allow
	$: end_date = redeem_status.end_date
	$: day_diff = dayjs(end_date).diff(dayjs(), 'day')

	import {getContext} from 'svelte'
	const {openModal, closeModal} = getContext('simple-modal')
	import VocabDetailDialog from "$lib/promotion/VocabDetailDialog.svelte";
	import {goto} from "$app/navigation";
	const is_web_view = true

	const onAdClick = (ad) => {
		if (is_web_view) {
			window.dispatchEvent(new Event('gameFinish'))
			const msg = {
				type: 'search',
				data: {
					rc_level: ad.rc_level,
					rc_tag: ad.rc_tag
				}
			}
			window.postMessage(JSON.stringify(msg))
		} else {
			goto(`/hk/zoom/classroom?rc_tag=${ad.rc_tag}&rc_level=${ad.rc_level}`)
		}
	}

	const ads = [
		{
			image: '/promotion/ad-weak-eng.jpeg',
			rc_tag: 'all',
			rc_level: 'all'
		},
		{
			image: '/promotion/ad-band1.jpeg',
			rc_tag: 'course-tag-exam-p4-up',
			rc_level: 'all'
		},
		{
			image: '/promotion/ad-dse-writing.jpeg',
			rc_tag: 'course-tag-writing',
			rc_level: 'DSE'
		},
		{
			image: '/promotion/ad-exam.jpeg',
			rc_tag: 'course-tag-exam-p4-up',
			rc_level: 'all'
		},
		{
			image: '/promotion/ad-interview.jpeg',
			rc_tag: 'course-tag-interview',
			rc_level: 'all'
		},
		{
			image: '/promotion/ad-k.jpeg',
			rc_tag: 'course-tag-interview',
			rc_level: 'k123'
		},
		{
			image: '/promotion/ad-p6-s1.jpeg',
			rc_tag: 'all',
			rc_level: 'js'
		}
	]

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

	const onClick = (rc_level, rc_tag) => {
		window.dispatchEvent(new Event('gameFinish'))
		const msg = {
			type: 'search',
			data: {
				rc_level,
				rc_tag
			}
		}
		window.postMessage(JSON.stringify(msg))
	}
</script>


<div>
	<div class="h-96 bg-yellow-50 flex items-center justify-center">
		<div class="container grid grid-cols-2 text-center">
			<img src="/promotion/present.png" alt="hi" class="w-60 mx-auto">
			<div class="flex items-center justify-start">
				<h1 class="text-6xl text-amber-500">轆到落底扲禮物</h1>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-4">
		{#each ads as ad}
			<img on:click={() => {onAdClick(ad)}} src={ad.image} alt="ad" class="border-8">
		{/each}
	</div>

	<div class="h-96 bg-yellow-200 flex items-center justify-center">
		<div>
			<img src="/promotion/vocab-present.png" alt="hi" class="w-64">
			<p class="mt-4 bg-green-500 text-white text-sm rounded px-4 py-2">
				你已經成功換取，有效期還有{day_diff}天
			</p>
		</div>
		<div class="ml-8">
			<img src="/promotion/vocab-exam-title.png" alt="hi" class="h-24 mb-4">
			<div class="grid grid-cols-2 gap-x-4">
				<p class="pt">解決串字難題</p>
				<p class="pt">解決默書難題</p>
				<p class="pt">自動糾正法音</p>
				<p class="pt">智能清除弱項</p>
			</div>
			<div class="my-4 flex w-full">
				<button on:click={onLearnMore} class="bg-white text-amber-500 border border-current px-8 py-2 rounded-full text-lg flex-1">
					詳情
				</button>
				<button on:click={onRedeem} class="bg-amber-500 text-white px-8 py-2 rounded-full text-lg ml-2 border-4 border-amber-400 font-bold flex-1">
					換領
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.pt {
		@apply inline-block border-2 border-red-500 bg-white px-4 py-1 rounded-full my-1 text-base text-center shadow;
	}
</style>