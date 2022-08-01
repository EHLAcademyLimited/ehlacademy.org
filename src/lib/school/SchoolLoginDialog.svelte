<script>
	export let role = 'student'
	import Icon from "../ui/Icon.svelte";
	import {locales, locale, t} from "svelte-i18n";
	const mapper = {
		student: [
			{
				name_en: 'Writing submission portal',
				desc_en: 'For client on or after 2021',
				name_hk: '英文作文提交系統',
				desc_hk: '如果你是2021年或之後的客戶',
				href: 'https://student.ehlacademy.org'
			},
			{
				name_en: 'Legacy portal (AT)',
				desc_en: 'For client on or before 2020',
				name_hk: '舊版本 (AT)',
				desc_hk: '如果你是2020年或之前的客戶',
				href: 'https://id.ehlacademy.org'
			}
		],
		teacher: [
			{
				name_en: 'New portal',
				desc_en: 'For client on or after 2021',
				name_hk: '新版本',
				desc_hk: '如果你是2021年或之後的客戶',
				href: 'https://school.ehlacademy.org'
			},
			{
				name_en: 'Legacy portal (AT)',
				desc_en: 'For client on or before 2020',
				name_hk: '舊版本 (AT)',
				desc_hk: '如果你是2020年或之前的客戶',
				href: 'https://teach.ehlacademy.org'
			}
		]
	}
	$: items = mapper[role]
</script>

<div class="mt-4">
	<img class="w-12 mx-auto" src="/logo.png" alt="ehla-logo">
	<p class="text-p2 text-gray-700 mt-2 mb-4 text-center">{$t(`school.${role}_login`)}</p>
	{#if items}
		{#each items as item}
			<a class="border-gray-400 hover:bg-brown-100a border rounded-lg px-4 py-3 bg-white flex mb-4" href="{item.href}?lang={$locale}">
				<div>
					<div class="text-p2 leading-none">{item[`name_${$locale}`]}</div>
					<div class="text-sm">{item[`desc_${$locale}`]}</div>
				</div>
				<Icon className="w-4 ml-auto" name="right"/>
			</a>
		{/each}
	{/if}
</div>