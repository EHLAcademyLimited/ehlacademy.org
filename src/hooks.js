import cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.access_token = cookies.access_token;
	console.log(cookies.access_token)
	event.locals.selected_child_account_id = cookies.selected_child_account_id;
	if (cookies.user_info)
		event.locals.user_info = JSON.parse(cookies.user_info)
	const response = await resolve(event);
	// for initial HTML request, do not use cache, otherwise update cannot be made!
	if (!event.url.href.includes('/api/') && !response.headers.has('cache-control')) {
		response.headers.set('cache-control', 'public, max-age=0, must-revalidate');
	}
	return response;
};

export const getSession = req => {
	let access_token = req.locals.access_token
	let user_info = req.locals.user_info
	let selected_child_account_id = req.locals.selected_child_account_id
	return access_token ? {
		access_token,
		user_info,
		selected_child_account_id
	}: {}
}
