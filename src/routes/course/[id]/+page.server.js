import strapiHttp from "$lib/strapi-http";

export const load = async ({fetch, params}) => {
	console.log('/one-one-one/[id] +page.js')
	const {
		data: {
			attributes: course
		}
	} = await strapiHttp.get(fetch, `/courses/${params.id}`, {
		populate: 'image'
	})
	return {
		course
	}
}