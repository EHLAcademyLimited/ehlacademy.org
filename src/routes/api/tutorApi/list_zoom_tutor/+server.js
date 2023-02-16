import {usermodel} from "$lib/usermodal";

export const get = async (event) => {
	return await usermodel(event, null)
}