'use client';

import { motion, Variants } from 'motion/react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { IconType } from 'react-icons';
import { LuClock, LuGithub, LuLinkedin, LuMail, LuYoutube } from 'react-icons/lu';
import { Alert, AlertType } from '../globalComponents/Alert';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
} satisfies Variants;

export function Contact({
	contactFormAction,
}: {
	contactFormAction: (prevState: AlertType, formData: FormData) => Promise<AlertType>;
}) {
	const [res, formAction] = useActionState(contactFormAction, null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
	};

	return (
		<motion.section
			className="py-8 px-4 md:px-6 lg:px-8 bg-linear-to-br from-base-200 to-base-300 min-h-screen flex items-center justify-center"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div className="max-w-3xl w-full" variants={itemVariants}>
				<motion.h2
					className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary"
					variants={itemVariants}
				>
					Get in Touch
				</motion.h2>
				<motion.div className="card bg-base-100 shadow-xl overflow-hidden" variants={itemVariants}>
					<div className="card-body p-6 md:p-8">
						<motion.h3 className="card-title text-xl mb-4" variants={itemVariants}>
							Request a Website
						</motion.h3>
						<motion.p className="text-base-content/70 text-sm" variants={itemVariants}>
							Looking for a stunning website or SaaS? I&apos;m here to help! Fill out the form below or reach out via
							email.
						</motion.p>
						<motion.p className="text-base-content/70 mb-2 text-sm italic" variants={itemVariants}>
							Note: This contact form is for project inquiries only — no sales pitches or promotional messages, please.
						</motion.p>
						<motion.form className="space-y-4" variants={containerVariants} action={formAction}>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label py-1" htmlFor="name">
									<span className="label-text font-medium">Name</span>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									placeholder="Your name"
									className="input input-bordered w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
									required
								/>
							</motion.div>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label py-1" htmlFor="email">
									<span className="label-text font-medium">Email</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									placeholder="your@email.com"
									className="input input-bordered w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
									required
								/>
							</motion.div>
							<motion.div className="form-control" variants={itemVariants}>
								<label className="label py-1" htmlFor="message">
									<span className="label-text font-medium">Message</span>
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Tell me about your project..."
									className="textarea textarea-bordered h-24 w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
									required
								></textarea>
							</motion.div>
							<motion.div
								className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4 p-3 bg-base-200/50 rounded-lg text-sm"
								variants={itemVariants}
							>
								<div className="flex items-center space-x-2">
									<LuMail className="text-primary h-4 w-4" />
									<a href="mailto:contact@mail.bill-zhanxg.com" className="link link-secondary">
										contact@mail.bill-zhanxg.com
									</a>
								</div>
								<div className="flex items-center space-x-2">
									<LuClock className="text-secondary h-4 w-4" />
									<span className="text-base-content/70">Response within 24-48 hours</span>
								</div>
							</motion.div>
							<SubmitButton />
							{res && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Alert {...res} />
								</motion.div>
							)}
						</motion.form>
						<motion.div className="divider my-2" variants={itemVariants}></motion.div>
						<motion.div className="flex flex-col items-center space-y-2" variants={containerVariants}>
							<div className="flex justify-center space-x-6">
								<SocialLink href="https://www.linkedin.com/in/bill-z-8224342a4" Icon={LuLinkedin} label="LinkedIn" />
								<SocialLink href="https://github.com/bill-zhanxg" Icon={LuGithub} label="GitHub" />
								<SocialLink href="https://www.youtube.com/@bill.zhanxg" Icon={LuYoutube} label="YouTube" />
							</div>
							<motion.div
								className="text-xs text-base-content/70 flex items-center justify-center p-2 bg-base-200/50 rounded-lg w-full"
								variants={itemVariants}
							>
								<span className="font-semibold mr-2">ABN:</span>
								<span>88 244 272 773</span>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<motion.button
			type="submit"
			className="btn btn-primary w-full shadow-lg"
			variants={itemVariants}
			whileHover={{ scale: 1.02, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
			whileTap={{ scale: 0.98 }}
			disabled={pending}
		>
			{pending ? (
				<>
					<span className="loading loading-spinner"></span>
					Sending...
				</>
			) : (
				'Send Message'
			)}
		</motion.button>
	);
}

function SocialLink({ href, Icon, label }: { href: string; Icon: IconType; label: string }) {
	const socialVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
	} satisfies Variants;

	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="btn btn-ghost btn-circle bg-base-200 hover:bg-primary/10 transition-colors duration-300"
			variants={socialVariants}
			whileHover={{ scale: 1.1, y: -3 }}
			whileTap={{ scale: 0.9 }}
		>
			<Icon className="h-6 w-6" />
			<span className="sr-only">{label}</span>
		</motion.a>
	);
}
