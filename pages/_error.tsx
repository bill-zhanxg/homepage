import { motion } from 'framer-motion';
import { NextPageContext } from 'next';
import { FaDesktop, FaServer } from 'react-icons/fa';

const errorCodes = {
	400: {
		code: 400,
		type: 'client',
		title: 'Bad Request',
		description:
			'The server cannot process the request due to a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
	},
	401: {
		code: 401,
		type: 'client',
		title: 'Unauthorized',
		description: 'The client must authenticate itself to get the requested response.',
	},
	403: {
		code: 403,
		type: 'client',
		title: 'Forbidden',
		description: 'The server understood the request but refuses to authorize it.',
	},
	404: {
		code: 404,
		type: 'client',
		title: 'Not Found',
		description: 'The server cannot find the requested resource.',
	},
	500: {
		code: 500,
		type: 'server',
		title: 'Internal Server Error',
		description: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
	},
	502: {
		code: 502,
		type: 'server',
		title: 'Bad Gateway',
		description: 'The server received an invalid response from an upstream server while acting as a gateway or proxy.',
	},
	504: {
		code: 504,
		type: 'server',
		title: 'Gateway Timeout',
		description:
			'The server did not receive a timely response from an upstream server while acting as a gateway or proxy.',
	},
	505: {
		code: 505,
		type: 'server',
		title: 'HTTP Version Not Supported',
		description: 'The server does not support the HTTP protocol version used in the request.',
	},
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res?.statusCode || err?.statusCode || 404;
	const errorMeta = errorCodes[statusCode as keyof typeof errorCodes] || errorCodes[404];
	return { code: errorMeta.code, message: errorMeta.title, description: errorMeta.description, type: errorMeta.type };
};

export default function Error({
	code,
	message,
	description,
	type,
}: {
	code: number;
	message: string;
	description: string;
	type: string;
}) {
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
				{type === 'client' ? <FaDesktop /> : <FaServer />} {type} error
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
					{code}
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
					{message}
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
				{description}
			</motion.p>
		</motion.div>
	);
}
