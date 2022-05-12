import './Markers.scss';
import List from '../../../List';

export const Markers = () => {
  const TIMELINE_MARKERS = ['00:00', '06:00', '12:00', '18:00', '23:59'];

  return (
    <List
      items={TIMELINE_MARKERS}
      className="timeline-marker"
      itemClassName="timeline-marker__item"
    />
  );
};
