import { useEffect, useState } from 'react';
import {
  formatFlightAsTimelineItem,
  addFlightTurnaroundTime,
} from '../../utils/timeline';

export const useTimeline = (flights = []) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const empty = [];

    if (!flights) return setItems(empty);

    flights.map((flight) => {
      empty.push(formatFlightAsTimelineItem(flight));
      empty.push(addFlightTurnaroundTime(flight));
    });

    setItems(empty);
  }, [flights]);

  return items;
};
