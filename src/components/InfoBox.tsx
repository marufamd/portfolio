import { SiTypescript, SiJavascript, SiJava, SiPython, SiReact, SiNextdotjs, SiVisualstudiocode, SiGit, SiPostgresql } from 'react-icons/si';
import email from '../assets/icons/email.png';
import github from '../assets/icons/github.png';
import Heading from './Heading';
import IconButton from './IconButton';
import Project from './Project';
import Text from './Text';
import Tool from './Tool';

const projects = ['world-cup-app', 'comicgeeks', 'robotman'];

const ICON_SIZE = 24;

const technologies = {
	TypeScript: <SiTypescript size={ICON_SIZE} />,
	JavaScript: <SiJavascript size={ICON_SIZE} />,
	Java: <SiJava size={ICON_SIZE} />,
	Python: <SiPython size={ICON_SIZE} />,
	React: <SiReact size={ICON_SIZE} />,
	'Next.js': <SiNextdotjs size={ICON_SIZE} />,
	'VS Code': <SiVisualstudiocode size={ICON_SIZE} />,
	Git: <SiGit size={ICON_SIZE} />,
	PostgreSQL: <SiPostgresql size={ICON_SIZE} />
};

export default function InfoBox() {
	return (
		<div className="container mx-auto h-screen flex flex-col justify-center items-center">
			<div
				className="
                    container
					m-10
                    h-auto
                    sm:w-96
					md:w-128
					px-8
                    py-10
                    rounded-xl 
                    drop-shadow-lg 
                  bg-neutral-800
                    flex 
                    flex-col 
                    justify-center
                    items-center
                    space-y-6
                "
			>
				<div className="space-y-2">
					<h1
						className="
                        text-white
                        text-4xl 
                        font-bold
                    "
					>
						👋 Hi, I'm <span className="text-red-500">Maruf</span>!
					</h1>
					<Text>I'm a programmer from Toronto, Ontario.</Text>

					<Heading title="My Projects" />
					<Text>Below are some of the projects I have worked on in my several years of programming.</Text>

					<div
						className="
					grid
					grid-cols-1
					md:grid-cols-3
					justify-center
					gap-2
					"
					>
						{projects.map((proj) => (
							<Project key={proj} name={proj} href={proj} />
						))}
					</div>

					<Heading title="Technologies" />
					<Text>I have gained experience using these technologies in my projects. Currently, I use TypeScript as my main language.</Text>

					<div
						className="
					flex
					items-center
					justify-center"
					>
						<ul
							className="
					grid
					grid-cols-9
					md:grid-cols-3
					gap-3
					text-white
					py-3
					"
						>
							{Object.entries(technologies).map(([name, icon]) => (
								<Tool key={name} name={name} icon={icon} />
							))}
						</ul>
					</div>

					<Heading title="Contact" />
					<Text>You can contact me through the links below.</Text>
				</div>

				<div className="flex flex-row w-96 justify-center space-x-3">
					<IconButton src={github} alt="GitHub" href="https://github.com/maruf99" />
					<IconButton src={email} alt="GitHub" href="mailto:themaruf99@gmail.com" />
				</div>
			</div>
		</div>
	);
}
