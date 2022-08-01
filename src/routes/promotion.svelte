<script context="module">
	import {http} from "$lib/http";

	export const load = async ({url, fetch}) => {
		const {success} = await http.post(fetch, '/userApi/ping_access_token', {
			access_token: url.searchParams.get('access_token')
		})
		return {
			props: {
				is_authorized: success
			}
		}
	}
</script>

<script>
	export let is_authorized
	let redeem_status = {}
	import dayjs from 'dayjs'
	import utc from "dayjs/plugin/utc.js";
	dayjs.extend(utc)
	import RedeemSuccessDialog from "../lib/promotion/RedeemSuccessDialog.svelte";

	$: is_allow_full_extend = dayjs.utc(redeem_status.allow_extend_vocab_task_end_date).local().isAfter(dayjs())
	$: end_date = dayjs.utc(redeem_status.student_vocab_task_end_date).local()
	$: day_diff = end_date.diff(dayjs(), 'day')
	import {onMount} from "svelte";
	import NotYetLikeDialog from "$lib/promotion/NotYetLikeDialog.svelte";

	import {getContext} from 'svelte'
	let loading

	const {openModal} = getContext('simple-modal')
	import VocabDetailDialog from "$lib/promotion/VocabDetailDialog.svelte";

	let levels

	onMount(async () => {
		if (!is_authorized) return
		const res = await http.get(fetch, '/userApi/children')
		const children = res.data
		levels = children.map(c => c.level)
		checkRedeemStatus()
	})

	const checkRedeemStatus = async () => {
		const {data, success, debug} = await http.post(fetch, '/aiMembershipApi/is_allow_full_extend')
		if (success) {
			redeem_status = data
		}
	}

	const onAdClick = (ad) => {
		const msg = {
			type: 'search',
			data: {
				rc_level: ad.rc_level,
				rc_tag: ad.rc_tag
			}
		}
		window.postMessage(JSON.stringify(msg))
	}

	const ads = [
		{
			image: '/promotion/ad-weak-eng.jpeg',
			rc_tag: 'big',
			rc_level: 'all',
			levels: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
		},
		{
			image: '/promotion/ad-band1.jpeg',
			rc_tag: 'all',
			rc_level: 'all',
			levels: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
		},
		{
			image: '/promotion/ad-dse-writing.jpeg',
			rc_tag: 'course-tag-writing',
			rc_level: 'DSE',
			levels: ['s1', 's2', 's3', 's4', 's5']
		},
		{
			image: '/promotion/ad-exam.jpeg',
			rc_tag: 'course-tag-exam-p4-up',
			rc_level: 'all',
			levels: ['p4', 'p5', 'p6']
		},
		{
			image: '/promotion/ad-interview.jpeg',
			rc_tag: 'course-tag-interview',
			rc_level: 'all',
			levels: ['p4', 'p5', 'p6']
		},
		{
			image: '/promotion/ad-k.jpeg',
			rc_tag: 'course-tag-interview',
			rc_level: 'k123',
			levels: ['k1', 'k2', 'k3']
		},
		{
			image: '/promotion/ad-p6-s1.jpeg',
			rc_tag: 'all',
			rc_level: 'js',
			levels: ['p6', 's1', 's2', 's3']
		},
		{
			image: '/promotion/ad-dse-speaking.jpeg',
			rc_tag: 'course-tag-reading-speaking',
			rc_level: 'DSE',
			levels: ['s3', 's4', 's5', 's6']
		}
	]

	const isAdVisible = (ad) => {
		let show = false
		ad.levels.forEach(lv => {
			if (levels.includes(lv)) show = true
		})
		return show
	}

	const onLearnMore = () => {
		openModal(VocabDetailDialog)
	}

	const onRedeem = async () => {
		if (loading) return
		loading = true
		await checkRedeemStatus()
		if (!is_authorized) {
			alert('login plz')
		} else if (!is_allow_full_extend) {
			openModal(NotYetLikeDialog)
			loading = false
		} else {
			const {data} = await http.post(fetch, '/aiMembershipApi/special_extends_cash_user_plan')
			loading = false
			openModal(RedeemSuccessDialog)
			await checkRedeemStatus()
		}
	}
</script>

{#if levels}
<div>
	<div class="h-64 sm:h-72 bg-yellow-200 flex items-center justify-center">
		<img src="/promotion/ad_scroll_to_btm_2.png" alt="hi" class="h-48 sm:h-60 mx-auto">
	</div>

	<div class="md:flex items-center">
		<img src="/promotion-banner.png" alt="promotion-banner" class="w-[600px] mx-auto flex-1 md:w-1/2">

		<div class="px-4 md:text-xl flex-1 md:w-1/2">
			<p class="font-bold">如何報名</p>
			<p>👉 😀 家長購買課堂學券後，可以非常靈活地根據需要，隨時組合及靈活Book堂(預約課堂)。</p>
			<p>☎️ 報名及試堂查詢</p>
			<p>WhatsApp: (+852) 9654 8680</p>
		</div>
	</div>

	<div class="container py-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each ads as ad}
				{#if isAdVisible(ad)}
					<img on:click={() => {onAdClick(ad)}} src={ad.image} alt="ad" class="cursor-pointer border-8 hover:border-slate-500">
				{/if}
			{/each}
		</div>
	</div>

	<div class="lg:h-96 p-4 sm:py-4 bg-yellow-200 block sm:flex items-center justify-center">
		<div>
			<img src="/promotion/vocab-present.png" alt="hi" class="sm:w-64 w-48 mx-auto">
			<p class="hidden md:block text-xl text-amber-700 mb-2 font-light mx-4">群組成員專屬3個月免費</p>
		</div>
		<div class="sm:ml-8 mt-4 sm:mt-0">
			<p class="md:hidden text-xl text-amber-700 mb-2 font-light mx-4">群組成員專屬3個月免費</p>
			<img src="/promotion/vocab-exam-title.png" alt="hi" class="h-24 mb-4">
			<div class="grid grid-cols-2 gap-x-4">
				<p class="pt">解決串字難題</p>
				<p class="pt">解決默書難題</p>
				<p class="pt">自動糾正法音</p>
				<p class="pt">智能清除弱項</p>
			</div>
			{#if end_date && day_diff >= 0}
				<p class="mt-4 bg-green-500 text-white text-sm rounded px-4 py-2">
					你已經成功換取，有效期還有<span class="text-2xl font-bold mx-0.5">{Number(day_diff) + 1}</span>天
				</p>
			{/if}
			<div class="my-4 flex w-full">
				<button on:click={onLearnMore} class="bg-white text-amber-500 border border-current px-4 py-2 rounded-full text-lg flex-1 whitespace-nowrap">
					功能介紹及示範
				</button>
				<button on:click={onRedeem} class="{loading ? 'bg-gray-300' : 'bg-amber-500'} text-white px-8 py-2 rounded-full text-lg ml-2 border-4 border-amber-400 font-bold flex-1 whitespace-nowrap">
					{#if day_diff >= 0}
						再延長至7日
					{:else}
						換領7日
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>
{/if}

<svelte:head>
	<title>Promotion - EHLA</title>
</svelte:head>

<style>
	.pt {
		@apply inline-block border-2 border-red-500 bg-white px-4 py-1 rounded-full my-1 text-center shadow;
	}
</style>