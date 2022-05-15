import PropTypes from 'prop-types';
import AircraftCard from '../AircraftCard';
import List from '../../List';
import { getUtilization } from '../../../utils/rotation';

export const AircraftCardList = ({
  aircrafts = [],
  active,
  onSelect = () => null,
  rotation = [],
}) => {
  return (
    <List
      items={aircrafts.map((aircraft) => (
        <AircraftCard
          {...aircraft}
          selected={active === aircraft.ident}
          onSelect={onSelect}
          utilization={getUtilization(rotation)}
        />
      ))}
    />
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
  active: PropTypes.string,
  onSelect: PropTypes.func,
  utilization: PropTypes.number,
};
