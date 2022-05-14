import PropTypes from 'prop-types';
import AircraftCard from '../AircraftCard';
import List from '../../List';

export const AircraftCardList = ({
  aircrafts = [],
  selectedId,
  onSelect = () => null,
}) => {
  return (
    <List
      items={aircrafts.map((aircraft) => (
        <AircraftCard
          {...aircraft}
          id={aircraft.ident}
          selected={selectedId === aircraft.id}
          onSelect={onSelect}
        />
      ))}
    ></List>
  );
};

AircraftCardList.propTypes = {
  aircrafts: PropTypes.arrayOf(
    //based on AircraftCard component
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      utilization: PropTypes.number,
    })
  ),
  selectedId: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};
