import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons/lib/cjs/iconBase';

export default function ConnectionIcon({ IconType, url }: { IconType: IconType; url: string }) {
	return (
		<Link href={url} target="_blank">
			<motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
				<IconType size={25} className="cursor-pointer hover:text-primary duration-300" />
			</motion.div>
		</Link>
	);
}
