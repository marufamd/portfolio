import { EXPERIENCE } from '../../util/config';
import { formatMonth } from '../../util/dates';
import Section from '../Section';
import { Timeline, TimelineItem } from '../Timeline';

export default function Experience() {
	return (
		<Section id="experience" title="Experience">
			<Timeline>
				{EXPERIENCE.map((job) => (
					<TimelineItem
						key={`${job.company}-${job.start}`}
						title={job.company}
						subtitle={job.role}
						dates={`${formatMonth(job.start)} – ${job.end ? formatMonth(job.end) : 'Present'}`}
						current={!job.end}
					>
						<p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
							{job.location} · {job.workplace}
						</p>
					</TimelineItem>
				))}
			</Timeline>
		</Section>
	);
}
