
import {usermodel} from '$lib/usermodal'

export const GET = async (event) => {
	return usermodel(event, {
		tutor_id: event.url.searchParams.get('tutor_id')
	})
}