import PropTypes from 'prop-types';
import Button from '../../Button';
import './AircraftCard.scss';

export const AircraftCard = ({
  id,
  utilization = 0,
  onSelect = () => null,
  selected = false,
}) => (
  <Button
    testId='aircraft-card'
    onClick={() => onSelect(id)}
    className={`
      aircraft
      ${selected && `aircraft--selected`}
      ${utilization > 50 && `aircraft--half`}
      ${utilization === 100 && `aircraft--full`}
    `}
  >
    <h3 className="aircraft__name">
      <strong>{id}</strong>
    </h3>
    <p className="aircraft__utilization">{utilization}%</p>
  </Button>
);

AircraftCard.propTypes = {
  id: PropTypes.string.isRequired,
  utilization: PropTypes.number,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};
