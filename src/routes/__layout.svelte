<script>
	import '../styles/tailwind-output.css';
	import Modal from '$lib/app-shelf/Modal.svelte';
	import Toast from "$lib/app-shelf/Toast.svelte";
</script>
<Toast>
	<Modal>
		<slot></slot>
	</Modal>
</Toast>