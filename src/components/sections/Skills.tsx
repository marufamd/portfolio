import { ICONS } from '../../util/config';
import Section from '../Section';
import ToolCard from '../ToolCard';

export default function Skills() {
	return (
		<Section name="Skills" className="pb-10">
			<div className="flex flex-col gap-8">
				<p className="text-md md:text-lg">
					I have attained proficiency in these industry-standard languages and technologies through using them in my projects.
				</p>
				<div
					className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        "
				>
					{Object.entries(ICONS).map(([name, Icon]) => {
						return (
							<ToolCard
								key={name}
								name={name}
								Icon={Icon}
							/>
						);
					})}
				</div>
			</div>
		</Section>
	);
}
