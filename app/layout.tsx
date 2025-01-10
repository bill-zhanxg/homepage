import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import Dog from '../images/dog.jpg';
import BarOfProgress from './components/BarOfProgress';

import { Layout } from './components/Layout';
import './globals.css';

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
		<html lang="en">
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
