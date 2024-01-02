import { stripIndents } from 'common-tags';
import type { IconType } from 'react-icons';
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
	SiExpress,
	SiGit,
	SiIntellijidea,
	SiJavascript,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiTypescript,
	SiVisualstudiocode
} from 'react-icons/si';

import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Skills from '../components/pages/Skills';

import ReactArenaThumbnail from '../assets/thumbnails/react-arena.png';
import RobotmanThumbnail from '../assets/thumbnails/robotman.png';

export type Page = ({ active }: { active: boolean }) => JSX.Element;

export const TABS = {
	About,
	Projects,
	Skills
} as Record<string, Page>;

export const USER = {
	FIRST_NAME: 'Maruf',
	LAST_NAME: 'Ahmed',
	AVATAR: 'https://avatars.githubusercontent.com/u/25273018'
};

export const LINK_BUTTONS = [
	{
		url: 'https://github.com/maruf99',
		icon: FaGithub
	},
	{
		url: 'https://www.linkedin.com/in/maruf-ahmed-a511562a3/',
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
		name: 'React Arena',
		description: stripIndents`
        React Arena is a demo ticket-booking interface web application using React and Next.js.
        This demo app was created to gain experience in frontend web development. By working on this project,
        I learned skills related to web development such as state management, creating responsive webpages,
        and optimization using React Hooks.
        `,
		thumbnail: ReactArenaThumbnail,
		github: 'https://github.com/maruf99/react-arena',
		url: 'https://arena.marufdev.me/',
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
		github: 'https://github.com/maruf99/robotman',
		url: 'https://robotman.marufdev.me/',
		technologies: ['TypeScript', 'React', 'PostgreSQL', 'Express', 'Next.js']
	}
] as Project[];

export const ICONS = {
	TypeScript: SiTypescript,
	JavaScript: SiJavascript,
	Java: FaJava,
	Python: SiPython,
	React: SiReact,
	PostgreSQL: SiPostgresql,
	Express: SiExpress,
	'Next.js': SiNextdotjs,
	'VS Code': SiVisualstudiocode,
	Git: SiGit,
	'IntelliJ IDEA': SiIntellijidea
} as Record<string, IconType>;
