'use client';
import { motion } from 'motion/react';
import { FaDesktop } from 'react-icons/fa';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<motion.div exit={{ y: -10, opacity: 0 }} className="flex flex-col items-center justify-center gap-6 h-full">
			<motion.h4
				initial={{
					y: -50,
					opacity: 0,
					filter: 'blur(10px)',
				}}
				animate={{
					y: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: {
						duration: 1,
					},
				}}
				className="uppercase flex flex-row items-center justify-center gap-2"
			>
				<FaDesktop /> An error occurred
			</motion.h4>
			<motion.h2
				initial={{
					x: -50,
					opacity: 0,
					filter: 'blur(10px)',
				}}
				animate={{
					x: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: {
						duration: 1,
					},
				}}
				className="text-xl inline-block text-left"
			>
				{error.message}
			</motion.h2>
			<motion.button
				initial={{
					y: 50,
					opacity: 0,
					filter: 'blur(10px)',
				}}
				animate={{
					y: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: {
						duration: 1,
					},
				}}
				className="btn btn-primary"
				onClick={(e) => {
					e.preventDefault();
					reset();
				}}
			>
				Try Again
			</motion.button>
		</motion.div>
	);
}
