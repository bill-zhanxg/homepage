import { motion } from 'motion/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

export default function ConnectionIcon({ Icon, url, ariaLabel }: { Icon: IconType; url: string; ariaLabel: string }) {
	return (
		<Link href={url} target="_blank" aria-label={ariaLabel}>
			<motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
				<Icon size={25} className="cursor-pointer hover:text-primary duration-300" />
			</motion.div>
		</Link>
	);
}
