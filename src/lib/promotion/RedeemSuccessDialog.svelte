<script>
	import {getContext} from 'svelte'
	const {openModal, closeModal} = getContext('simple-modal')
</script>

<div class="p-4 text-center">
	<p class="text-3xl mb-4">成功</p>
	<p>已延長至7天，學生請登入學生帳號進行學習</p>
</div>

<button on:click={closeModal} class="button w-full">確定</button>