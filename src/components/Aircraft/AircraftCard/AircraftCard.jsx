import PropTypes from 'prop-types';
import Button from '../../Button';
import './AircraftCard.scss';

export const AircraftCard = ({
  ident,
  utilization = 0,
  onSelect = () => null,
  selected = false,
}) => (
  <Button
    testId='aircraft-card'
    onClick={() => onSelect(ident)}
    className={`
      aircraft
      ${selected && `aircraft--selected`}
      ${utilization > 50 && `aircraft--half`}
      ${utilization === 100 && `aircraft--full`}
    `}
  >
    <h3 className="aircraft__name">
      <strong>{ident}</strong>
    </h3>
    <p className="aircraft__utilization">{utilization}%</p>
  </Button>
);

AircraftCard.propTypes = {
  ident: PropTypes.string.isRequired,
  utilization: PropTypes.number,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};
