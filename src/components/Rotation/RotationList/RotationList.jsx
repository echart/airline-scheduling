import PropTypes from 'prop-types';
import messages from '../../../config/messages';
import FlightCard from '../../Flight/FlightCard';
import List from '../../List';

export const RotationList = ({ flights = [], onSelect = () => null }) => {
  const texts = messages.rotation;

  if(!flights.length) return <p>{texts.empty}</p>

  return (
    <List
      items={flights.map((flight) => (
        <FlightCard {...flight} onSelect={onSelect} hoverText={texts.remove} />
      ))}
    ></List>
  );
};

RotationList.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};
