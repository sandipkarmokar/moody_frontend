<script lang="js">
	export let onClick = () => {};
	export let type = 'button';
	export let disabled = false;
	export let label = 'Enter';

	let className = 'bg-primary-500 text-white  px-4 py-2 hover:bg-primary-600';
	export { className as class };
</script>

<button
	{type}
	{disabled}
	class={` rounded font-semibold transition ${className}`}
	on:click={onClick}
>
	<slot />
</button>
