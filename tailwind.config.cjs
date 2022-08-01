const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{html,js,svelte}"],
	theme: {
		fontSize: {
			'xxs': ['0.6rem'],
			'xs': ['0.75rem'],
			'sm': ['0.875rem'],
			DEFAULT: ['1rem'],
			'p2': ['1.125rem'],
			'p3': ['1.375rem'],
			'p4': ['1.625rem'],
			't1': ['1.875rem', {lineHeight: '1.1'}],
			't2': ['2.5rem', {lineHeight: '1.1'}],
			't3': ['3.125rem', {lineHeight: '1'}],
			'h1': ['3.75rem', {lineHeight: '1'}],
			'h2': ['5rem', {lineHeight: '1'}],
			'h3': ['5.625rem', {lineHeight: '1'}]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: {
				'50': '#FCFCFC',
				'100': '#FAFAFA',
				'200': '#F2F2F2',
				'300': '#DDDDDD',
				'400': '#7B818E',
				'500': '#616161',
				'700': '#424242',
				'800': '#000000'
			},
			red:  {
				'500': '#FF6A3A',
				'700': '#E04A40'
			},
			blue: {
				'100': '#eefbff',
				'500': '#3ADCFF',
				'600': '#67CDEB',
				'700': '#1BC6CF',
				'800': '#1794b9'
			},
			yellow: {
				'100': '#FFFACE',
				'400': '#FFEE54',
				'500': '#FFE500',
				'700': '#DBB800',
				'900': '#9e8e00'
			},
			brown: {
				'50': '#FFFAF5',
				'100': '#F2E9E1',
				'100a': '#ffe9d3',
				'200': '#debc9a',
				'200a': '#DFA672',
				'400': '#977250',
				'400a': '#C26610',
				'500': '#624122',
				'700': '#462F18'
			},
			green: {
				'100': '#f0ffea',
				'300': '#AAC6A0',
				'400h': '#86B974',
				'500': '#55BA92',
				'800': '#0c7d51',
				'900': '#214a3a'
			},
			lemon: {
				'300': '#D6D294'
			},
			wine: {
				'500': '#742626'
			},
			purple: {
				'400': '#CA75F5',
				'500': '#8D53E3'
			}
		},
		borderRadius: {
			none: '0px',
			sm: '0.25rem',
			DEFAULT: '0.5rem',
			lg: '1rem',
			xl: '2rem',
			xxl: '3rem',
			xxxl: '4rem',
			full: '9999px',
		},
		extend: {
			colors: {
				'regal-blue': {
					'100': '#ECF3FF',
					'200': '#a2b0ca',
					'500': '#1E3E78',
					'400h': '#3D5EA9',
					'300h': '#6384ce'
				},
				'regal-red': {
					'100': '#F4E3E5',
					'500': '#9F545D'
				}
			},
			height: {
				'120': '30rem',
				'140': '35rem',
				'160': '40rem',
				'180': '45rem'
			},
			maxWidth: {
				none: 'none',
				xs: '10rem',
				sm: '14rem',
				md: '18rem',
				lg: '22rem',
				xl: '26rem'
			}
		}
	},
	plugins: []
}