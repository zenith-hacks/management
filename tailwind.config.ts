import { join } from 'path';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Instrument Sans Variable', ...fontFamily.sans],
				grotesk: ['Space Grotesk Variable', 'lArial', ...fontFamily.sans]
			}
		}
	},
	plugins: [
		skeleton({
			themes: { preset: ['crimson'] }
		})
	]
} satisfies Config;

export default config;
