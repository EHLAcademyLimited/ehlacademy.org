<script>
	export let role = 'student'
	import Icon from "../ui/Icon.svelte";
	import {locales, locale, t} from "svelte-i18n";
	const mapper = {
		student: [
			{
				name_en: 'School writing assignment submission',
				name_hk: '學校英文作文功課提交',
				href: 'https://student.ehlacademy.org'
			},
			{
				name_en: 'HKAT (student) Login',
				name_hk: 'HKAT (學生端) 登入',
				href: 'https://id.ehlacademy.org'
			}
		],
		teacher: [
			{
				name_en: 'School portal (teacher) login',
				name_hk: '學校平台（老師端）登入',
				href: 'https://school.ehlacademy.org'
			},
			{
				name_en: 'HKAT (teacher) Login',
				name_hk: 'HKAT (老師端) 登入',
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
			<a class="border-gray-400 hover:bg-brown-100a border rounded-lg px-4 py-6 bg-white flex mb-4" href="{item.href}?lang={$locale}">
				<div>
					<div class="text-p2 leading-none">{item[`name_${$locale}`]}</div>
<!--					<div class="text-sm">{item[`desc_${$locale}`]}</div>-->
				</div>
				<Icon className="w-4 ml-auto" name="right"/>
			</a>
		{/each}
	{/if}
</div>