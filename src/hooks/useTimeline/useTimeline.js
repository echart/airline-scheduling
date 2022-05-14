import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  formatFlightAsTimelineItem,
  addFlightTurnaroundTime,
} from '../../utils/timeline';

export const useTimeline = (flights = []) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timeline = [];

    if (!flights) return setItems([]);

    for (const flight of flights) {
      timeline.push(formatFlightAsTimelineItem(flight));
      timeline.push(addFlightTurnaroundTime(flight));
    }

    setItems(timeline);
  }, [flights]);

  return items;
};

useTimeline.propTypes = {
  flights: PropTypes.array,
};
