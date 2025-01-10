import { motion } from 'framer-motion';
import Head from 'next/head';

import Title from 'components/Title';
import CardParent from 'components/projects/CardParent';
import Card from '../components/projects/Card';
import GDash from '../images/others/3dash.png';
import Zip from '../images/others/7-zip.png';
import ADBAppControl from '../images/others/adb-app-control.png';
import ApacheHttpd from '../images/others/apache-httpd.png';
import Appwrite from '../images/others/appwrite.png';
import Audacity from '../images/others/audacity.png';
import BigStretchReminder from '../images/others/big-stretch-reminder.png';
import BlueScreenView from '../images/others/blue-screen-view.png';
import ContextMenuManager from '../images/others/context-menu-manager.png';
import CrystalDiskInfo from '../images/others/crystal-disk-info.jpg';
import CrystalDiskMark from '../images/others/crystal-disk-mark.png';
import DaisyUI from '../images/others/daisyui.png';
import Discordjs from '../images/others/discordjs.png';
import EarTrumpet from '../images/others/ear-trumpet.png';
import ElectronJS from '../images/others/electronjs.png';
import ElevenClock from '../images/others/eleven-clock.png';
import FFmpeg from '../images/others/ffmpeg.png';
import FileConverter from '../images/others/file-converter.png';
import FluentUI from '../images/others/fluentui.png';
import FramerMotion from '../images/others/framer-motion.png';
import GitHubCopilot from '../images/others/github-copilot.png';
import Hash from '../images/others/hash.png';
import IconViewer from '../images/others/icon-viewer.jpg';
import MeiliSearch from '../images/others/meilisearch.png';
import MicrosoftBing from '../images/others/ms-bing.png';
import MicrosoftEdge from '../images/others/ms-edge.jpg';
import Nextjs from '../images/others/nextjs.png';
import OpenSSH from '../images/others/openssh.jpg';
import PowerToys from '../images/others/powertoys.png';
import Pterodactyl from '../images/others/pterodactyl.png';
import ReVanced from '../images/others/revanced.png';
import Rufus from '../images/others/rufus.png';
import TailWindCss from '../images/others/tailwindcss.png';
import Tauri from '../images/others/tauri.png';
import TreeSize from '../images/others/tree-size.png';
import Tweaking from '../images/others/tweaking.png';
import Typescript from '../images/others/typescript.png';
import Ubuntu from '../images/others/ubuntu.png';
import Unity from '../images/others/unity.png';
import Virtualmin from '../images/others/virtualmin.png';
import VSCode from '../images/others/vscode.png';
import WebRTC from '../images/others/webrtc.png';
import WidgetBot from '../images/others/widgetbot.png';
import WinSCP from '../images/others/win-scp.png';
import Windows11 from '../images/others/windows11.png';
import WinUI from '../images/others/winui.png';
import WSATools from '../images/others/wsa-tools.png';

