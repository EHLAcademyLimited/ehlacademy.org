import {variables} from "$lib/env";
console.log(variables)
const base = variables.api_base + '/v1'

export async function usermodel (event, data, maxage = 300, _method) {
	try {
		const region = (event.url.hostname === "cn.ehla-class.com") || variables.force_cn === "1" ? 'cn' : 'hk'
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
				'Content-Type': 'application/json',
				"Region": region
			},
			body: data && JSON.stringify(data)
		})
		const headers = {}
		if (method === 'GET' && res.status === 200) {
			const public_private = access_token ? 'private' : 'public'
			headers['cache-control'] = `${public_private}, max-age=${maxage}`
		} else {
			headers['cache-control'] = 'public, max-age=0, must-revalidate'
		}
		return {
			headers,
			status: res.status,
			body: await res.json()
		}
	} catch (e) {
		return {
			status: 500,
			body: e.toString()
		}
	}
}