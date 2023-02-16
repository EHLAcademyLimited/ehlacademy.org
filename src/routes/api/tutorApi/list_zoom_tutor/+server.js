import {usermodel} from "$lib/usermodal";

export const GET = async (event) => {
	return usermodel(event, null, 0)
}