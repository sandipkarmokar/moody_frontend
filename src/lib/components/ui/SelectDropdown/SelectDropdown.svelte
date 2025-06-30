<script lang="js">
	export let options;
	export let value = '';

	let className = '';
	export { className as class };
</script>

<form class={`mx-auto w-full max-w-md space-y-4${className}`}>
	<select class="select" bind:value>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</form>
