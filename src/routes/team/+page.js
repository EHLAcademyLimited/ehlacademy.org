import {http} from "$lib/http";
export const load = async ({fetch}) => {
	const {success, data} = await http.get(fetch, '/tutorApi/list_zoom_tutor')
	let tutor_list = data.filter(t => {
		let name = t.display_name
		return name.indexOf('科') < 0
				&& name.indexOf('VIP') < 0
				&& name.indexOf('Writing') < 0
				&& name.indexOf('John') < 0
	})
	console.log(data)
	return {
		tutor_list
	}
}
