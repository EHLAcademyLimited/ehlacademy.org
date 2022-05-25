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
	console.log('is_authorized', is_authorized)
	let redeem_status = {}
	import dayjs from 'dayjs'
	import utc from "dayjs/plugin/utc";
	dayjs.extend(utc)

	$: is_allow_full_extend = dayjs.utc(redeem_status.allow_extend_vocab_task_end_date).local().isAfter(dayjs())
	$: end_date = dayjs.utc(redeem_status.student_vocab_task_end_date).local()
	$: day_diff = end_date.diff(dayjs(), 'day')
	import {onMount} from "svelte";
	import NotYetLikeDialog from "$lib/promotion/NotYetLikeDialog.svelte";

	import {getContext} from 'svelte'

	const {openModal} = getContext('simple-modal')
	import VocabDetailDialog from "$lib/promotion/VocabDetailDialog.svelte";

	let levels

	onMount(async () => {
		if (!is_authorized) return
		const res = await http.get(fetch, '/userApi/children')
		const children = res.data
		levels = children.map(c => c.level)

		const {data, success, debug} = await http.post(fetch, '/aiMembershipApi/is_allow_full_extend')
		if (success) {
			redeem_status = data
		}
	})

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
			rc_tag: 'big-class',
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
		if (!is_authorized) {
			alert('login plz')
		} else if (!is_allow_full_extend) {
			openModal(NotYetLikeDialog)
		} else {
			const {data} = await http.post(fetch, '/aiMembershipApi/special_extends_cash_user_plan', null, {
				notification: 'Redeem success'
			})
		}
	}
</script>

{#if levels}
<div>
	<div class="h-64 sm:h-72 bg-yellow-200 flex items-center justify-center">
		<img src="/promotion/ad_scroll_to_btm_2.png" alt="hi" class="h-48 sm:h-60 mx-auto">
	</div>

	<div class="container py-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each ads as ad}
				{#if isAdVisible(ad)}
					<img on:click={() => {onAdClick(ad)}} src={ad.image} alt="ad" class="cursor-pointer border-8 hover:border-slate-500">
				{/if}
			{/each}
		</div>
	</div>

	<div class="sm:h-96 p-4 sm:p-0 bg-yellow-200 block sm:flex items-center justify-center">
		<div>
			<img src="/promotion/vocab-present.png" alt="hi" class="sm:w-64 w-48 mx-auto">
			{#if end_date && day_diff >= 0}
				<p class="mt-4 bg-green-500 text-white text-sm rounded px-4 py-2">
					你已經成功換取，有效期還有<span class="text-2xl font-bold mx-0.5">{day_diff}</span>天
				</p>
			{/if}
		</div>
		<div class="sm:ml-8 mt-4 sm:mt-0">
			<p class="text-xl text-amber-700 mb-2 font-light mx-4">會員專屬</p>
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
				<button on:click={onRedeem} class="bg-amber-500 text-white px-8 py-2 rounded-full text-lg ml-2 border-4 border-amber-400 font-bold flex-1 whitespace-nowrap">
					{#if day_diff >= 0}
						再延長7日
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
		@apply inline-block border-2 border-red-500 bg-white px-4 py-1 rounded-full my-1 text-base text-center shadow;
	}
</style>