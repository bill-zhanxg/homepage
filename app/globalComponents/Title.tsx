import { motion } from 'motion/react';

export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<motion.h1
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			className="text-3xl"
		>
			{children}
		</motion.h1>
	);
}
