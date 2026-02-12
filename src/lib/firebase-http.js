import { dev } from '$app/environment';
import { json } from "@sveltejs/kit";
import qs from 'qs';

const base_prod = 'https://us-central1-ehla-dse.cloudfunctions.net/api';
const base_dev = 'http://127.0.0.1:5001/ehla-dse/us-central1/api';
// Fallback to prod if you want to test against live data locally
const use_prod_locally = false;
const base = (dev && !use_prod_locally) ? base_dev : base_prod;

/**
 * Proxies a request to the Firebase backend.
 */
export async function firebaseHttp(event, data, maxage = 0, _method, _resource) {
    try {
        const method = _method || event.request.method;
        const resource = _resource || event.url.pathname.split('/api/firebase')[1];


        const outgoingHeaders = {};

        // Forward essential headers
        const requestCookieHeader = event.request.headers.get('cookie');
        if (requestCookieHeader) {
            outgoingHeaders['cookie'] = requestCookieHeader;
        }
        const authorizationHeader = event.request.headers.get('Authorization');
        if (authorizationHeader) {
            outgoingHeaders['Authorization'] = authorizationHeader;
        }

        let body;
        if (data instanceof FormData) {
            body = data;
        } else if (data && method !== 'GET') {
            outgoingHeaders['Content-Type'] = 'application/json';
            body = JSON.stringify(data);
        }

        let query = {};
        if (method === 'GET' && data) {
            query = { ...query, ...data };
            body = null;
        }

        const url = `${base}${resource}?${qs.stringify(query)}`;

        const res = await fetch(url, {
            method,
            headers: outgoingHeaders,
            body
        });

        const responseHeaders = new Headers(res.headers);

        // Strip illegal HTTP/1 headers for HTTP/2 safety
        const illegalHeaders = [
            'connection',
            'keep-alive',
            'proxy-connection',
            'transfer-encoding',
            'te',
            'upgrade'
        ];
        illegalHeaders.forEach(header => responseHeaders.delete(header));

        responseHeaders.set('cache-control', 'private, max-age=0, no-store, must-revalidate');

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return json(await res.json(), {
                headers: responseHeaders,
                status: res.status,
            });
        }

        return new Response(await res.text(), {
            headers: responseHeaders,
            status: res.status
        });

    } catch (e) {
        console.log('catch', e);
        return json({
            debug: e.toString()
        }, {
            status: 500
        });
    }
}
