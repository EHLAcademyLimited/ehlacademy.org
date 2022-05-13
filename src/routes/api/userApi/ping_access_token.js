import {usermodel} from "$lib/usermodal";
import cookie from "cookie";

export const get = async (event) => {
	const access_token = event.url.searchParams.get('access_token')
	let _headers = {}
	if (access_token !== 'null') {
		event.locals.access_token = access_token
		_headers['set-cookie'] = cookie.serialize('access_token', access_token, {
			path: '/',
			httpOnly: true
		});
	}
	const {headers, status, body} = await usermodel(event)
	return {
		headers: {
			...headers,
			..._headers
		},
		status,
		body
	}
}