import { motion } from 'framer-motion';
import Head from 'next/head';

import Title from 'components/Title';
import CardParent from 'components/projects/CardParent';
import Card from '../components/projects/Card';
import Asylum from '../images/projects/asylum.gif';
import ChromeTRex from '../images/projects/chrome-t-rex.jpg';
import FireboyAndWatergirl from '../images/projects/fireboy-and-watergirl.jpg';
import GetAdmin from '../images/projects/get-admin.jpg';
import Hastebin from '../images/projects/hastebin.jpg';
import Homepage from '../images/projects/homepage.jpg';
import Hydra from '../images/projects/hydra.jpg';
import Livfac from '../images/projects/livfac.png';
import Malware from '../images/projects/malware.png';
import MCPECracker from '../images/projects/mcpe-cracker.jpg';
import NetballCalculator from '../images/projects/netball-calculator.jpg';
import OneDriveSyncAnywhere from '../images/projects/onedrive-sync-anywhere.png';
import OnlineStorageSystem from '../images/projects/online-storage-system.png';
import Pi from '../images/projects/pi.png';
import Pong from '../images/projects/pong.jpg';
import RemoteCrossplay from '../images/projects/remote-crossplay.png';
import SpaceInvaders from '../images/projects/space-invaders.jpg';
import StartUpProgramControl from '../images/projects/startup-program-control.png';
import Stob from '../images/projects/stob.jpg';
import TokenGrabber from '../images/projects/token-grabber.jpg';
import CSEN from '../images/projects/csen.jpg';
import BloodLust from '../images/projects/bloodlust.jpg';

