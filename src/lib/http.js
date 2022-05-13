// import {sentry} from "$lib/sentry";
import {is_loading, still_loading_notification} from "$lib/store/is_loading";
import {notifications} from "$lib/store/notification";
import {browser} from "$app/env";
import {goto} from "$app/navigation";

let is_caches_supported
try {
	if (caches) is_caches_supported = true
} catch (e) {
	is_caches_supported = false
}

const onRes = async (res, notification) => {
	try {
		let status = res.status
		if (status >= 500) {
			let error_msg = await res.text()
			if (error_msg.startsWith('<!')) {
				throw 'Internal server error'
			} else {
				throw error_msg
			}
		}
		const {success, data, metadata, debug} = await res.json()
		if (!success && debug && debug.err_code === 401 && browser && !['/login', '/logout'].includes(window.location.pathname)) {
			// window.location.replace("/logout")
			notifications.alert('you are not authorized')
		}
		const actually_not_success = data ? data.status === 'failure' : false
		is_loading.set(false)
		if (!success || actually_not_success) {
			const message = actually_not_success ? data.debug_msg : debug && debug.debug_msg
			notifications.alert('Oops...' + message)
		} else {
			if (!!notification) notifications.success(notification)
		}
		return {success, data, metadata, debug, status}
	} catch (e) {
		is_loading.set(false)
		const debug_msg = `${res.url} ${e}`
		notifications.alert(debug_msg)
		// sentry.log(e)
		return {
			success: false,
			status: 500,
			debug: {
				debug_msg
			}
		}
	}
}

const getQueryUrl = (resource, query) => {
	if (query) {
		for (const property in query) {
			let char = resource.includes('?') ? '&' : '?'
			resource += `${char}${property}=${query[property]}`
		}
	}
	return resource
}

// handle 到 usermodel 500, 或者自己 500
const http = (() => {
	async function cacheThenNetwork (resource, query, onCache, onNetwork) {
		try {
			let cache_data_response
			let still_loading_timer_id
			resource = '/api' + getQueryUrl(resource, query)
			const networkPromise = fetch(resource)
			still_loading_timer_id = setTimeout(() => {
				still_loading_notification.set(true)
			}, 5000) // if more than 5 second, show "still loading" notification
			if (is_caches_supported) {
				const cachedResponse = await caches.match(resource)
				if (cachedResponse && cachedResponse.ok) {
					const {data, success, debug} = await cachedResponse.json()
					cache_data_response = data
					onCache({data, success, debug})
					clearTimeout(still_loading_timer_id) // clear the pending notification as soon as cache return
				}
			}
			const networkResponse = await networkPromise
			clearTimeout(still_loading_timer_id) // clear the pending notification as soon as network return
			still_loading_notification.set(false) // clear still-loading notification (if it is showing) as we get response
			if (networkResponse.ok) {
				if (is_caches_supported) {
					await caches.delete(resource) // TODO put should be replacing old data
					const cache = await caches.open('my-web-app')
					cache.put(resource, networkResponse.clone())
				}
				const {data, success, debug} = await networkResponse.json()
				const is_updated = JSON.stringify(cache_data_response) !== JSON.stringify(data)
				onNetwork({data, success, debug, is_updated})
			} else {
				let error_msg = await networkResponse.text()
				let status = networkResponse.status
				if (status === 500) {
					if (error_msg.startsWith('<!')) {
						throw 'Internal Server Error'
					}	else { // if error message is found
						throw 'Internal Server Error :' + error_msg
					}
				} else if (status === 504) {
					throw 'Timeout'
				} else if (status === 404) {
					throw "API function not exist"
				} else if (status === 401) {
					goto('/login')
					throw "Your session has expired. Please login again"
				} else {
					throw `${status}`
				}
			}
		} catch (e) {
			still_loading_notification.set(false)
			notifications.alert(e)
			// sentry.log(`${resource} ${e}`)
		}
	}

	async function get (fetch, resource, query, config = {}) {
		const {notification} = config
		resource = getQueryUrl(resource, query)
		is_loading.set(true)
		const res = await fetch('/api' + resource)
		return onRes(res, notification)
	}

	// an empty object is necessary, otherwise result fatal error when not passing body params
	async function post (fetch, resource, body = {}, config = {}) {
		const {notification} = config
		is_loading.set(true)
		const res = await fetch('/api' + resource, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: body && JSON.stringify(body)
		})
		return onRes(res, notification)
	}

	return {
		get,
		post,
		cacheThenNetwork
	}
})()

const onFail = (debug, status) => {
	if ((debug.err_code) === 401) {
		return {
			status: 302,
			redirect: '/logout'
		}
	}
	return {
		error: debug && debug.debug_msg,
		status
	}
}

export {http, onFail}