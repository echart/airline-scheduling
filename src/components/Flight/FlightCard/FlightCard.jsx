import PropTypes from 'prop-types';
import Button from '../../Button';
import { formatTime } from '../../../utils/format';
import './FlightCard.scss';

export const FlightCard = ({
  id,
  onSelect,
  origin,
  departuretime,
  destination,
  arrivaltime,
  disabled,
  hoverText,
  testId = 'flight-card',
  reason='should be this etc etc',
}) => (
  <Button
    testId={testId}
    className="card flight-card"
    onClick={() => onSelect(id)}
    disabled={disabled}
  >
    <h3 className="card__title flight">
      Flight: <strong>{id}</strong>
    </h3>
    <div className="card__container">
      <div className="station departure">
        <p className="station__name">{origin}</p>
        <p className="station__time" data-time={departuretime}>
          {formatTime(departuretime)}
        </p>
      </div>
      <span>{'>'}</span>
      <div className="station arrival">
        <p className="station__name">{destination}</p>
        <p className="station__time" data-time={arrivaltime}>
          {formatTime(arrivaltime)}
        </p>
      </div>
    </div>

    {hoverText && (
      <span className="hover-text">
        <p>{hoverText}</p>
      </span>
    )}

    <span className="reason">
      <p>{reason}</p>
    </span>
  </Button>
);

FlightCard.propTypes = {
  id: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  departuretime: PropTypes.number.isRequired,
  arrivaltime: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  hoverText: PropTypes.string,
  testId: PropTypes.string,
};
