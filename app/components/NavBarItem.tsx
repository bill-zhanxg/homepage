import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBarItem({
	hideNavBar,
	url,
	text,
	newTab = false,
}: {
	hideNavBar: () => void;
	url: string;
	text: string;
	newTab?: boolean;
}) {
	const pathname = usePathname();

	return (
		<motion.li
			variants={{
				hidden: { opacity: 0, y: -10 },
				show: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.1 } },
			}}
			onClick={hideNavBar}
		>
			{pathname === url ? (
				<motion.div layoutId="nav-bar" className="w-full h-full absolute bg-primary rounded-lg" />
			) : null}
			<Link className="z-0 gap-0 text-lg inline" href={url} target={newTab ? '_blank' : undefined}>
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
