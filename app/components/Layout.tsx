'use client';
import Dog from '@/images/dog.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { FaBars, FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import ConnectionIcon from '../globalComponents/ConnectionIcon';
import NavBarItem from './NavBarItem';

export function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const navBar = useRef<HTMLInputElement>(null);
	const pageContent = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			if (pageContent.current) pageContent.current.scrollTo(0, 0);
		}, 500);
	}, [pathname]);

	const hideNavBar = useCallback(() => {
		if (navBar.current) navBar.current.checked = false;
	}, []);

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
						<motion.div className="py-4 flex items-center justify-center gap-4">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.5 }}
								className="avatar"
							>
								<div className="w-20 rounded-full">
									<Image priority src={Dog} alt="Dog" width={107} height={107} />
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
									<ConnectionIcon Icon={FaGithub} url="https://github.com/bill-zhanxg" ariaLabel="GitHub" />
									<ConnectionIcon Icon={FaYoutube} url="https://www.youtube.com/@bill.zhanxg" ariaLabel="YouTube" />
									<ConnectionIcon Icon={FaDiscord} url="https://discord.gg/Xx8EaRzC33" ariaLabel="Discord" />
									<ConnectionIcon Icon={GrMail} url="mailto:contact@mail.bill-zhanxg.com" ariaLabel="Email" />
								</div>
							</motion.div>
						</motion.div>
						<NavBarItem hideNavBar={hideNavBar} url="/" text="Home" />
						<NavBarItem hideNavBar={hideNavBar} url="/contact" text="Contact" />
						<NavBarItem hideNavBar={hideNavBar} url="/projects" text="My Projects" />
						<NavBarItem hideNavBar={hideNavBar} url="/cool" text="Cool Stuff" />
						<NavBarItem hideNavBar={hideNavBar} url="/discord" text="Discord" />
						<NavBarItem hideNavBar={hideNavBar} url="/donation" text="Donation" />
						<NavBarItem hideNavBar={hideNavBar} url="/subscription" text="Subscription" />
						<NavBarItem hideNavBar={hideNavBar} url="https://blog.bill-zhanxg.com" text="Blog" newTab />
						<NavBarItem
							hideNavBar={hideNavBar}
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
