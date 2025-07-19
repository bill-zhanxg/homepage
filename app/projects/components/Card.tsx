import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { BsGlobe2 } from 'react-icons/bs';
import { FaDiscord, FaGithub, FaNpm, FaYoutube } from 'react-icons/fa';

import ConnectionIcon from '../../globalComponents/ConnectionIcon';

export function Card({
	image,
	imageText,
	title,
	description,
	isNew = false,
	website,
	youtube,
	discord,
	github,
	npm,
}: {
	image: StaticImageData;
	imageText: string;
	title: string;
	description: string;
	isNew?: boolean;
	website?: string;
	youtube?: string;
	discord?: string;
	github?: string;
	npm?: string;
}) {
	const connection = website || youtube || discord || github ? true : false;

	return (
		<motion.div
			whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.1 } }}
			variants={{
				hidden: { x: 300, opacity: 0, filter: 'blur(10px)' },
				show: {
					x: 0,
					opacity: 1,
					filter: 'blur(0px)',
					transition: {
						duration: 0.2,
						ease: 'easeInOut',
						type: 'spring',
						stiffness: 100,
						damping: 20,
						mass: 1,
					},
				},
			}}
			className="card card-compact w-64 border-2 border-solid border-accent bg-base-100 shadow-md shadow-accent"
		>
			<figure>
				<Image src={image} alt={imageText} width={0} height={0} className="h-40 w-64 object-cover" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					{isNew ? <div className="badge-secondary badge">NEW</div> : null}
				</h2>
				<p>{description}</p>
				{connection ? (
					<div className="card-actions justify-end">
						{website ? <ConnectionIcon Icon={BsGlobe2} url={website} ariaLabel="Website" /> : null}
						{youtube ? <ConnectionIcon Icon={FaYoutube} url={youtube} ariaLabel="YouTube" /> : null}
						{discord ? <ConnectionIcon Icon={FaDiscord} url={discord} ariaLabel="Discord" /> : null}
						{github ? <ConnectionIcon Icon={FaGithub} url={github} ariaLabel="GitHub" /> : null}
						{npm ? <ConnectionIcon Icon={FaNpm} url={npm} ariaLabel="NPM" /> : null}
					</div>
				) : null}
			</div>
		</motion.div>
	);
}
