import {usermodel} from "$lib/usermodal";
import cookie from "cookie";

export const post = async (event) => {
	const _body = await event.request.json()
	const access_token = _body.access_token
	let _headers = {}
	if (access_token && access_token !== 'null') {
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