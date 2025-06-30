export const ENERGY_LEVELS_OPTIONS = [
	{
		value: 0,
		label: 'Exhausted',
		emoji: '💀',
		color: 'bg-energy-0', // #D4E6F1
		description: 'Completely drained, need rest',
		intensity: 'None'
	},
	{
		value: 20,
		label: 'Very Low',
		emoji: '🪫',
		color: 'bg-energy-20', // #B5EAD7
		description: 'Barely functioning, sluggish',
		intensity: 'Minimal'
	},
	{
		value: 40,
		label: 'Low',
		emoji: '🌙',
		color: 'bg-energy-40', // #FFF9D0
		description: 'Tired but can manage basics',
		intensity: 'Low'
	},
	{
		value: 60,
		label: 'Moderate',
		emoji: '🌤️',
		color: 'bg-energy-60', // #FFD3B6
		description: 'Normal, steady energy',
		intensity: 'Balanced'
	},
	{
		value: 80,
		label: 'High',
		emoji: '⚡',
		color: 'bg-energy-80', // #FF8C82
		description: 'Energetic and motivated',
		intensity: 'Elevated'
	},
	{
		value: 100,
		label: 'Maximum',
		emoji: '🔥',
		color: 'bg-energy-100', // #FF6B6B
		description: 'Hyper-energized, unstoppable',
		intensity: 'Peak'
	}
];
