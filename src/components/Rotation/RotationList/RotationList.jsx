import PropTypes from 'prop-types';
import { Fragment } from 'react';
import messages from '../../../config/messages';
import FlightCard from '../../Flight/FlightCard';
import List from '../../List';

export const RotationList = ({ flights = [], onSelect = () => null }) => {
  const texts = messages.rotation;

  return (
    <Fragment>
      {flights.length ? (
        <List
          id='rotation-list'
          className="rotation-list"
          itemClassName="rotation-list__item"
          items={flights.map((flight) => (
            <FlightCard
              {...flight}
              onSelect={onSelect}
              hoverText={texts.remove}
            />
          ))}
        />
      ) : (
        <p>{texts.empty}</p>
      )}
    </Fragment>
  );
};

RotationList.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};
