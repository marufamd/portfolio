import { LINK_BUTTONS, RESUME_LINK, USER } from '../../util/config';
import IconButton from '../IconButton';

export default function Header() {
	return (
		<div className="bg-sunset-gradient text-white">
			<div className="p-10 lg:mx-32 flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-4 lg:space-y-0">
				<article className="basis-1/2">
					<h1 className="text-[60px] font-['Afacad_Flux'] font-semibold">Hi, I'm Maruf!</h1>
					<p className="text-md">
						I'm a Computer Science student at Toronto Metropolitan University (formerly known as Ryerson). I began programming by learning{' '}
						<span className="font-bold">JavaScript </span>
						and using the <span className="font-bold">Node.js</span> runtime to create small scripts. Since then, I've branched out to
						learning languages like <span className="font-bold">TypeScript</span>, <span className="font-bold">Python</span>,{' '}
						<span className="font-bold">Java</span>, and <span className="font-bold">C++</span> to create full-stack applications.
						<br />
						<br />
						Through my projects, I have gained experience using industry-standard tools and technologies such as{' '}
						<span className="font-bold">React</span>, <span className="font-bold">PostgreSQL</span>, and{' '}
						<span className="font-bold">Express</span>. I am currently seeking internships in order to gain more experience in the
						industry and apply the skills I have learned over the years in a real-world setting. Feel free to check out my resume!
					</p>
					<div className="flex flex-row mt-5 items-center justify-start space-x-3">
						<a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className="rounded-full text-sm font-bold px-5 py-2 outline outline-2 outline-white hover:bg-white hover:text-black transition-all"
							>
								Resume
							</button>
						</a>
						<div className="border-white border-[1px] h-10" />
						{LINK_BUTTONS.map((b, i) => {
							return <IconButton key={i} href={b.url} Icon={b.icon} />;
						})}
					</div>
				</article>
				<div className="py-4 basis-1/2 order-first lg:order-last flex items-center justify-center mt-0 ml-0">
					<img src={USER.AVATAR} width="100%" height="100%" className="block rounded-full w-48 h-48 lg:w-auto lg:h-auto" />
				</div>
			</div>
		</div>
	);
}
