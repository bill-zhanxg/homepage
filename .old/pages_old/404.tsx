import { motion } from 'framer-motion';
import { FaDesktop } from 'react-icons/fa';

export default function Error() {
	return (
		<motion.div exit={{ y: -10, opacity: 0 }} className="flex flex-col items-center justify-center gap-2 h-full">
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
				<FaDesktop /> client error
			</motion.h4>
			<div className="flex items-center justify-center">
				<motion.h1
					initial={{
						x: 50,
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
					className="text-5xl inline-block mr-5 pr-6 align-top border-r-2 border-[#dcdfe4]"
				>
					404
				</motion.h1>
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
					Page Not Found
				</motion.h2>
			</div>
			<motion.p
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
				className="text-center"
			>
				The server cannot find the requested resource.
			</motion.p>
		</motion.div>
	);
}
