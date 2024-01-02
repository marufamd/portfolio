import { ICONS } from '../../util/config';
import ToolButton from '../ToolButton';

export default function About({ active }: { active: boolean }) {
	return active ? (
		<div className="flex flex-col items-center gap-8">
            <p className="text-md md:text-lg">
				Throughout my years of programming, I have attained proficiency in these industry-standard
                languages and technologies by using them in my projects.
			</p>
			<div
				className="
        grid
        md:grid-cols-3
        gap-3
        "
			>
				{Object.entries(ICONS).map(([name, Icon]) => {
					return (
						<ToolButton
							key={name}
							name={name}
							Icon={Icon}
							className="
                h-10
                text-xl
                "
						/>
					);
				})}
			</div>
		</div>
	) : null;
}
