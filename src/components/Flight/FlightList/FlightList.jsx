import PropTypes from 'prop-types';
import { Fragment } from 'react';
import List from '../../List';
import FlightCard from '../FlightCard';
import Pagination from '../../Pagination';

import messages from '../../../config/messages';
import { getFlightAvailability } from '../../../utils/rotation';

import {
  calculateTotalPages,
  calculateCurrentPage,
} from '../../../utils/pagination';

export const FlightList = ({
  flights = [],
  rotation = [],
  onAddRotation = () => null,
  pagination = {},
}) => {
  const text = messages.rotation.add;

  return (
    <Fragment>
      <List
        id="flights-list"
        className="flights-list with-overflow"
        itemClassName="flights-list__item"
        items={flights.map((flight) => (
          <FlightCard
            {...flight}
            onSelect={onAddRotation}
            hoverText={text}
            disabled={!getFlightAvailability(rotation, flight)}
            testId={`flight-${flight.id}`}
          />
        ))}
      />
      <Pagination
        total={calculateTotalPages(pagination?.limit, pagination?.total)}
        currentPage={calculateCurrentPage(pagination?.offset)}
        onClickNext={() => pagination?.dispatch({ type: 'next' })}
        onClickPrev={() => pagination?.dispatch({ type: 'prev' })}
      />
    </Fragment>
  );
};

FlightList.propTypes = {
  flights: PropTypes.array,
  rotation: PropTypes.array,
  onAddRotation: PropTypes.func,
  pagination: PropTypes.shape({
    limit: PropTypes.number,
    total: PropTypes.number,
    dispatch: PropTypes.func,
  }),
};