export default function Others(): JSX.Element {
	return (
		<>
			<Head>
				<title>Cool Stuffs - Bill.IHCha</title>
			</Head>
			<motion.div exit={{ y: -10, opacity: 0 }} className="mt-12 pb-6 sm:m-2 sm:mt-12 md:m-10 lg:m-14">
				<div className="flex flex-col items-center gap-2 text-center">
					<Title>Cool Stuffs</Title>
				</div>
				<CardParent>
					<Card
						image={Pterodactyl}
						imageText="Pterodactyl"
						website="https://pterodactyl.io/"
						discord="https://discord.com/invite/pterodactyl"
						github="https://github.com/pterodactyl/panel"
						title="Pterodactyl"
						description="A free, open-source hosting panel. Where this website is hosted."
					/>
					<Card
						image={ApacheHttpd}
						imageText="Apache Httpd"
						website="https://httpd.apache.org/"
						github="https://github.com/apache/httpd"
						title="Apache HTTP Server"
						description="A free, open-source web server. All my websites uses this reverse proxy."
					/>
					<Card
						image={Virtualmin}
						imageText="Virtualmin"
						website="https://www.virtualmin.com/"
						youtube="https://www.youtube.com/virtualmin"
						github="https://github.com/virtualmin"
						title="Virtualmin"
						description="Virtualmin is a domain hosting and website control panel based on Webmin. Where my mail server is hosted."
					/>
					<Card
						image={WebRTC}
						imageText="WebRTC"
						github="https://github.com/coturn/coturn"
						title="Coturn"
						description="Coturn is a free open source implementation of TURN and STUN Server. The TURN Server is a VoIP media traffic NAT traversal server and gateway. I have my own coturn server, see if you can find it :P."
					/>
					<Card
						image={OpenSSH}
						imageText="OpenSSH"
						website="https://www.openssh.com/"
						github="https://github.com/openssh"
						title="OpenSSH"
						description="A secure shell (SSH) server, for secure access from remote machines. Everyone uses it."
					/>
					<Card
						image={Ubuntu}
						imageText="Ubuntu"
						website="https://ubuntu.com/"
						github="https://github.com/ubuntu"
						title="Ubuntu"
						description="Ubuntu is a popular Linux distribution open-source operating system that's operated by Canonical. My server is running on Ubuntu."
					/>
					<Card
						image={Windows11}
						imageText="Windows 11"
						isNew
						website="https://www.microsoft.com/en-au/windows/windows-11"
						youtube="https://www.youtube.com/@MicrosoftWindows"
						title="Windows 11"
						description="Windows 11 is the latest major release of Microsoft's Windows NT operating system, released in October 2021. My main PC is running on Windows 11."
					/>
					<Card
						image={MicrosoftEdge}
						imageText="Microsoft Edge"
						website="https://www.microsoft.com/en-us/edge"
						youtube="https://www.youtube.com/@MSFTEdge"
						title="Microsoft Edge"
						description="Microsoft Edge is a browser made by Microsoft that replaces Internet Explorer and runs faster with more features than Google Chrome, but it's powered by Chromium. My main browser is Microsoft Edge."
					/>
					<Card
						image={MicrosoftBing}
						imageText="Microsoft Bing"
						website="https://www.bing.com/"
						youtube="https://www.youtube.com/@bing"
						title="Microsoft Bing"
						description="Microsoft Bing is a web search engine owned and operated by Microsoft that provides a variety of search services with new AI search and chat features. Everyone should use it!"
					/>
					<Card
						image={VSCode}
						imageText="Visual Studio Code"
						website="https://code.visualstudio.com/"
						youtube="https://www.youtube.com/@code"
						title="Visual Studio Code"
						description="Visual Studio Code is a versatile source code editor for Windows, macOS, and Linux with extensive language support and extensions."
					/>
					<Card
						image={GitHubCopilot}
						imageText="GitHub Copilot"
						website="https://github.com/features/copilot"
						title="GitHub Copilot"
						description="GitHub Copilot is an AI-powered code completion tool that helps you write code faster."
					/>
					<Card
						image={WinUI}
						imageText="WinUI"
						website="https://microsoft.github.io/microsoft-ui-xaml/"
						github="https://github.com/microsoft/microsoft-ui-xaml"
						title="WinUI"
						description="The Windows UI Library (WinUI) is a native user experience (UX) framework for both Windows desktop and UWP applications."
					/>
					<Card
						image={FluentUI}
						imageText="Fluent UI"
						website="https://developer.microsoft.com/en-us/fluentui/"
						github="https://github.com/microsoft/fluentui"
						title="Fluent UI"
						description="Fluent UI is an ecosystem that helps to create consistent user experience across all platforms. It is an open source project from Microsoft."
					/>
					<Card
						image={Tauri}
						imageText="Tauri"
						website="https://tauri.app/"
						discord="https://discord.com/invite/tauri"
						github="https://github.com/tauri-apps/tauri"
						title="Tauri"
						description="Tauri is a framework for building cross-platform desktop applications with web technologies and Rust."
					/>
					<Card
						image={MeiliSearch}
						imageText="MeiliSearch"
						website="https://www.meilisearch.com/"
						discord="https://discord.com/invite/meilisearch"
						github="https://github.com/meilisearch/meilisearch"
						title="MeiliSearch"
						description="MeiliSearch is a powerful, fast, open-source, easy to use and deploy search engine."
					/>
					<Card
						image={Discordjs}
						imageText="Discordjs"
						website="https://discord.js.org/"
						discord="https://discord.com/invite/djs"
						github="https://github.com/discordjs/discord.js"
						npm="https://www.npmjs.com/package/discord.js"
						title="Discord.js"
						description="Discord.js simplifies Discord API interaction through an object-oriented approach, resulting in cleaner and more comprehensible code for your bot. All my Discord bots are built with Discord.js."
					/>
					<Card
						image={Nextjs}
						imageText="Nextjs"
						website="https://nextjs.org/"
						github="https://github.com/vercel/next.js"
						npm="https://www.npmjs.com/package/next"
						title="Next.js"
						description="A free, open-source React framework. This website is built with Next.js."
					/>
					<Card
						image={TailWindCss}
						imageText="TailWind CSS"
						website="https://tailwindcss.com/"
						youtube="https://www.youtube.com/@TailwindLabs"
						discord="https://tailwindcss.com/discord"
						github="https://github.com/tailwindlabs/tailwindcss"
						npm="https://www.npmjs.com/package/tailwindcss"
						title="TailWind CSS"
						description="Tailwind CSS is a utility-first, low-level CSS framework that provides customizable building blocks without predefined classes, allowing for easy testing and layout changes. This website is built with TailWind CSS."
					/>
					<Card
						image={DaisyUI}
						imageText="Daisy UI"
						website="https://daisyui.com/"
						github="https://github.com/saadeghi/daisyui"
						npm="https://www.npmjs.com/package/daisyui"
						title="Daisy UI"
						description="DaisyUI is a Tailwind plugin for TailWind CSS that simplifies HTML creation with semantic color names and pre-built UI components, while allowing for easy theme customization using CSS variables. This website is built with DaisyUI."
					/>
					<Card
						image={FramerMotion}
						imageText="Framer Motion"
						website="https://www.framer.com/motion/"
						discord="https://discord.com/servers/framer-341919693348536320"
						github="https://github.com/framer/motion"
						npm="https://www.npmjs.com/package/react-motion"
						title="Framer Motion"
						description="Framer Motion simplifies the complexities of animations and enables you to create fluid animations and interactions for desktop and mobile with ease. This website is built with Framer Motion."
					/>
					<Card
						image={ElectronJS}
						imageText="Electron"
						website="https://www.electronjs.org/"
						discord="https://discordapp.com/invite/APGC3k5yaH"
						github="EEEEEEhttps://github.com/electron/electronEEEEEE"
						npm="https://www.npmjs.com/package/electron"
						title="Electron"
						description="Electron is a free and open-source software framework that enables cross-platform desktop application development with HTML, CSS, and JavaScript."
					/>
					<Card
						image={Typescript}
						imageText="Typescript"
						website="https://www.typescriptlang.org/"
						discord="https://discord.com/invite/typescript"
						github="https://github.com/Microsoft/TypeScript"
						npm="https://www.npmjs.com/package/typescript"
						title="Typescript"
						description="TypeScript is an object-oriented, strongly-typed superset of JavaScript designed for large-scale applications that transpiles to JavaScript. All Javascript developers should use Typescript."
					/>
					<Card
						image={Unity}
						imageText="Unity"
						website="https://unity.com/"
						title="Unity"
						description="Unity is a widely used cross-platform IDE and 3D/2D game engine use C#, especially for developing mobile games on iOS and Android."
					/>
					<Card
						image={Appwrite}
						imageText="Appwrite"
						website="https://appwrite.io/"
						youtube="https://www.youtube.com/@Appwrite"
						discord="https://discord.com/invite/GSeTUeA"
						github="https://github.com/appwrite/appwrite"
						npm="https://www.npmjs.com/package/node-appwrite"
						title="Appwrite"
						description="Appwrite is a self-hosted backend-as-a-service platform with APIs for managing authentication, databases, storage, and functions in popular coding languages. This is the database for my projects."
					/>
					<Card
						image={ReVanced}
						imageText="ReVanced"
						website="https://revanced.app/"
						youtube="https://www.youtube.com/@ReVanced"
						discord="http://revanced.app/discord"
						github="https://github.com/revanced"
						title="ReVanced"
						description="ReVanced is a free patcher that modifies apps like YouTube, Twitter, and TikTok, with features including ad-blocking and background video playback, continuing the legacy of YouTube Vanced."
					/>
					<Card
						image={WidgetBot}
						imageText="WidgetBot"
						website="https://widgetbot.io/"
						discord="https://discord.gg/zyqZWr2"
						github="https://github.com/widgetbot-io"
						title="WidgetBot"
						description="WidgetBot is an open-source javascript widget and Discord bot that lets website guests see and reply to messages from a Discord server in real-time on the website, without needing a Discord account."
					/>
					<Card
						image={GDash}
						imageText="3Dash"
						website="https://3dash.xyz/"
						title="3Dash"
						description="Geometry Dash but 3D."
					/>
					<Card
						image={PowerToys}
						imageText="PowerToys"
						website="https://learn.microsoft.com/en-us/windows/powertoys/install"
						github="https://github.com/microsoft/PowerToys"
						title="PowerToys"
						description="Official Microsoft Utility for Windows. Includes all the tools for power users."
					/>
					<Card
						image={FileConverter}
						imageText="File Converter"
						website="https://file-converter.org/"
						github="https://github.com/Tichau/FileConverter"
						title="File Converter"
						description="File Converter is a very simple tool which allows you to convert and compress one or several file(s) using the context menu of windows explorer."
					/>
					<Card
						image={ADBAppControl}
						imageText="ADB AppControl"
						website="https://adbappcontrol.com/"
						youtube="https://www.youtube.com/channel/UC7AYC-4LNDFpSrYgvHFB0Bw"
						title="ADB AppControl"
						description="ADB AppControl is a GUI for the ADB (Android Debug Bridge) tool."
					/>
					<Card
						image={ContextMenuManager}
						imageText="Context Menu Manager"
						website="https://bluepointlilac.github.io/ContextMenuManager/"
						github="https://github.com/BluePointLilac/ContextMenuManager"
						title="Context Menu Manager"
						description="Context Menu Manager is a free and open-source software that allows you to customize the context menu of Windows Explorer."
					/>
					<Card
						image={CrystalDiskInfo}
						imageText="CrystalDiskInfo"
						website="https://crystalmark.info/en/software/crystaldiskinfo/"
						github="https://github.com/hiyohiyo/CrystalDiskInfo"
						title="CrystalDiskInfo"
						description="CrystalDiskInfo is a disk utility software that displays everything you need to know about your hard drive."
					/>
					<Card
						image={CrystalDiskMark}
						imageText="CrystalDiskMark"
						website="https://crystalmark.info/en/software/crystaldiskinfo/"
						github="https://github.com/hiyohiyo/CrystalDiskMark"
						title="CrystalDiskMark"
						description="CrystalDiskMark is a disk benchmark software that measures the performance of your hard drive."
					/>
					<Card
						image={BlueScreenView}
						imageText="Blue Screen View"
						website="https://www.nirsoft.net/utils/blue_screen_view.html"
						title="Blue Screen View"
						description="Blue Screen View is a utility that parses the minidump files created during 'blue screen of death' crashes, and displays the information about all crashes in one table."
					/>
					<Card
						image={Hash}
						imageText="Hash"
						github="https://github.com/namazso/OpenHashTab"
						title="OpenHashTab"
						description="OpenHashTab is a free and open-source software that allows you to calculate the hash of a file using the properties menu of windows explorer."
					/>
					<Card
						image={IconViewer}
						imageText="Icon Viewer"
						website="https://www.botproductions.com/iconview/iconview.html"
						title="Icon Viewer"
						description="Icon Viewer is a free and open-source software that allows you to view the icons of a file using the properties menu of windows explorer."
					/>
					<Card
						image={Tweaking}
						imageText="Tweaking"
						website="https://www.tweaking.com/content/page/windows_repair_all_in_one.html"
						title="Tweaking.com - Windows Repair"
						description="Tweaking.com - Windows Repair is an all-in-one repair tool to help fix a large majority of known Windows problems including file permissions and more."
					/>
					<Card
						image={Zip}
						imageText="7-Zip"
						website="https://www.7-zip.org/"
						title="7-Zip"
						description="7-Zip is a free file archiver with a high compression ratio."
					/>
					<Card
						image={Audacity}
						imageText="Audacity"
						website="https://www.audacityteam.org"
						youtube="https://www.youtube.com/channel/UCHUCowIfMiQd_IeLDaftV_g"
						github="https://github.com/audacity/audacity"
						title="Audacity"
						description="Audacity is a free, easy-to-use, multi-track audio editor and recorder for Windows, Mac OS X, GNU/Linux and other operating systems."
					/>
					<Card
						image={FFmpeg}
						imageText="FFmpeg"
						website="https://ffmpeg.org/"
						title="FFmpeg"
						description="FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for handling video, audio, and other multimedia files and streams."
					/>
					<Card
						image={BigStretchReminder}
						imageText="Big Stretch Reminder"
						website="https://monkeymatt.com/bigstretch/"
						title="Big Stretch Reminder"
						description="Big Stretch Reminder is a software that reminds you to take a break and stretch your body with advanced controls."
					/>
					<Card
						image={EarTrumpet}
						imageText="EarTrumpet"
						website="https://eartrumpet.app/"
						github="https://github.com/File-New-Project/EarTrumpet"
						title="EarTrumpet"
						description="EarTrumpet is a Windows volume control app that's simple, modern, and powerful."
					/>
					<Card
						image={Rufus}
						imageText="Rufus"
						website="https://rufus.ie/"
						github="https://github.com/pbatard/rufus"
						title="Rufus"
						description="Rufus is a utility that helps format and create bootable USB flash drives."
					/>
					<Card
						image={TreeSize}
						imageText="TreeSize Free"
						website="https://www.jam-software.com/treesize_free"
						youtube="https://www.youtube.com/channel/UCd9S6kdHAYQnp22ytzKPy3g"
						title="TreeSize Free"
						description="TreeSize Free tells you where precious disk space has gone to."
					/>
					<Card
						image={WinSCP}
						imageText="WinSCP"
						website="https://winscp.net/eng/index.php"
						github="https://github.com/winscp/winscp"
						title="WinSCP"
						description="WinSCP is a free SFTP, SCP, S3, WebDAV, and FTP client for Windows."
					/>
					<Card
						image={WSATools}
						imageText="WSATools"
						website="https://wsatools.app/"
						github="https://github.com/Simizfo/WSATools"
						title="WSATools"
						description="WSATools is a simple APK installer for Windows 11's Subsystem for Android. It also adds explorer integration for APKs, and you won't have to worry about ADB, since it takes care of everything for you."
					/>
					<Card
						image={ElevenClock}
						imageText="ElevenClock"
						website="https://www.marticliment.com/elevenclock/"
						github="https://github.com/marticliment/ElevenClock"
						title="ElevenClock"
						description="ElevenClock is a simple, lightweight, and customizable clock for Windows 11."
					/>
				</CardParent>
			</motion.div>
		</>
	);
}
