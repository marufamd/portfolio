import IconButton from '../IconButton';
import { LINK_BUTTONS } from '../../util/config';

export default function About({ active }: { active: boolean }) {
	return active ? (
		<div className="flex flex-col items-center gap-8">
			<p className="text-md md:text-lg">
				I'm a first-year Computer Science student at Toronto Metropolitan University (formerly known as Ryerson). I first began programming at
				the age of 11, where I learned <span className="font-bold">JavaScript </span>
				and started creating small scripts using <span className="font-bold">Node.js</span>. I've since branched out to programming primarily
				in <span className="font-bold">TypeScript</span>, <span className="font-bold">Python</span>, and{' '}
				<span className="font-bold">Java</span>.
				<br />
				<br />
				While creating applictions using these languages, I gained experience using industry-standard tools and technologies such as{' '}
				<span className="font-bold">React</span>, <span className="font-bold">PostgreSQL</span>, and{' '}
				<span className="font-bold">Express</span>. I am currently seeking internships for the Summer 2024 period in order to gain more
				experience in the industry and apply the skills I have learned over the years in a real-world setting. You can contact me through the
				links below.
			</p>
            <div className="flex items-center justify-center space-x-3">
                {LINK_BUTTONS.map((b, i) => {
                    return <IconButton key={i} href={b.url} Icon={b.icon} />;
                })}
            </div>
		</div>
	) : null;
}
