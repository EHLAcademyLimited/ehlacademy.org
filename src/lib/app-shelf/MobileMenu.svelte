<script>
	import {locale, t} from 'svelte-i18n'
	import { slide } from 'svelte/transition';
	import {goto} from "$app/navigation";
	import A from '$lib/ui/A.svelte'
	import Icon from '$lib/ui/Icon.svelte'

	export let is_close = true;
	export let items = [];
	export let segment;
	export let selected_category;

	let container
	let mounted = false

	const onToggle = () => {
		is_close = !is_close
	}

	const onToggleSubMenu = (menuItem) => {
		const has_child = menuItem.children && menuItem.children.length
		if (has_child) {
			menuItem.active = !menuItem.active
			items = items
			if (menuItem.label === 'nav.school_and_org') {
				setTimeout(() => {
					container.scrollTop = container.scrollHeight
				}, 300)
			}
		} else {
			goto(menuItem.href)
			is_close = true
		}
	}

	const onWindowClick = () => {
		is_close = true
	}

	const switchLang = (lang) => {
		locale.set(lang)
	}

	const rmHiddenClass = node => {
		mounted = true
	}
</script>

<button class="w-12 h-12 cc text-gray-500" on:click|stopPropagation={onToggle}>
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current w-4 h-4"><path d="M0 1h36v6.46H0zM0 14.733h36v6.46H0zM0 28.54h36V35H0z"></path></svg>
</button>

<svelte:window on:click={onWindowClick}/>

<div bind:this={container} use:rmHiddenClass class="{mounted ? 'block' : 'hidden'} z-50 transition-transform transform fixed top-0 inset-0 bg-white overflow-y-scroll bg-gray-100" class:-translate-x-full={is_close} class:translate-x-0={!is_close}>

	<div class="h-16 flex items-center bg-white border-b border-gray-200">
		<button class="w-16 h-16 cc text-gray-400 hover:text-gray-700">
			<Icon className="w-4 h-4" name="close"/>
		</button>
		<div class="flex-1 cc">
			<img src="/logo.png" alt="logo" class="w-10">
		</div>
		<div class="w-16 h-16"></div>
	</div>

	<nav class="pt-4">
		{#each items as menuItem}

			<div on:click|stopPropagation={() => {onToggleSubMenu(menuItem)}}
			     class="text-brown-400 hover:text-brown-400a cursor-pointer h-14 flex items-center px-6" class:active={menuItem.href === '/'+segment}>
				<span class="flex-1 text font-bold">
					{$t(menuItem.label)}
				</span>
				{#if menuItem.children && menuItem.children.length}
					<button class="transform opacity-80" class:rotate-180={menuItem.active}>
						<Icon name="right" className="transform -rotate-90 w-4 h-4"/>
					</button>
				{/if}
			</div>

			{#if menuItem.children && menuItem.active}
				<div transition:slide class="border-b border-t border-brown-100 bg-brown-50">
					{#each menuItem.children as child}
						<A href="{`${child.href}?lang=${$locale}`}"
						   classname="text-sm h-12 px-6 flex items-center text-brown-400 hover:text-brown-400a">
							{#if child.image}
								<img src={child.image} alt={child.label} class="w-4 mr-4 flex-shrink-0">
							{/if}
							{$t(child.label)}
							<Icon name="right2" className="ml-4 w-4 h-4 opacity-50"/>
						</A>
					{/each}
				</div>
			{/if}
		{/each}
	</nav>
</div>

<style>
    .active {
        @apply text-blue-700
    }
</style>