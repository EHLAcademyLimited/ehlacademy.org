import StrapiHttp from "$lib/strapi-http";
export const load = async ({fetch}) => {
	const {data : courses} = await StrapiHttp.get(fetch, '/courses', {
		populate: 'image',
		sort: ['ordering:asc', 'title_en:asc']
	})
	return {
		courses
	}
}