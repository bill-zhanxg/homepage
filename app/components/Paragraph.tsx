import { motion } from 'motion/react';

export default function Paragraph({ children, setIsAnimating }: { children: React.ReactNode, setIsAnimating?: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<motion.div
			variants={{
				hidden: { x: 50, opacity: 0, filter: 'blur(10px)' },
				show: {
					x: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: { duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 100, damping: 20, mass: 1 },
				},
			}}
			onAnimationComplete={() => setIsAnimating && setIsAnimating(false)}
			className="flex flex-col sm:flex-row items-center justify-center"
		>
			{children}
		</motion.div>
	);
}
