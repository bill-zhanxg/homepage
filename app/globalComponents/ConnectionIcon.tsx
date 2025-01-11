import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';

export default function ConnectionIcon({ Icon, url }: { Icon: IconType; url: string }) {
	return (
		<Link href={url} target="_blank">
			<motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
				<Icon size={25} className="cursor-pointer hover:text-primary duration-300" />
			</motion.div>
		</Link>
	);
}
