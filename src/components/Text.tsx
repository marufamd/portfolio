
export default function Text({ children }: { children: React.ReactNode }) {
	return (
		<p
			className="
                        text-white
                        text-md 
                        font-light
                    "
		>
			{children}
		</p>
	);
}