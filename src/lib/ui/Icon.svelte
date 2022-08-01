<script>
	export let name
	export let className = 'w-6'
</script>

{#if name === 'video'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36.004" class="fill-current {className}"><path d="M12.285 9.46v17.316L27.28 18.12"></path><path d="M18-.002C8.075-.002 0 8.074 0 18c0 9.927 8.075 18.002 18 18.002 9.926 0 18-8.075 18-18.002C36 8.074 27.926-.002 18-.002zm0 34.106C9.12 34.104 1.897 26.88 1.897 18 1.897 9.12 9.12 1.896 18 1.896c8.88 0 16.102 7.225 16.102 16.104 0 8.88-7.223 16.104-16.102 16.104z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
{:else if name === 'right2'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M24.48 17.998l-16.3-16.3L9.82 0l18 17.998L9.82 36l-1.64-1.7"></path></svg>
{:else if name === 'right'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M8.444 3.086l12.877 14.91L8.445 32.922 12.014 36l15.542-18.004L12.016 0"></path></svg>
{:else if name === 'right3'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M19.053 1.053L16.116 3.99l11.938 11.938H0v4.15h28.054L16.116 32.016l2.937 2.93L36 18.003"></path></svg>
{:else if name === 'close'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M36 2.778L33.223 0 18 15.224 2.777 0 0 2.778l15.223 15.224L0 33.225 2.777 36 18 20.777 33.223 36 36 33.225 20.778 18.002" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
{:else if name === 'tick'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M26.382 18L36 8.382l-3.606-3.607-19.17 19.17-9.62-9.62L0 17.936l9.618 9.616-.067.07 3.607 3.605 9.618-9.62"></path></svg>
{:else if name === 'search'}
	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" class="fill-current {className}"><path d="M22.424 0C14.926 0 8.848 6.078 8.848 13.576c0 2.568.713 4.97 1.952 7.017L.955 30.438c-1.273 1.273-1.273 3.334 0 4.607 1.27 1.273 3.335 1.273 4.607 0l9.802-9.803c2.09 1.197 4.492 1.91 7.06 1.91 7.5 0 13.576-6.078 13.576-13.576S29.923 0 22.424 0zm0 22.808c-5.1 0-9.23-4.133-9.23-9.232s4.132-9.232 9.23-9.232 9.232 4.133 9.232 9.232-4.134 9.232-9.232 9.232z"></path></svg>
{/if}