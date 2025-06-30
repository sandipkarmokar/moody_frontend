<script lang="js">
	export let onClick = () => {};
	export let type = 'button';
	export let disabled = false;
	export let label = 'Enter';

	let className = 'bg-primary-500 text-white  px-4 py-2';
	export { className as class };
</script>

<button
	{type}
	{disabled}
	class={`hover:bg-primary-600 rounded font-semibold transition ${className}`}
	on:click={onClick}
>
	<slot />
</button>
