import { db } from "$lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const load = async ({ params }) => {
	const docRef = doc(db, "1-on-1-courses", params.id);
	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) {
		return {
			status: 404,
			error: new Error('Course not found')
		}
	}

	const data = docSnap.data();

	return {
		course: data.attributes
	}
}