export const load = async ({ fetch }) => {
	const res = await fetch('/api/firebase/courses');
	const courses = await res.json();
	console.log("res", res, courses)

	return {
		courses
	}
}