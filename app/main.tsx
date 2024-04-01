'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { FaBars, FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Dog from '../images/dog.jpg';
import { ConnectionIcon } from './components/ConnectionIcon';
import { NavBarItem } from './components/NavBarItem';
import './globals.css';

export function Main({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const navBar = useRef<HTMLInputElement>(null);
	const pageContent = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		setTimeout(() => {
			if (pageContent.current) pageContent.current.scrollTo(0, 0);
		}, 500);
	}, [pathname]);

	function hideNavBar() {
		if (navBar.current) navBar.current.checked = false;
	}

	return (
		<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }}>
			<div className="drawer lg:drawer-open">
				<input id="nav-side-bar" ref={navBar} type="checkbox" className="drawer-toggle" />
				<div ref={pageContent} className="drawer-content">
					<label
						htmlFor="nav-side-bar"
						className="btn rounded-none rounded-br-lg drawer-button hover:text-primary fixed lg:hidden z-50"
					>
						<FaBars />
					</label>
					<AnimatePresence mode="wait">{children}</AnimatePresence>
				</div>
				<div className="drawer-side z-50">
					<label htmlFor="nav-side-bar" aria-label="close sidebar" className="drawer-overlay"></label>
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
						className="menu p-2 w-64 min-h-full bg-base-200 text-base-content"
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
						<NavBarItem
							hideNavBar={hideNavBar}
							router={router}
							url="https://stats.uptimerobot.com/2lnqqFKpD9"
							text="Website Status"
							newTab
						/>
					</motion.ul>
				</div>
			</div>
		</motion.div>
	);
}
