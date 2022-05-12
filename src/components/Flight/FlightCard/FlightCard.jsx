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
}) => (
  <Button
    testId="flight-card"
    className="card flight-card"
    onClick={onSelect}
    disabled={disabled}
  >
    <h3 className="card__title flight">
      Flight: <strong>{id}</strong>
    </h3>
    <div className="card__container">
      <div className="station departure">
        <p className="station__name">{origin}</p>
        <p className="station__time">{formatTime(departuretime)}</p>
      </div>
      <span>{'>'}</span>
      <div className="station arrival">
        <p className="station__name">{destination}</p>
        <p className="station__time">{formatTime(arrivaltime)}</p>
      </div>
    </div>
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
};
