import {usermodel} from "$lib/usermodal";

export const post = async (event) => {
	return await usermodel(event)
}