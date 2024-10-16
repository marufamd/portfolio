import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ICONS, type Project as ProjectType } from '../util/config';
import LinkButton from './LinkButton';
import ToolButton from './ToolButton';

export default function ProjectCard({ name, description, thumbnail, github, url, technologies }: ProjectType) {
	return (
		<div
			className="
        flex
        rounded-3xl 
        bg-gray-200 
        dark:bg-neutral-900
        drop-shadow-lg"
		>
			<img src={thumbnail} className="hidden md:block w-48 h-48 py-4 pl-4" alt={name} />
			<div className="flex flex-col space-y-2 p-4">
				<div className="flex flex-row gap-2 items-center">
					<img src={thumbnail} className="w-6 h-6 md:hidden" alt={name} />
					<h2 className="text-[30px] font-semibold font-['Afacad_Flux']">{name}</h2>
				</div>
				<h3 className="text-md">{description}</h3>
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
