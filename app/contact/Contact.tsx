'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LuClock, LuGithub, LuLinkedin, LuMail, LuYoutube } from 'react-icons/lu';

export function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	};

	const socialVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 10,
			},
		},
	};

	return (
		<motion.section
			className="py-16 px-4 md:px-6 lg:px-8 bg-base-200"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
				<motion.h2 className="text-3xl font-bold text-center mb-8" variants={itemVariants}>
					Get in Touch
				</motion.h2>
				<motion.div className="card bg-base-100 shadow-xl" variants={itemVariants}>
					<div className="card-body">
						<motion.h3 className="card-title" variants={itemVariants}>
							Request a Website
						</motion.h3>
						<motion.p className="text-base-content/70" variants={itemVariants}>
							Looking for a stunning website? I'm here to help! Fill out the form below or reach out via email.
						</motion.p>
						<motion.form className="space-y-6" variants={containerVariants}>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label" htmlFor="name">
									<span className="label-text">Name</span>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									value={formState.name}
									onChange={handleInputChange}
									placeholder="Your name"
									className="input input-bordered w-full"
									required
								/>
							</motion.div>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label" htmlFor="email">
									<span className="label-text">Email</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleInputChange}
									placeholder="your@email.com"
									className="input input-bordered w-full"
									required
								/>
							</motion.div>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label" htmlFor="message">
									<span className="label-text">Message</span>
								</label>
								<textarea
									id="message"
									name="message"
									value={formState.message}
									onChange={handleInputChange}
									placeholder="Tell me about your project..."
									className="textarea textarea-bordered h-24 w-full"
									required
								></textarea>
							</motion.div>
							<motion.div className="flex items-center space-x-4" variants={itemVariants}>
								<LuMail className="text-base-content/50" />
								<a href="mailto:contact@mail.bill-zhanxg.com" className="link link-primary">
									contact@mail.bill-zhanxg.com
								</a>
							</motion.div>
							<motion.div className="flex items-center space-x-4" variants={itemVariants}>
								<LuClock className="text-base-content/50" />
								<span className="text-sm text-base-content/70">I typically respond within 24-48 hours.</span>
							</motion.div>
							<motion.button
								type="submit"
								className="btn btn-primary w-full"
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Send Message
							</motion.button>
						</motion.form>
						<motion.div className="divider" variants={itemVariants}></motion.div>
						<motion.div className="flex justify-center space-x-4" variants={containerVariants}>
							<motion.a
								href="https://www.linkedin.com/in/bill-z-8224342a4"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-ghost btn-square"
								variants={socialVariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<LuLinkedin className="h-6 w-6" />
								<span className="sr-only">LinkedIn</span>
							</motion.a>
							<motion.a
								href="https://github.com/bill-zhanxg"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-ghost btn-square"
								variants={socialVariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<LuGithub className="h-6 w-6" />
								<span className="sr-only">GitHub</span>
							</motion.a>
							<motion.a
								href="https://www.youtube.com/@bill.zhanxg"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-ghost btn-square"
								variants={socialVariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<LuYoutube className="h-6 w-6" />
								<span className="sr-only">YouTube</span>
							</motion.a>
						</motion.div>
						<motion.div
							className="mt-4 text-sm text-base-content/70 flex items-center justify-center"
							variants={itemVariants}
						>
							<span className="font-semibold mr-2">ABN:</span>
							<span>88 244 272 773</span>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
