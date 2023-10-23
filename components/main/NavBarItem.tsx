import { motion } from 'framer-motion';
import Link from 'next/link';
import { NextRouter } from 'next/router';

export default function NavBarItem({
	hideNavBar,
	router,
	url,
	text,
	newTab = false,
}: {
	hideNavBar: () => void;
	router: NextRouter;
	url: string;
	text: string;
	newTab?: boolean;
}) {
	return (
		<motion.li
			variants={{
				hidden: { opacity: 0, y: -10 },
				show: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.1 } },
			}}
			onClick={hideNavBar}
		>
			{router.pathname === url ? (
				<motion.div layoutId="nav-bar" className="w-full h-full absolute bg-primary rounded-lg" />
			) : null}
			<Link className="z-0 gap-0 inline" href={url} target={newTab ? '_blank' : undefined}>
				{text.split('').map((char, index) => (
					<motion.span
						key={index}
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: {
								opacity: 1,
								y: 0,
								transition: { type: 'spring' },
							},
						}}
					>
						{char === ' ' ? '\u00A0' : char}
					</motion.span>
				))}
			</Link>
		</motion.li>
	);
}
