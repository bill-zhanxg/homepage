import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BarOfProgress from './components/BarOdProgress';
import './globals.css';
import { Main } from './main';

const inter = Inter({ subsets: ['latin'] });

const openGraph = {
	title: 'Homepage - Bill.IHCha',
	description:
		'Full stack developer, Discord bot developer, App developer, Minecraft Plugin & Mod developer, Game developer, Server developer. I am known online as Bill.IHCha, Bill.zhanxg, Bill-zhanxg. People usually just call me Bill.',
};

export const metadata: Metadata = {
	title: openGraph.title,
	description: openGraph.description,
	keywords: ['Bill', 'Bill Zhang', 'Bill.IHCha', 'Bill-zhanxg', 'Bill.zhanxg'],
	authors: { name: 'Bill Zhang' },
	creator: 'Bill Zhang',
	openGraph: {
		title: openGraph.title,
		description: openGraph.description,
		url: '/',
		siteName: 'Bill.IHCha',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: openGraph.title,
		description: openGraph.description,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Main>{children}</Main>
				<Analytics />
				<SpeedInsights />
				<BarOfProgress />
			</body>
		</html>
	);
}
