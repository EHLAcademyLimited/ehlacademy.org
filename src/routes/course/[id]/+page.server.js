export const load = async ({ fetch, params }) => {
	const res = await fetch(`/api/firebase/courses/${params.id}`);
	const course = await res.json();

	return {
		course: course.attributes
	};
}