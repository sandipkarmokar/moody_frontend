<script lang="ts">
	import { SelectDropdown } from '../ui/SelectDropdown';
	import { Slider } from '../ui/Slider';
	import { Button } from '../ui/Button';

	import { MOOD_OPTIONS } from '$lib/data/moodOptions';
	import { ENERGY_LEVELS_OPTIONS } from '$lib/data/energyLevelOptions';

	let selectedMood;
	let selectedEnergyLevel;
</script>

<section class="bg-lavender-dark h-full w-full gap-y-6 rounded-xl p-8 shadow-xl">
	<div class="flex flex-col gap-y-4">
		<p class="text-2xl font-bold">How are you feeling now?</p>
		<SelectDropdown bind:value={selectedMood} class="mt-2 h-12" options={MOOD_OPTIONS}
		></SelectDropdown>
	</div>
	<div class="mt-6 flex flex-col gap-y-4">
		<p class="text-2xl font-bold">What's your current energy level?</p>
		<div class="flex flex-col items-center justify-center">
			<div class="w-[90%]">
				<Slider bind:value={selectedEnergyLevel} />
			</div>
			<div class="mt-4 flex w-full justify-between">
				{#each ENERGY_LEVELS_OPTIONS as option}
					<div class="flex w-1/6 flex-col items-center">
						<p>{option.value}</p>
						<p>{option.emoji}</p>
						<p class="rotate-325">{option.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="mt-12">
		<Button
			type="submit"
			class="bg-coral hover:bg-coral-dark text-md rounded-xl px-4 py-3 font-medium"
			>Submit!!!</Button
		>
	</div>
</section>
