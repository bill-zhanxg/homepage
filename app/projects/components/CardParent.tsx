'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function CardParent({ children }: { children: React.ReactNode }) {
	const [isAnimating, setIsAnimating] = useState(true);

	return (
		<motion.div
			variants={{
				show: {
					transition: {
						staggerChildren: 0.1,
						delayChildren: 0.1,
					},
				},
			}}
			onAnimationComplete={() => setIsAnimating(false)}
			initial="hidden"
			animate="show"
			className={'card-grid-template pt-6 grid justify-items-center gap-6' + (isAnimating ? ' overflow-x-hidden' : '')}
		>
			{children}
		</motion.div>
	);
}
