import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://c3qo.com',
	integrations: [
		sitemap(),
		starlight({
			title: 'c3qo - a cloud',
			social: {
				github: 'https://github.com/c3qo',
			},
			favicon: '/src/assets/c3qo.svg',
			components: {
				Footer: './src/overrides/Footer.astro',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Intro', link: '/1-getting-started' },
					],
				},
				{
					label: 'Inbox - Uncategorized',
					items: [
						{  label: 'Flutter: Pre-signed S3 Url with Firebase Auth', link: '/2-aws-s3-presigned-url-for-get-put' },
					],
				},
			],
			customCss: ['./src/tailwind.css', './src/styles/custom.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
