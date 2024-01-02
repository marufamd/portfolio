import { PROJECTS } from '../../util/config';
import ProjectCard from '../ProjectCard';


export default function Projects({ active }: { active: boolean; }) {
    return active ? (
        <div className="container flex flex-col justify-center gap-3">
            {PROJECTS.map(((p, i) => {
                return <ProjectCard key={i} {...p} />;
            }))}
        </div>
    ) : null;
}