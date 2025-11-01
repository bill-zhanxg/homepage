import { motion } from 'motion/react';
export default function Description({ children }: { children: React.ReactNode }) {
	return (
		<motion.p
			variants={{
				hidden: { x: -50, opacity: 0, filter: 'blur(10px)' },
				show: {
					x: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: { duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 100, damping: 20, mass: 1 },
				},
			}}
		>
			{children}
		</motion.p>
	);
}
