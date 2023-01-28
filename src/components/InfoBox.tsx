import avatar from '../assets/avatar.png';
import email from '../assets/icons/email.png';
import github from '../assets/icons/github.png';
import IconButton from './IconButton';

export default function InfoBox() {
	return (
		<div className="container mx-auto h-screen flex flex-col justify-center items-center">
			<div
				className="
                    container
                    h-96
                    w-80 
                    rounded-xl 
                    drop-shadow-lg 
                  bg-neutral-800
                    flex 
                    flex-col 
                    justify-center 
                    items-center
                    space-y-5
                "
			>
				<img src={avatar} className="h-40 w-40 rounded-full" />
				<div className="space-y-1">
					<h1
						className="
                        text-white
                        text-6xl 
                        font-bold 
                        text-center 
                        align-middle
                    "
					>
						Maruf
					</h1>
					<h2
						className="
                        text-white
                        text-xl
                        font-light
                        text-center 
                        align-middle"
					>
						Programmer
					</h2>
				</div>
				<div className="flex items-center space-x-3">
					<IconButton src={github} alt="GitHub" href="https://github.com/maruf99" />
                    <IconButton src={email} alt="GitHub" href="mailto:themaruf99@gmail.com" />
				</div>
			</div>
		</div>
	);
}
