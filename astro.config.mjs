import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'c3qo - a cloud',
			social: {
				github: 'https://github.com/c3qo',
			},
			favicon: '/src/assets/c3qo.svg',
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'As a whole',
					autogenerate: { directory: 'whole' },
				},
				{
					label: 'Flutter',
					autogenerate: { directory: 'flutter' },
				},
				{
					label: 'AWS',
					autogenerate: { directory: 'aws' },
				},
			],
			customCss: ['./src/tailwind.css', './src/styles/custom.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
