import { PROJECTS } from '../../util/config';
import ProjectCard from '../ProjectCard';
import Section from '../Section';

export default function Projects() {
    return (
        <Section name="Projects">
            <div className="mt-3 flex flex-col gap-5">
            {PROJECTS.map(((p, i) => {
                return <ProjectCard key={i} {...p} />;
            }))}
            </div>
        </Section>
    );
}