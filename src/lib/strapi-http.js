const VITE_STRAPI_API_BASE = import.meta.env.VITE_STRAPI_API_BASE
const VITE_STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN
import qs from "qs"
import {locale} from "svelte-i18n";
import {get} from "svelte/store";
const locale_mapper = {
	hk: 'zh-Hant-HK',
	cn: 'zh-Hans-CN',
	en: 'en'
}

const onRes = async (res) => {
	return await res.json()
}

const getQueryUrl = (resource, query) => {
	return `${resource}?${qs.stringify(query, {
		encodeValuesOnly: true, // prettify URL
	})}`
}

const strapiHttp = (() => {
	async function get (fetch, resource, query) {
		resource = getQueryUrl(resource, query)
		const res = await fetch(`${VITE_STRAPI_API_BASE}/api` + resource, {
			headers: {
				'Authorization': `bearer ${VITE_STRAPI_TOKEN}`
			}
		})
		return onRes(res)
	}

	// an empty object is necessary, otherwise result fatal error when not passing body params
	async function post (fetch, resource, body = {}, config = {}) {
		const res = await fetch(`${VITE_STRAPI_API_BASE}/api` + resource, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `bearer ${VITE_STRAPI_TOKEN}`
			},
			body: body && JSON.stringify(body)
		})
		return onRes(res)
	}

	return {
		get,
		post
	}
})()

export default strapiHttp