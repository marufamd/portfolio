import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ICONS, type Project as ProjectType } from '../util/config';
import LinkButton from './LinkButton';
import ToolButton from './ToolButton';

export default function ProjectCard({ name, description, thumbnail, github, url, technologies }: ProjectType) {
	return (
		<div
			className="
        flex container 
        rounded-3xl 
        bg-gray-200 
        dark:bg-neutral-900
        drop-shadow-lg"
		>
			<img src={thumbnail} className="hidden md:block w-48 h-48 py-4 pl-4" alt={name} />
			<div className="flex flex-col space-y-1 p-4">
				<h2 className="text-lg font-bold">{name}</h2>
				<h3 className="text-sm">{description}</h3>
				<div
					className="
				flex
				flex-wrap
				gap-2
				pt-2
				"
				>
					{technologies.map((t) => {
						return <ToolButton key={t} name={t} Icon={ICONS[t]} className="bg-red-500 text-white" />;
					})}
				</div>
				<div
					className="
				flex
				flex-wrap
				gap-2
				pt-2
				"
				>
					<LinkButton
						text="Github"
						Icon={FaGithub}
						href={github}
						className="
					text-white
					dark:text-neutral-900
					bg-neutral-900
					dark:bg-white
					"
					/>
					{url && (
						<LinkButton
							text="Site Link"
							Icon={FaExternalLinkAlt}
							href={url}
							className="
							bg-gray-400
							text-white
							"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
