import { stripIndents } from 'common-tags';
import type { IconType } from 'react-icons';
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
	SiArduino,
	SiBootstrap,
	SiChakraui,
	SiCplusplus,
	SiCss3,
	SiExpress,
	SiGit,
	SiGithub,
	SiHtml5,
	SiIntellijidea,
	SiJavascript,
	SiMantine,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiPayloadcms,
	SiPostgresql,
	SiPycharm,
	SiPython,
	SiReact,
	SiSpringboot,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode
} from 'react-icons/si';


import ReactArenaThumbnail from '../assets/thumbnails/react-arena.png';
import RobotmanThumbnail from '../assets/thumbnails/robotman.png';
import ClassTaskThumbnail from '../assets/thumbnails/classtask.png';
import USSTMThumbnail from '../assets/thumbnails/usstm.png';

export type Page = ({ active }: { active: boolean }) => JSX.Element;

export const USER = {
	FIRST_NAME: 'Maruf',
	LAST_NAME: 'Ahmed',
	AVATAR: 'https://avatars.githubusercontent.com/u/25273018'
};

export const NAV_LINKS = [
	'About',
	'Projects',
	'Skills'
];

const GITHUB_URL = 'https://github.com/marufamd';

export const LINK_BUTTONS = [
	{
		url: GITHUB_URL,
		icon: FaGithub
	},
	{
		url: 'https://www.linkedin.com/in/maruf-amd/',
		icon: FaLinkedin
	},
	{
		url: 'mailto:maruf.ahmed@torontomu.ca',
		icon: MdEmail
	}
];

export interface Project {
	name: string;
	description: string;
	thumbnail: string;
	github: string;
	url?: string;
	technologies: string[];
}

export const PROJECTS = [
	{
		name: 'USSTM Website',
		description: stripIndents`
		As Tech Manager for the Undergraduate Science Society of Toronto Metropolitan (USSTM), one of my responsibilities is maintaining the organization's official website. When I inherited the codebase, it was a static React application with content hardcoded throughout. This was a maintenance nightmare as members and policies change annually.

		I led a complete redesign, transforming the site into a full-stack TypeScript Next.js application backed by PayloadCMS. This modern architecture enables non-technical members to manage content independently, dramatically reducing maintenance overhead.
		`,
		thumbnail: USSTMThumbnail,
		github: 'https://github.com/PACS-TMU/usstm-website',
		url: 'https://usstm.ca',
		technologies: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Supabase', 'PayloadCMS']
	},
	/*
	{
		name: 'SecureBYTE',
		description: stripIndents`
		As a developer for BYTE TMU, I collaborated with 30+ developers to create SecureBYTE, an AI-powered
		`,
		thumbnail: 'https://via.placeholder.com/150',
		github: '',
		url: '',
		technologies: ['JavaScript', 'Python', 'React', 'Flask', 'Firebase', 'ChromaDB']
	},
	*/
	{
		name: 'ClassTask',
		description: stripIndents`
		ClassTask is a progressive web app I created to help me manage my coursework in university. I wanted a simple app to track assignment deadlines and exam dates for different courses that didn't have the bloat of other apps like Notion.

		The frontend is a PWA React application written in TypeScript that uses Mantine UI. The backend is a Spring Boot application written in Java. This was my first time using Spring Boot, and taught me a lot about Object oriented programming and writing applications in Java.
		`,
		thumbnail: ClassTaskThumbnail,
		github: `${GITHUB_URL}/classtask`,
		url: 'https://classtask.maruf.dev',
		technologies: ['TypeScript', 'Java', 'React', "Spring Boot", "PostgreSQL"]
	},
	{
		name: 'React Arena',
		description: stripIndents`
        React Arena is a demo ticket-booking interface web application using React and Next.js.
        This demo app was created to gain experience in frontend web development. By working on this project,
        I learned skills related to web development such as state management, creating responsive webpages,
        and optimization using React Hooks.
        `,
		thumbnail: ReactArenaThumbnail,
		github: `${GITHUB_URL}/react-arena`,
		url: 'https://react-arena-five.vercel.app/',
		technologies: ['TypeScript', 'React', 'Next.js']
	},
	{
		name: 'Robotman',
		description: stripIndents`
        Robotman is a Discord bot written in TypeScript using the Discord.js library.
        It consists of the main bot application, a frontend dashboard web app written in React, and a backend
        web server using an API identical to Express. The bot and backend make use of a PostgreSQL database to
        store and retrieve persistent data.

        Robotman served as my introduction to TypeScript, React, and full-stack development. I learned a lot about HTTP servers,
        relational databases, and using REST APIs to communicate between the backend and frontend.
        `,
		thumbnail: RobotmanThumbnail,
		github: `${GITHUB_URL}/robotman`,
		url: 'https://robotman-dashboard.vercel.app/',
		technologies: ['TypeScript', 'React', 'PostgreSQL', 'Express', 'Next.js']
	}
] as Project[];

export const ICONS = {
	TypeScript: SiTypescript,
	JavaScript: SiJavascript,
	Java: FaJava,
	Python: SiPython,
	'C++': SiCplusplus,
	HTML: SiHtml5,
	CSS: SiCss3,
	React: SiReact,
	Arduino: SiArduino,
	'Node.js': SiNodedotjs,
	PostgreSQL: SiPostgresql,
	Express: SiExpress,
	'Next.js': SiNextdotjs,
	TailwindCSS: SiTailwindcss,
	Bootstrap: SiBootstrap,
	'Chakra UI': SiChakraui,
	Git: SiGit,
	GitHub: SiGithub,
	'VS Code': SiVisualstudiocode,
	PyCharm: SiPycharm,
	'IntelliJ IDEA': SiIntellijidea,
	Nginx: SiNginx,
	'Spring Boot': SiSpringboot,
	'Mantine UI': SiMantine,
	Supabase: SiSupabase,
	PayloadCMS: SiPayloadcms
} as Record<string, IconType>;
