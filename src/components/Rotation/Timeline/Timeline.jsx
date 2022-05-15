import PropTypes from 'prop-types';
import TimelineItem from './TimelineItem';
import Subtitle from './Subtitle';
import Markers from './Markers';
import useTimeline from '../../../hooks/useTimeline';

import './Timeline.scss';

export const Timeline = ({ items = [] }) => {
  const data = useTimeline(items);

  return (
    <section className="timeline-container">
      <ul className="timeline">
        {data.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </ul>

      <Markers />
      <Subtitle />
    </section>
  );
};

Timeline.propTypes = {
  items: PropTypes.array,
};
