import { db } from "$lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const load = async () => {
	const q = query(
		collection(db, "1-on-1-courses"),
		orderBy("attributes.ordering", "asc")
	);
	const querySnapshot = await getDocs(q);

	const courses = querySnapshot.docs.map(doc => {
		const data = doc.data();
		// Map Firebase flat structure back to Strapi-like structure expected by the Svelte component
		// The Firestore docs for 1-on-1-courses seem to have an 'attributes' field nesting the actual data
		return {
			id: doc.id,
			attributes: data.attributes
		};
	});

	console.log(123, courses)
	return {
		courses
	}
}