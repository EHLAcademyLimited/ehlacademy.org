<script>
	import {t, locale} from 'svelte-i18n'
	import menu_items from '../store/menu'
	import A from '$lib/ui/A.svelte'

	const footer = [
		[$menu_items.main[0]],
		[$menu_items.main[1]],
		[$menu_items.main[2]],
		[$menu_items.main[3], $menu_items.org],
	]
</script>

<footer class="border-t border-gray-200 text-sm sm:text">
	<div class="bg-gray-100">
		<div class="max-w-screen-lg mx-auto px-4 py-8 sm:p-8">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each footer as cols}
					<div>
						{#each cols as item, i}
							<div class:mt-4={i === 1}>
								<a href="{item.href}" class="block font-bold py-2 hover:text-red-500">{$t(item.label)}</a>
								{#each item.children as sub_item}
									<A href={`${sub_item.href}?lang=${$locale}`} classname="block py-2 text-gray-400 hover:text-red-500">
										{$t(sub_item.label)}
									</A>
								{/each}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="bg-gray-200 text-left sm:text-center">
		<div class="max-w-lg mx-auto px-4 py-8">
			<div class="block sm:flex justify-center mb-2">
				<a href="/legal/terms" class="text-gray-400 hover:text-gray-700">{$t('footer.terms')}</a>
				<a href="/legal/privacy" class="text-gray-400 hover:text-gray-700 ml-4">{$t('footer.privacy')}</a>
			</div>
			<p>© {new Date().getFullYear()} {$t('footer.copyright')}</p>
		</div>
	</div>
</footer>