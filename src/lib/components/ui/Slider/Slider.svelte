<script lang="ts">
	import { Slider } from '@skeletonlabs/skeleton-svelte';

	export let step = 20;
	export let value = [40];
</script>

<Slider name="example" {value} onValueChange={(e) => (value = e.value)} {step} />
