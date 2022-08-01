<script>
	import {getStores} from "$app/stores";
	import {goto} from "$app/navigation";
	const {session, page} = getStores()
	import {getContext, onMount} from 'svelte'
	const {open} = getContext('simple-modal')
	import Dropdown from '$lib/ui/Dropdown.svelte'
	import A from '$lib/ui/A.svelte'
	import NavItem from '$lib/app-shelf/NavItem.svelte'
	import MobileMenu from '$lib/app-shelf/MobileMenu.svelte'
	import menu_items from '$lib/store/menu'
	import {t, locale} from 'svelte-i18n'
	import {languageOptions} from '$lib/store/menu'
	export let segment

	let floated = false
	let mobile_menu_items = [$menu_items.home, $menu_items.main[0],$menu_items.main[1],$menu_items.main[2],$menu_items.main[3]]
	$: is_school = $page.url.pathname === '/school'

	onMount(() => {
		document.body.onscroll = () => {
			let scrollTop = window.pageYOffset|| document.documentElement.scrollTop
			if (scrollTop < 10 && floated) {
				floated = false
			} else if (scrollTop >= 1 && !floated) {
				floated = true
			}
		}
		return () => {
			document.body.onscroll = () => {}
		}
	})

	const changeLang = (lang) => {
		const url = $page.url.origin + `?lang=${lang}`
		goto(url, {replaceState: true})
		locale.set(lang)
	}
</script>

<nav class="px-2 sm:px-4 inset-x-0 top-0 z-50 transition-all fixed text-gray-500" class:floated>
	<div class="w-full flex items-center mx-auto h-12 sm:h-20 max-w-screen-xl flex-1 lg:flex-initial">
		<a href="/" class="order-2 lg:order-1 flex-1 lg:flex-initial justify-center w-auto lg:w-60 inline-flex items-center text-red-500 transition-all" class:gray-logo={segment === 'animated-library' && !floated}>
			<img src="/logo.png" alt="logo" class="w-8 h-8 sm:w-12 sm:h-12">
