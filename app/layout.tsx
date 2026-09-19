import './globals.css';

import { Sen } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Dog from '../images/dog.jpg';
import BarOfProgress from './components/BarOfProgress';
import { Layout } from './components/Layout';

import type { Metadata, Viewport } from 'next';
const sen = Sen({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-sen',
});

export const metadata: Metadata = {
	title: {
		absolute: 'Home | Bill.IHCha',
		template: '%s | Bill.IHCha',
		default: 'Bill.IHCha',
	},
	description:
		'Full stack developer, Discord bot developer, App developer, Minecraft Plugin & Mod developer, Game developer, Server developer. I am known online as Bill.IHCha, Bill.zhanxg, Bill-zhanxg. People usually just call me Bill.',
	metadataBase: new URL('https://bill-zhanxg.com'),
	openGraph: {
		url: '/',
		type: 'website',
		images: Dog.src,
	},
	twitter: {
		card: 'summary_large_image',
	},
};

export const viewport: Viewport = {
	themeColor: 'black',
	initialScale: 1.0,
	width: 'device-width',
	height: 'device-height',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={sen.variable}>
			<head>
				<script
					id="discord:component-embed"
					type="application/json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							component: {
								type: 17,
								accent_color: 10427897,
								spoiler: false,
								components: [
									{
										type: 9,
										components: [
											{
												type: 10,
												content:
													'# **Bill.IHCha**\nFull stack developer, Discord bot developer, App developer, Minecraft Plugin & Mod developer, Game developer, Server developer. I am known online as Bill.IHCha, Bill.zhanxg, Bill-zhanxg. People usually just call me Bill.',
											},
										],
										accessory: {
											type: 11,
											media: {
												url: metadata.metadataBase?.toString() + Dog.src,
											},
										},
									},
									{ type: 14 },
									{
										type: 1,
										components: [
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/',
												label: 'Home Page',
												emoji: { name: '🏠' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/contact',
												label: 'Contact',
												emoji: { name: '📬' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/projects',
												label: 'My Projects',
												emoji: { name: '🚀' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/cool',
												label: 'Cool Stuff',
												emoji: { name: '😎' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/discord',
												label: 'Discord',
												emoji: { name: '💬' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://bill-zhanxg.com/donation',
												label: 'Donation',
												emoji: { name: '☕' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://blog.bill-zhanxg.com/',
												label: 'Blog',
												emoji: { name: '✍️' },
											},
											{
												type: 2,
												style: 5,
												url: 'https://stats.uptimerobot.com/2lnqqFKpD9',
												label: 'Website Status',
												emoji: { name: '🟢' },
											},
										],
									},
								],
							},
						}),
					}}
				/>
			</head>
			<body>
				<Layout>{children}</Layout>

				<BarOfProgress />

				{/* Vercel Analytics */}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
