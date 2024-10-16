export default function Section({ name, className, children }: { name: string; className?: string; children?: React.ReactNode }) {
    return (
        <section id={name.toLowerCase()} className={`px-10 lg:px-40 pt-10 flex flex-col justify-start ${className}`}>
            <h1 className="text-[60px] font-['Afacad_Flux'] font-semibold">
                {name}
            </h1>
            {children}
        </section>
    );
}