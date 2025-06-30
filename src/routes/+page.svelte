<script lang="js">
	import { Header } from '$lib/components/Header';
	import { Button } from '$lib/components/ui/Button';
	import { SelectDropdown } from '$lib/components/ui/SelectDropdown';
	import { Slider } from '$lib/components/ui/Slider';

	let options = [
		{ value: 'happy', label: 'happy' },
		{ value: 'anxious', label: 'anxious' },
		{ value: 'sad', label: 'sad' },
		{ value: 'low', label: 'low' }
	];
	let selectedValue;
	let sliderValue;
	$: console.log(selectedValue);
</script>

<section class="bg-lavender-light flex h-screen w-full justify-center">
	<div class="w-[1100px]">
		<Header></Header>
		<Button>This is barca</Button>
		<SelectDropdown {options} bind:value={selectedValue} />
		<p>{selectedValue}</p>
		<Slider bind:value={sliderValue} step={20} />
		<p>Current value: {sliderValue[0]}</p>
	</div>
</section>
