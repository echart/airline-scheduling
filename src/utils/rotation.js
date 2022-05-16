import config from '../config/config';
import messages from '../config/messages';

/**
 * get last flight from the given rotation:
 * ===================
 */
export const getLastFlightFromRotation = (rotation) =>
  rotation[rotation.length - 1];

/**
 * check if the flight is from the same airport as the aircraft, following the rules:
 * - Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much!
 * ===================
 */
export const isOnTheSameAirport = (rotation = [], flight) => {
  const lastRotationFlight = getLastFlightFromRotation(rotation);

  if (!lastRotationFlight) return true;

  return lastRotationFlight.destination === flight.origin;
};

/**
 * check if aircraft will be avaiable for the travel time, following the rule:
 *
 * - The turnaround time (minimum time between the end of a flight
 * and the beginning of the next one) is always 20min for our airline.
 *
 * ===================
 */
export const isTimeAvailable = (rotation = [], flight) => {
  const lastFlight = getLastFlightFromRotation(rotation);

  if (lastFlight) {
    const { arrivaltime } = lastFlight;
    const withTurnaroundTime = arrivaltime + config.turnaround_time;

    if (withTurnaroundTime > flight.departuretime) return false;
  }

  return true;
};

/**
 * check if aircraft will be on the ground at midnight
 *
 * - All aircrafts must be on the ground at midnight.
 *
 * ===================
 */
export const willBeOnTheGroundAtMidnight = (flight) => {
  return flight.arrivaltime <= config.fullday_time;
};

/**
 * check if the flight is available by applying the airport and time rules
 *
 * ===================
 */

export const getFlightAvailability = (rotation, flight) => {
  return (
    isTimeAvailable(rotation, flight) &&
    isOnTheSameAirport(rotation, flight) &&
    willBeOnTheGroundAtMidnight(flight)
  );
};

export const getReason = (rotation, flight) => {
  const reasons = messages.reasons;

  if(!isOnTheSameAirport(rotation, flight))
    return reasons.airport;
  if(!isTimeAvailable(rotation, flight))
    return reasons.time;
  else if(!willBeOnTheGroundAtMidnight(flight))
    return reasons.midnight

  return '';
}

/**
 * get flight duration
 *
 * ===================
 */

export const getFlightDuration = (flight) => {
  return flight.arrivaltime - flight.departuretime;
};

/**
 * based on rotation
 * calculate the current aircraft utilization
 *
 * ===================
 */
export const getUtilization = (rotation = []) => {
  if (!rotation.length) return 0;

  let total = 0;
  const day = config.fullday_time;

  for (const flight of rotation) {
    total += getFlightDuration(flight);
    total += config.turnaround_time; //add turnaround time;
  }

  return (total * 100) / day;
};