<!--			<svg class="h-6 ml-2" viewBox="0 0 614 153" fill="#0097e6" xmlns="http://www.w3.org/2000/svg"><path d="M0.53125 3.28125H108.438V46.4062H58.8438V58.6875H108.25V95.4375H58.8438V109.594H111.719V153H0.53125V3.28125ZM223.469 3.28125H281.875V153H223.469V97.6875L192.344 100.406V153H134.031V3.28125H192.344V57.375L223.469 54.8438V3.28125ZM305.031 3.28125H363.344V107.906H413.688V153H305.031V3.28125ZM419.781 153L494.219 10.875C496.781 5.8125 501.5 2.4375 508.375 0.75C510.375 0.25 512.844 0 515.781 0C518.719 0 521.906 0.84375 525.344 2.53125C528.844 4.15625 531.594 6.75 533.594 10.3125L613.469 153H537.438L531.531 138.188H491.031L485.969 153H419.781ZM495.625 108.469H525.906L511.562 67.9688L495.625 108.469Z"/></svg>-->
		</a>

		<div class="lg:flex-1 order-1 lg:order-2 w-16 lg:w-auto">
			<div class="lg:hidden">
				<MobileMenu items={mobile_menu_items}/>
			</div>
			<div class="hidden lg:flex justify-center">
				{#each $menu_items.main as item}
					<Dropdown disabled={item.no_children} classname="{item.is_programme ? 'fixed inset-x-4 text max-w-screen-lg mx-auto rounded shadow-2xl border border-gray-200 bg-white' : 'absolute rounded p-2 shadow-2xl border border-gray-200 bg-white w-72'}">
						<div slot="activator">
							<NavItem {item} {segment} is_white={is_school && !floated}/>
						</div>
						{#if !item.no_children}
							{#each item.children as sub_item}
								<A href={`${sub_item.href}?lang=${$locale}`} classname="py-3 px-4 hover:bg-gray-200 rounded flex items-center flex">
									{#if sub_item.image}
											<span class="w-6 mr-2 flex-shrink-0">
												<img src={sub_item.image} alt={$t(sub_item.label)}>
											</span>
									{/if}
									<p class="mb-1">{$t(sub_item.label)}</p>
								</A>
							{/each}
						{/if}
					</Dropdown>
				{/each}
			</div>
		</div>

		<div class="order-3 w-16 lg:w-60 flex justify-end items-center">
			<div class="flex items-center">
				<Dropdown>
					<div slot="activator">
						<button class="menu-item-right w-full">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="w-4 h-4"><path d="M18 0c9.94 0 18 8.06 18 18s-8.06 18-18 18S0 27.94 0 18 8.06 0 18 0zM2.625 16.714H7.74c.086-2.128.383-4.154.855-6.014C7.4 10.28 6.3 9.785 5.31 9.223c-1.497 2.16-2.457 4.722-2.685 7.49zM11.548 3.98c-1.75.81-3.326 1.935-4.65 3.306.737.38 1.552.725 2.432 1.025.602-1.644 1.352-3.107 2.218-4.33zm5.167 12.734v-4.526c-2.006-.08-3.922-.35-5.692-.775-.386 1.63-.632 3.418-.71 5.3h6.402zm0-13.93c-2.042.686-3.812 2.975-4.975 6.198 1.542.343 3.217.563 4.975.635V2.785zm16.662 13.93c-.23-2.77-1.188-5.33-2.686-7.49-.988.56-2.09 1.057-3.284 1.477.47 1.86.77 3.887.854 6.015h5.117zM24.452 3.98c.866 1.223 1.616 2.685 2.218 4.33.88-.3 1.695-.643 2.433-1.025-1.324-1.37-2.898-2.496-4.65-3.304zm-5.165 12.734h6.4c-.077-1.883-.323-3.67-.71-5.3-1.77.425-3.686.694-5.69.774v4.526zm0-13.93v6.833c1.757-.073 3.432-.292 4.973-.635-1.162-3.223-2.932-5.512-4.973-6.197zm14.09 16.503H28.26c-.085 2.127-.383 4.153-.854 6.013 1.193.42 2.296.916 3.285 1.478 1.498-2.16 2.458-4.723 2.687-7.49zM24.452 32.02c1.753-.808 3.327-1.934 4.65-3.305-.737-.382-1.552-.727-2.433-1.025-.602 1.644-1.352 3.108-2.218 4.33zm-5.165-12.733v4.524c2.005.082 3.92.352 5.69.776.387-1.63.633-3.418.71-5.3h-6.4zm0 13.93c2.04-.686 3.81-2.975 4.973-6.198-1.54-.344-3.216-.563-4.973-.636v6.832zM2.625 19.286c.228 2.768 1.188 5.33 2.686 7.49.99-.562 2.09-1.06 3.286-1.478-.473-1.86-.77-3.887-.855-6.014H2.626zm8.923 12.733c-.866-1.222-1.616-2.686-2.218-4.33-.88.3-1.695.644-2.432 1.025 1.324 1.37 2.9 2.497 4.65 3.305zm5.167-12.733h-6.402c.078 1.882.324 3.67.71 5.3 1.77-.425 3.687-.694 5.692-.775v-4.525zm0 13.93v-6.833c-1.758.073-3.433.292-4.975.635 1.163 3.222 2.933 5.51 4.975 6.196z"></path></svg>
						</button>
					</div>
					{#each languageOptions as lang}
						<div class="cursor-pointer w-full dropdown-item" on:click={() => {changeLang(lang.key)}}>{lang.label}</div>
					{/each}
				</Dropdown>
			</div>
		</div>
	</div>
</nav>

<style>
    .menu-item-right {
        @apply rounded-full hover:bg-gray-100 h-12 px-4 inline-flex items-center;
    }

    .dropdown-item {
		    @apply h-10 flex items-center px-4 hover:bg-gray-200;
    }

    nav.floated {
		    @apply bg-white shadow;
    }

    .gray-logo {
		    @apply text-gray-500 !important;
    }
</style>