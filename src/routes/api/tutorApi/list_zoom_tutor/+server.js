throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import {usermodel} from "$lib/usermodal";

export const get = async (event) => {
	return await usermodel(event, null)
}