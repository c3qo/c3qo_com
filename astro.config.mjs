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
						{  label: 'Flutter: From Getx to Riverpod/GoRouter/Others', link: '/3-migrate-from-getx-to-riverpod-go-router-others' },
						{  label: 'Flutter: From Getx to Riverpod/GoRouter/Others(2)', link: '/4-migrate-from-getx-to-riverpod-go-router-others-2' },
						{  label: 'AWS: AWS Lambda in ipv6 VPC using CDK', link: '/5-aws-lambda-on-ipv6-without-nat' },
						{  label: 'Flutter: Customize the "Upgrader" for app updates', link: '/6-customize-upgrader-app-update-flutter' },
					],
				},
			],
			customCss: ['./src/tailwind.css', './src/styles/custom.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
