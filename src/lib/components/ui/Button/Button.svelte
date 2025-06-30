<script lang="js">
	export let onClick = () => {};
	export let type = 'button';
	export let disabled = false;
	export let label = 'Enter';

	let className = '';
	export { className as class };
</script>

<button
	{type}
	{disabled}
	class={`bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 font-semibold text-white transition ${className}`}
	on:click={onClick}
>
	<slot />
</button>
