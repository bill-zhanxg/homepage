import ProgressBar from '@badrap/bar-of-progress';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { FaBars, FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import ConnectionIcon from '../components/ConnectionIcon';
import NavBarItem from '../components/main/NavBarItem';
import Dog from '../images/dog.jpg';
import '../styles/globals.css';

const progressBar = new ProgressBar({
	size: 5,
	color: '#3ABFF8',
});

Router.events.on('routeChangeStart', progressBar.start);
Router.events.on('routeChangeComplete', progressBar.finish);
Router.events.on('routeChangeError', progressBar.finish);

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	const navBar = useRef<HTMLInputElement>(null);
	const pageContent = useRef<HTMLDivElement>(null);
	const { pathname } = useRouter();

	useEffect(() => {
		setTimeout(() => {
			if (pageContent.current) pageContent.current.scrollTo(0, 0);
		}, 500);
	}, [pathname]);

	function hideNavBar() {
		if (navBar.current) navBar.current.checked = false;
	}

	const openGraph = {
		title: 'Homepage - Bill.IHCha',
		description:
			'Full stack developer, Discord bot developer, App developer, Minecraft Plugin & Mod developer, Game developer, Server developer. I am known online as Bill.IHCha, Bill.zhanxg, Bill-zhanxg. People usually just call me Bill.',
		url: 'https://bill-zhanxg.com/',
		domain: 'bill-zhanxg.com',
	};

	return (
		<>
			<Head>
				{/* HTML Meta Tags */}
				<title>{openGraph.title}</title>
				<meta name="title" content={openGraph.title} />
				<meta name="description" content={openGraph.description} />

				{/* Facebook Meta Tags */}
				<meta property="og:url" content={openGraph.url} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={openGraph.title} />
				<meta property="og:description" content={openGraph.description} />
				<meta property="og:image" content={Dog.src} />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={openGraph.domain} />
				<meta property="twitter:url" content={openGraph.url} />
				<meta name="twitter:title" content={openGraph.title} />
				<meta name="twitter:description" content={openGraph.description} />
				<meta name="twitter:image" content={Dog.src} />
			</Head>
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }}>
				<div className="drawer drawer-mobile">
					<input id="nav-side-bar" ref={navBar} type="checkbox" className="drawer-toggle" />
					<div ref={pageContent} className="drawer-content">
						<label
							htmlFor="nav-side-bar"
							className="btn rounded-none rounded-br-lg drawer-button hover:text-primary fixed lg:hidden z-50"
						>
							<FaBars />
						</label>
						<AnimatePresence mode="wait">
							<Component {...pageProps} key={router.pathname} />
						</AnimatePresence>
					</div>
					<div className="drawer-side">
						<label htmlFor="nav-side-bar" className="drawer-overlay"></label>
						<motion.ul
							variants={{
								show: {
									transition: {
										staggerChildren: 0.2,
										delayChildren: 0.3,
									},
								},
							}}
							initial="hidden"
							animate="show"
							className="menu p-2 w-64 bg-base-300 text-base-content"
						>
							<motion.div className="py-4 flex items-center gap-4">
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="avatar"
								>
									<div className="w-24 rounded-full">
										<Image priority src={Dog} alt="Dog" width={1000} height={1000} />
									</div>
								</motion.div>
								<motion.div
									variants={{
										show: {
											transition: {
												staggerChildren: 0.2,
												delayChildren: 0.8,
											},
										},
									}}
									initial="hidden"
									animate="show"
								>
									<motion.h1
										variants={{
											hidden: { x: 30, filter: 'blur(5px)', opacity: 0 },
											show: { x: 0, filter: 'blur(0px)', opacity: 1, transition: { duration: 0.4 } },
										}}
										className="font-bold text-2xl"
									>
										Bill.IHCha
									</motion.h1>
									<div className="flex justify-between">
										<ConnectionIcon IconType={FaGithub} url="https://github.com/bill-zhanxg" />
										<ConnectionIcon IconType={FaYoutube} url="https://www.youtube.com/@bill.zhanxg" />
										<ConnectionIcon IconType={FaDiscord} url="https://discord.gg/Xx8EaRzC33" />
										<ConnectionIcon IconType={GrMail} url="mailto:contact@mail.bill-zhanxg.com" />
									</div>
								</motion.div>
							</motion.div>
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/" text="Home" />
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/projects" text="My Projects" />
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/others" text="Cool Stuffs" />
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/discord" text="Discord" />
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/donation" text="Donation" />
							<NavBarItem hideNavBar={hideNavBar} router={router} url="/subscription" text="Subscription" />
						</motion.ul>
					</div>
				</div>
			</motion.div>
		</>
	);
}
