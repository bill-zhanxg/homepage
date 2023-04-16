import WidgetBot from '@widgetbot/react-embed';
import { motion } from 'framer-motion';
import Title from '../components/Title';

export default function Discord(): JSX.Element {
	return (
		<motion.div exit={{ y: -10, opacity: 0 }} className="pt-12 pb-6 p-2 sm:pt-12 md:p-10 lg:p-14 h-full">
			<div className="flex flex-col items-center text-center gap-2 h-full">
				<Title>Preview my Discord Server</Title>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full h-full"
				>
					<WidgetBot server="768368356436475905" channel="1003571708499861514" className="w-full h-full" />
				</motion.div>
			</div>
		</motion.div>
	);
}
