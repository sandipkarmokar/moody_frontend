<script lang="js">
	import { Button } from '$lib/components/ui/Button';
	import { SelectDropdown } from '$lib/components/ui/SelectDropdown';

	let options = [
		{ value: 'happy', label: 'happy' },
		{ value: 'anxious', label: 'anxious' },
		{ value: 'sad', label: 'sad' },
		{ value: 'low', label: 'low' }
	];
	let selectedValue;
	$: console.log(selectedValue);
</script>

<section>
	<Button>This is barca</Button>
	<SelectDropdown {options} bind:value={selectedValue} />
	<p>{selectedValue}</p>
</section>
