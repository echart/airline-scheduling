export const TIME_FULLDAY = 86400;
export const TIME_TURNAROUND = 1200;

/**
 *
 * return the current left position of the time provided
 *  23:59 = 100% of the day
 *  09:00 = x
 * ====================
 * */
export const getItemLeftPosition = (departureTime) =>
  (departureTime * 100) / TIME_FULLDAY;

/**
 *
 * return the current width between left(departure) and right(arrival)
 * ====================
 * */
export const getItemWidth = (departureTime, arrivalTime) =>
  getItemLeftPosition(arrivalTime) - getItemLeftPosition(departureTime);

/**
 *
 * return a flight item to a valid TimelineItem.jsx props format
 * ====================
 * */
export const formatFlightAsTimelineItem = (flight) => ({
  ...flight,
  left: getItemLeftPosition(flight.departuretime),
  width: getItemWidth(flight.departuretime, flight.arrivaltime),
  isFlightItem: true,
});

/**
 *
 * based on the last flight
 * return a turnaround time to be rendered at timeline
 * ====================
 * */
export const addFlightTurnaroundTime = (flight) => ({
  departuretime: flight.arrivaltime,
  arrivaltime: flight.arrivaltime + TIME_TURNAROUND,
  left: getItemLeftPosition(flight.arrivaltime),
  width: getItemWidth(flight.arrivaltime, flight.arrivaltime + TIME_TURNAROUND),
  isFlightItem: false,
});
