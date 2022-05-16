import { Fragment } from 'react';
import PropTypes from 'prop-types';
import AircraftCard from '../AircraftCard';
import List from '../../List';
import { getUtilization } from '../../../utils/rotation';
import Pagination from '../../Pagination';

import {
  calculateTotalPages,
  calculateCurrentPage,
} from '../../../utils/pagination';

export const AircraftCardList = ({
  aircrafts = [],
  active,
  onSelect = () => null,
  rotation = [],
  pagination = {},
}) => {
  return (
    <Fragment>
      <List
        id="aircraft-list"
        className="aircraft-list"
        itemClassName="aircraft-list__item"
        items={aircrafts.map((aircraft) => (
          <AircraftCard
            {...aircraft}
            selected={active === aircraft.ident}
            onSelect={onSelect}
            utilization={getUtilization(rotation)}
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
  pagination: PropTypes.shape({
    limit: PropTypes.number,
    total: PropTypes.number,
    dispatch: PropTypes.func,
  }),
};
