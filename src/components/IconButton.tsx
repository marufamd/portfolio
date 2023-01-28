

export default function IconButton({ src, alt, href }: { src: string; alt: string; href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline hover:opacity-50 hover:transition-all">
            <img src={src} alt={alt} className="w-8 h-8"/>
        </a>
    );
}