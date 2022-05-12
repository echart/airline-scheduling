import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { formatNumberToPercentage, formatTime } from '../../../../utils/format';

export const TimelineItem = ({
  id,
  origin,
  destination,
  width,
  left,
  departuretime = 0,
  arrivaltime = 0,
  isFlightItem = false,
}) => {
  return (
    <li
      data-testid="timeline-item"
      className={`timeline__item timeline__item--${
        isFlightItem ? `flight` : `turnaround`
      }`}
      style={{
        left: formatNumberToPercentage(left),
        width: formatNumberToPercentage(width),
      }}
    >
      <p>
        {isFlightItem ? (
          <Fragment>
            Flight: {id}
            <span>Origin: {origin}</span>
            <span>Destination: {destination}</span>
            <span>
              {formatTime(departuretime)} - {formatTime(arrivaltime)}
            </span>
          </Fragment>
        ) : (
          <Fragment>
            Turnaround time
            <span>
              {formatTime(departuretime)} - {formatTime(arrivaltime)}
            </span>
          </Fragment>
        )}
      </p>
    </li>
  );
};

TimelineItem.propTypes = {
  id: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  departuretime: PropTypes.number,
  arrivaltime: PropTypes.number,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  isFlightItem: PropTypes.bool.isRequired,
};
