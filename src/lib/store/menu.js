import {readable} from 'svelte/store'

export default readable({
	main: [
		{
			label: 'nav.team_and_sharing',
			href: '',
			children: [
				{
					label: 'nav.sharing',
					href: '/about/sharing'
				},
				{
					label: 'nav.about_ehla',
					href: '/about/ehla'
				},
				{
					label: 'nav.contact_us',
					href: '/about/contact'
				}
			]
		},
		{
			label: 'nav.programme',
			href: '',
			children: [
				{
					label: 'nav.oxford_research',
					href: '/programme/oxford-research',
					image: '/oxford-icon.png'
				},
				{
					label: 'nav.charity',
					href: '/programme/charity',
					image: '/paper-plane.png'
				}
			]
		},
		{
			label: 'nav.ai_and_app',
			href: '',
			children: [
				{
					label: 'nav.ai_tool',
					href: '/product/ai-tool',
					image: '/ai-tool-icon.png'
				},
				{
					label: 'nav.animated_library',
					href: '/product/animated-library',
					image: '/reader-icon.png'
				},
				{
					label: 'nav.baby_app',
					href: 'https://ehla-baby.com',
					image: '/baby-app-icon.png'
				}
			]
		},
		{
			label: 'nav.school_corner',
			href: '/school',
			no_children: true,
			children: []
		}
	],
	home: {
		label: 'nav.home',
		href: '/'
	}
});
export const languageOptions = [
	{
		label: '中',
		key: 'hk'
	},
	{
		label: 'EN',
		key: 'en'
	}
]