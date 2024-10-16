export default function Section({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <section className="p-10 flex flex-col justify-start">
            <h1 id={`#${name.toLowerCase()}`} className="text-[60px] font-['Afacad_Flux'] font-semibold">
                {name}
            </h1>
            {children}
        </section>
    );
}