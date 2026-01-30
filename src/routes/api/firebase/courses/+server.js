import { firebaseHttp } from "$lib/firebase-http.js";

export const GET = async (event) => {
    return firebaseHttp(event);
};