export default function Projects(): JSX.Element {
	return (
		<>
			<Head>
				<title>Projects - Bill.IHCha</title>
			</Head>
			<motion.div exit={{ y: -10, opacity: 0 }} className="mt-12 pb-6 sm:m-2 sm:mt-12 md:m-10 lg:m-14">
				<div className="flex flex-col items-center gap-2 text-center">
					<Title>My Projects</Title>
				</div>
				<CardParent>
					<Card
						image={CSEN}
						imageText="CSEN"
						github="https://github.com/bill-zhanxg/ccs-sport"
						title="CCS Sport"
						description="Something that I'm currently developing. 🤫!"
						isNew
					/>
					<Card
						image={BloodLust}
						imageText="BloodLust"
						youtube='https://www.youtube.com/@bloodlust7777'
						discord='https://discord.gg/bloodlst'
						title="BloodLust"
						description="Another ranked BedWars server that I made a bot for."
						isNew
					/>
					<Card
						image={Homepage}
						imageText="Homepage"
						website="https://bill-zhanxg.com/"
						github="https://github.com/bill-zhanxg/homepage"
						title="My Homepage"
						description="This is the page you're currently viewing. It is built with Next.js, Tailwind CSS and Daisy UI."
					/>
					<Card
						image={OneDriveSyncAnywhere}
						imageText="OneDrive Sync Anywhere"
						github="https://github.com/bill-zhanxg/onedrive-sync-anywhere"
						title="OneDrive Sync Anywhere"
						description="This app allows the user to sync files outside the OneDrive folder by creating a Directory Junction."
					/>
					<Card
						image={Livfac}
						imageText="Livfac"
						website="https://livfac.bill-zhanxg.com/"
						discord="https://discord.gg/A9yxVVr2kH"
						title="Livfac"
						description="Livfac is a Minecraft server that I am currently developing. It's now in public beta."
					/>
					<Card
						image={RemoteCrossplay}
						imageText="Remote Crossplay"
						github="https://github.com/bill-zhanxg/remote-crossplay"
						title="Remote Crossplay"
						description="This application enables users to engage in a single-device game on multiple devices simultaneously."
					/>
					<Card
						image={StartUpProgramControl}
						imageText="Startup Program Control"
						youtube="https://youtu.be/cLb3fYf2NUc"
						github="https://github.com/bill-zhanxg/startup-program-control"
						title="Startup Program Control"
						description="This program allows you to manage all your startup files, including Windows Services, Task Scheduler, Windows context menu, and more. You can also add a file to startup with ease."
					/>
					<Card
						image={OnlineStorageSystem}
						imageText="Online Storage System"
						website="https://storage.bill-zhanxg.com/"
						github="https://github.com/bill-zhanxg/online-storage-system"
						title="Online Storage System"
						description="This website is designed solely for my Think Project, and it allows you to store files on the cloud. It is not recommended for actual use, but you can learn from the source code instead."
					/>
					<Card
						image={GetAdmin}
						imageText="GetAdmin"
						youtube="https://youtu.be/Ci2bh2hdgsI"
						github="https://github.com/bill-zhanxg/automatic-windows-admin"
						title="GetAdmin"
						description="This program enables you to gain administrator privileges without needing knowledge of commands. Please use it solely for educational purposes. Note that it only works on Windows 10."
					/>
					<Card
						image={Pi}
						imageText="Pi"
						github="https://github.com/bill-zhanxg/pi-downloader"
						title="Pi Downloader"
						description="A super fast pi downloader uses the 100 trillion digit of pi API from Google to download pi"
					/>
					<Card
						image={NetballCalculator}
						imageText="Netball Calculator"
						github="https://github.com/bill-zhanxg/netball-calculator"
						title="Netball Calculator"
						description="This program is designed for teachers to keep track of scores for each player (Goal Attack, Goal Shooter) and round in a netball game. It is intended to replace the Netball score sheet used by the Christian Schools Events Network."
					/>
					<Card
						image={MCPECracker}
						imageText="MCPE Cracker"
						github="https://github.com/bill-zhanxg/mcpe-cracker"
						title="MCPE-Cracker"
						description="A small tool for automatic cracking Minecraft for Windows Edition"
					/>
					<Card
						image={TokenGrabber}
						imageText="Token Grabber"
						youtube="https://youtu.be/Vwm5yTn8y0g"
						github="https://github.com/bill-zhanxg/token-grabber"
						title="Token Grabber"
						description="This program allows an attacker to steal the saved passwords from the victim's browser. Please use it solely for educational purposes and not for illegal activities. The creator of this program is not responsible for any damage caused by its use."
					/>
					<Card
						image={FireboyAndWatergirl}
						imageText="Fireboy and Watergirl"
						website="https://fireboyandwatergirl.bill-zhanxg.com/"
						title="Fireboy and Watergirl"
						description="This is a private instance of Fireboy and Watergirl game. Password: 00000000 (You're lucky to find this :)."
					/>
					<Card
						image={Pong}
						imageText="Pong"
						github="https://github.com/bill-zhanxg/pong"
						title="Pong"
						description="Play a classic game of Pong against yourself in this version made by me for a school project. Control your paddle and score points by hitting the ball past your opponent."
					/>
					<Card
						image={SpaceInvaders}
						imageText="Space Invaders"
						github="https://github.com/bill-zhanxg/space-invaders"
						title="Space Invaders"
						description="Play my version of Space Invaders for a school project. Defend your planet against an alien invasion in classic or modern mode."
					/>
					<Card
						image={Stob}
						imageText="Stob"
						youtube="https://youtu.be/NeDygGxIZuo"
						discord="https://discord.com/api/oauth2/authorize?client_id=882068020153966663&permissions=8&scope=bot"
						website="https://stob.bill-zhanxg.com/"
						title="Stob"
						description="Stob is a Discord bot that have almost everything. Music, Moderation and Funny Stuff."
					/>
					<Card
						image={Asylum}
						imageText="Asylum"
						youtube="https://www.youtube.com/@asylum8237"
						discord="https://discord.gg/synefX6vKR"
						title="Asylum Bot"
						description="Asylum is a NetherGames ranked BedWars and The Bridge Discord server. We organize tournaments, queues, and have an Elo point system with prizes awarded at the end of each season."
					/>
					<Card
						image={ChromeTRex}
						imageText="Chrome T-Rex"
						github="https://github.com/bill-zhanxg/chrome-dinosaur-remake"
						title="Chrome T-Rex Remake"
						description="Play my version of Chrome's T-Rex Remake game. Jump over cacti and dodge obstacles as you run through the desert. Enjoy this classic game with a new twist in my remake."
					/>
					<Card
						image={Hydra}
						imageText="Hydra"
						youtube="https://youtu.be/Ik7tQvDkZVg"
						github="https://github.com/bill-zhanxg/hydra-remake"
						title="Hydra Virus"
						description="This is my first program ever - a virus. It's a program that replicates itself when you try to close it. While it's not harmful, it's recommended that you only run it in a virtual machine."
					/>
					<Card
						image={Malware}
						imageText="Malware"
						youtube="https://youtu.be/9iglWm4SkIs"
						github="https://github.com/bill-zhanxg/malware-database"
						title="Malware Database"
						description="This is a database for malware. Please only use it with caution."
					/>
					<Card
						image={Hastebin}
						imageText="Hastebin"
						website="https://haste.bill-zhanxg.com/"
						title="Hastebin"
						description="My own private Hastebin instance. Feel free to use it :P."
					/>
				</CardParent>
			</motion.div>
		</>
	);
}
