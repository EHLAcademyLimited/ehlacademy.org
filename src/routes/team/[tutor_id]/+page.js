import {http} from "$lib/http";

export const load = async ({fetch, params}) => {
	const res = await http.get(fetch, '/tutorApi/zoom_tutor_by_id', {
		tutor_id: params.tutor_id
	})

	return {
		tutor: res.data,
		videos: res.data.videos
	}
}
