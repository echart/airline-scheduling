import './Markers.scss';
import List from '../../../List';
import config from '../../../../config/config';

export const Markers = () => {
  const TIMELINE_MARKERS = config.markers;

  return (
    <List
      items={TIMELINE_MARKERS}
      className="timeline-marker"
      itemClassName="timeline-marker__item"
    />
  );
};
