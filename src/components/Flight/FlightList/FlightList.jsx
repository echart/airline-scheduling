import PropTypes from 'prop-types';
import List from '../../List';
import FlightCard from '../FlightCard';

import messages from '../../../config/messages';
import { getFlightAvailability } from '../../../utils/rotation';

export const FlightList = ({
  flights = [],
  rotation = [],
  onAddRotation = () => null,
  loading = false,
}) => {
  const text = messages.rotation.add;

  if(loading) return <p>Loading</p>;

  return (
    <List
      id='flights-list'
      className='flights-list'
      itemClassName='flights-list__item'
      items={flights.map((flight) => (
        <FlightCard
          {...flight}
          onSelect={onAddRotation}
          hoverText={text}
          disabled={!getFlightAvailability(rotation, flight)}
        />
      ))}
    />
  );
};

FlightList.propTypes = {
  flights: PropTypes.array,
  rotation: PropTypes.array,
  onAddRotation: PropTypes.func,
  loading: PropTypes.bool,
};
