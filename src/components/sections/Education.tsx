import { EDUCATION } from '../../util/config';
import Section from '../Section';
import { Timeline, TimelineItem } from '../Timeline';

export default function Education() {
	return (
		<Section id="education" title="Education">
			<Timeline>
				{EDUCATION.map((entry) => (
					<TimelineItem
						key={entry.school}
						title={entry.school}
						subtitle={entry.program}
					/>
				))}
			</Timeline>
		</Section>
	);
}
