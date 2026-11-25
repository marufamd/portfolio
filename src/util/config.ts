import type { IconType } from 'react-icons';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

// PENDING: headline's student status carried over from the previous site; confirm with Maruf.
export const USER = {
	NAME: 'Maruf Ahmed',
	// Always the current GitHub profile picture.
	AVATAR: 'https://avatars.githubusercontent.com/u/25273018?v=4',
	HEADLINE: 'Software Engineer Intern at Shopify. Studying Computer Science at Toronto Metropolitan University.'
};

export const NAV_LINKS = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Education', href: '#education' }
];

export interface ProfileLink {
	label: string;
	url: string;
	icon: IconType;
}

export const PROFILE_LINKS: ProfileLink[] = [
	{ label: 'GitHub', url: 'https://github.com/marufamd', icon: LuGithub },
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/maruf-amd/', icon: LuLinkedin }
];

// Year and month, e.g. `2026-09`.
type YearMonth = `${number}-${string}`;

export interface Experience {
	title: string;
	company: string;
	type: string;
	start: YearMonth;
	// Omit for a current role.
	end?: YearMonth;
	location: string;
	workplace: string;
}

// Copied from LinkedIn. Keep in step with the profile, newest first.
export const EXPERIENCE: Experience[] = [
	{
		title: 'Software Engineer',
		company: 'Shopify',
		type: 'Internship',
		start: '2026-09',
		location: 'Toronto, Ontario, Canada',
		workplace: 'Hybrid'
	},
	{
		title: 'Software Engineer',
		company: 'RBC',
		type: 'Internship',
		start: '2026-05',
		end: '2026-09',
		location: 'Toronto, Ontario, Canada',
		workplace: 'Hybrid'
	},
	{
		title: 'Software Engineer',
		company: 'Enercare Inc.',
		type: 'Internship',
		start: '2025-05',
		end: '2026-04',
		location: 'Markham, Ontario, Canada',
		workplace: 'Hybrid'
	}
];

export interface Education {
	school: string;
	program: string;
}

export const EDUCATION: Education[] = [
	{
		school: 'Toronto Metropolitan University',
		program: 'Computer Science'
	}
];
