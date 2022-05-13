import {variables} from "$lib/env";
const base = variables.api_base + '/v1'

export async function usermodel (event, data, maxage = 300, _method) {
	const method = _method || event.request.method
	const request = event.request
	const resource = request.url.split('/api')[1]
	const access_token = event.locals.access_token
	if (method === 'POST' && data) {
		data = { params: data }
	}
	let query = {
		'encode': 1,
		'access-token': access_token
	}
	if (method === 'GET' && data) {
		query = {...query, ...data}
		data = null
	}
	let url = `${base}${resource}`
	for (const property in query) {
		if (query[property]) {
			let char = url.includes('?') ? '&' : '?'
			url += `${char}${property}=${query[property]}`
		}
	}
	const res = await fetch(url, {
		method,
		headers: {
			'Authorization': 'Basic ZWhsX2FwaToyNzE1MDkwMA==',
			'Content-Type': 'application/json'
		},
		body: data && JSON.stringify(data)
	})

	const headers = {}
	if (method === 'GET') {
		// client private cache for 5min for GET request
		headers['cache-control'] = `private, max-age=${maxage}`
	}
	return {
		headers,
		status: res.status,
		body: await res.json()
	}
}