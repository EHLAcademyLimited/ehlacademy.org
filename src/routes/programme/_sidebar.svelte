<script>
	import {t} from 'svelte-i18n'
	import menu_items from '$lib/store/menu'
	import {page} from "$app/stores";
</script>

<div class="bg-gray-200">
	<div class="mx-auto max-w-screen-lg py-8 px-4">
		<div class="pb-8 flex items-center leading-tight text-sm sm:text">
			<a class="text-regal-blue-500" href="/programme">{$t('nav.programme')}</a>
			<div class="mx-2 sm:mx-4">/</div>
			<span class="lg:text-red-500">{$t('nav.oxford_research')}</span>
		</div>
		<div class="grid-cols-1 grid sm:grid-cols-4 gap-8 items-start">
			<div class="col-span-1 bg-white py-4 rounded sticky top-24 sm:block">
				<a href="programme" class="block font-bold mx-4 pb-4 mb-1 text-regal-blue-500 border-b border-gray-300">{$t('nav.programme')}</a>
				<ul>
					{#each $menu_items.main[1].children as child}
						<li>
							<a class:border-red-500={$page.url.pathname === child.href} class="border-l-4 border-white block px-4 py-4 hover:bg-gray-100 hover:text-red-500" href={child.href}>{$t(child.label)}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="sm:col-span-3">
				<slot></slot>
			</div>
		</div>
	</div>
</div>