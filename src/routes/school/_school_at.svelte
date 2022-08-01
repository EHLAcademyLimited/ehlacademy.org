<script>
	import Icon from '$lib/ui/Icon.svelte'
	import {t} from 'svelte-i18n'
	const features = [
		{
			title: 'hkat.listen_read',
			items: [
				{
					title: 'hkat.listen_read_1',
					desc: ''
				},
				{
					title: 'hkat.listen_read_2',
					desc: 'hkat.listen_read_2_desc'
				}
			]
		},
		{
			title: 'hkat.write',
			items: [
				{
					title: 'hkat.write_1',
					desc: 'hkat.write_1_desc'
				},
				{
					title: 'hkat.write_2',
					desc: 'hkat.write_2_desc'
				}
			]
		},
		{
			title: '',
			items: [
				{
					title: 'hkat.oxford',
					desc: 'hkat.oxford_desc'
				},
				{
					title: 'hkat.report',
					desc: 'hkat.report_desc'
				}
			]
		}
	]
</script>

<div class="bg-brown-100">
	<div class="max-w-screen-lg px-4 md:px-8 py-8 md:py-16 mx-auto">
		<div class="md:text-center mb-4 md:mb-8">
			<h1 class="text-t3 md:text-h1 text-brown-400a font-bold leading-none">HKAT / Mock Test Service</h1>
			<div class="text-p2 sm:text-t1 leading-none text-brown-400a mb-2 -mt-1 sm:-mt-1 font-bold">HK Attainment Test</div>
			<p class="text-t1 md:text-t2 text-brown-500">{$t('hkat.title')}</p>
			<div class="my-6 md:my-10 text-p3 md:text-t1 font-bold text-brown-400a">
				<p>{$t('hkat.slogan')}</p>
				<p class="mt-2 text-black">{$t('hkat.slogan2')}</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each features as f}
				<div class="bg-white rounded p-4 pb-2 md:p-6 md:pb-6">
					<p class="h-auto md:h-8 text-p3 font-bold inline-block border-b border-current mb-4 text-brown-400a">{$t(f.title)}</p>
					{#each f.items as item}
						<div class="flex text-brown-700 mb-4">
							<div class="w-8 h-8 cc flex-shrink-0 -ml-4">
								<Icon name="tick" className="text-red-500 w-4"/>
							</div>
							<div>
								<p class="text-p2 md:text-p3 font-bold">{$t(item.title)}</p>
								{#if item.desc}
									<p class="text md:text-p2">{$t(item.desc)}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<div class="md:flex md:justify-center mt-4 md:mt-8">
			<a href="/organisation/school#contact" class="text-center w-full md:w-auto inline-block font-bold text md:text-p2 bg-white rounded px-12 py-4 text-brown-400a hover:text-white hover:bg-brown-400a">{$t('contact_us_for_enquiry')}</a>
		</div>
	</div>
</div>