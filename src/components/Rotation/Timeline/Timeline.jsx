import PropTypes from 'prop-types';
import TimelineItem from './TimelineItem';
import Subtitle from './Subtitle';
import Markers from './Markers';

import './Timeline.scss';

export const Timeline = ({ items = [] }) => {
  return (
    <section className="timeline-container">
      <ul className="timeline">
        {items.map((item, index) => (
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
