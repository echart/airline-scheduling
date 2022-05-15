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
          selected={selectedId === aircraft.ident}
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
      ident: PropTypes.string.isRequired,
      utilization: PropTypes.number,
    })
  ),
  selectedId: PropTypes.string,
  onSelect: PropTypes.func,
};
