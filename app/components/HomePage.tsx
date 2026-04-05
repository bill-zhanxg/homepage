'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { FaMicrosoft } from 'react-icons/fa';

import AusFlag from '@/images/home/aus-flag.jpg';
import Colors from '@/images/home/colors.jpg';
import Discord from '@/images/home/discord.jpg';
import Piano from '@/images/home/piano.jpg';
import Unity from '@/images/home/unity.jpg';
import Win11Wallpaper from '@/images/home/win11-wallpaper.jpg';
import Link from 'next/link';
import Title from '../globalComponents/Title';
import Description from './Description';
import HomeImage from './HomeImage';
import Paragraph from './Paragraph';
import Paragraph1 from './Paragraph1';
import Paragraph2 from './Paragraph2';

export function HomePage() {
	const [isAnimating, setIsAnimating] = useState(true);

	return (
		<motion.div
			initial="hidden"
			animate="show"
			exit={{ y: -10, opacity: 0 }}
			variants={{
				show: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
			}}
			className={
				'pt-12 pb-6 sm:p-2 sm:pt-12 md:p-10 lg:p-14 overflow-x-hidden' + (isAnimating ? ' overflow-x-hidden' : '')
			}
		>
			<div className="flex flex-col items-center text-center gap-2 p-2 md:p-0">
				<Title>Hi there, I&apos;m Bill Zhang</Title>
				<Description>
					Full stack developer, Discord bot developer, App developer, Minecraft Plugin & Mod developer, Game developer,
					Server developer. I am known online as <b>Bill.IHCha</b>, <b>Bill.zhanxg</b>, <b>Bill-zhanxg</b>. People
					usually just call me <b>Bill</b>.
				</Description>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								delay: 1,
								duration: 0.5,
								ease: 'easeOut',
							},
						},
						hover: {
							scale: 1.05,
							transition: {
								duration: 0.2,
								ease: 'easeInOut',
							},
						},
						tap: { scale: 0.95 },
					}}
					initial="hidden"
					animate="visible"
					whileHover="hover"
					whileTap="tap"
				>
					<Link href="/contact" className="btn btn-primary mt-4">
						Contact Me
					</Link>
				</motion.div>
			</div>
			<Paragraph>
				<Paragraph1>
					<h2 className="text-2xl">💫 About Me</h2>
					<div className="pl-6">
						<p>• 🌐 I&apos;m currently living in Australia</p>
						<p>• 💻 I&apos;m a student that likes to code</p>
						<p className="flex gap-2">
							• <FaMicrosoft className="pt-1" />
							<span>
								Love the new Microsoft design &#40;
								<Link
									href="https://github.com/Microsoft/microsoft-ui-xaml"
									target="_blank"
									className="link link-secondary"
								>
									WinUI 3
								</Link>{' '}
								/{' '}
								<Link
									href="https://developer.microsoft.com/en-us/fluentui/"
									target="_blank"
									className="link link-secondary"
								>
									Fluent Design
								</Link>
								&#41;
							</span>
						</p>
						<p>• 🎨 I can code stuff, fine at designing :&#41;</p>
						<p>
							• 📘 Good at math <span className="font-sans">&#58;&#68;</span>
						</p>
					</div>
				</Paragraph1>
				<Paragraph2>
					<HomeImage src={AusFlag} alt="Australian Flag" />
					<HomeImage src={Win11Wallpaper} alt="Windows 11 Wallpaper" />
				</Paragraph2>
			</Paragraph>
			<Paragraph>
				<Paragraph1>
					<h2 className="text-2xl">💻Tech Stack</h2>
					<div className="pl-6">
						<p>• TypeScript</p>
						<p>• JavaScript</p>
						<p>• Rust</p>
						<p>• Java</p>
						<p>• C#</p>
						<p>• C++ &#40;Used it, hated it, but want to learn it better&#41;</p>
						<p>• HTML5</p>
						<p>• CSS</p>
						<p>• Visual Basic</p>
						<br />
						<p>• Discord.js</p>
						<p>• Tailwind CSS</p>
						<p>• DaisyUI</p>
						<p>• Express.js</p>
						<p>• React</p>
						<p>• Next.js</p>
						<p>• Electron</p>
						<p>• Tauri</p>
						<p>• Unity</p>
						<p>• Minecraft Java Plugin / Mod</p>
						<p>• Minecraft Bedrock Behavior Pack</p>
						<p>• MySQL</p>
						<p>• PostgreSQL</p>
						<br />
						<p>• Bash</p>
						<p>• PowerShell</p>
						<p>• Command Prompt</p>
						<p>• Git</p>
						<br />
						<p>• Arduino Uno</p>
					</div>
				</Paragraph1>
				<Paragraph2>
					<HomeImage src={Discord} alt="Discord Application" />
					<HomeImage src={Unity} alt="Unity Game Engine" />
				</Paragraph2>
			</Paragraph>
			<Paragraph setIsAnimating={setIsAnimating}>
				<Paragraph1>
					<h2 className="text-2xl">🏆 Talents</h2>
					<div className="pl-6">
						<p>• 🎹 Piano Diploma</p>
						<p>• 🗄️ IT, Server Management</p>
						<p>• 📐 Problem Solver</p>
						<p>• 🎨 Learning design / colors</p>
					</div>
				</Paragraph1>
				<Paragraph2>
					<HomeImage src={Piano} alt="Piano Keyboard" />
					<HomeImage src={Colors} alt="Color Palette" />
				</Paragraph2>
			</Paragraph>
		</motion.div>
	);
}
