<script lang="js">
	export let options;
	export let value = '';

	let className = '';
	export { className as class };
</script>

<form class={`mx-auto w-full space-y-4 ${className}`}>
	<select class="select bg-lavender-light custom-select w-full rounded-xl px-2 py-1" bind:value>
		<option class="px-4 py-2" value="" disabled selected>Select a mood...</option>
		{#each options as option}
			<option class="px-3 py-2" value={option.value}>{option.emoji} {option.label}</option>
		{/each}
	</select>
</form>

<style>
	.custom-select {
		box-shadow: none; /* Remove any default shadow */
		border: none; /* Remove border */
		outline: none; /* Remove focus outline */
	}

	.custom-select option {
		background-color: #f8f4ff; /* lavender-light color */
		color: #64748b; /* slate-600 for text */
		padding: 0.5rem;
		border: none; /* Remove option borders */
	}

	.custom-select option:hover {
		background-color: #e2d4f5; /* lavender-dark on hover */
	}
</style>
