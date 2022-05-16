import { useReducer } from 'react';
import PropTypes from 'prop-types';

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return {
        ...state,
        offset: state.offset + state.limit,
        page: state.page + 1,
      };
    case 'prev':
      return {
        ...state,
        offset: state.offset - state.limit,
        page: state.page - 1,
      };
    case 'update':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const usePagination = (limit = 20, offset = 0) => {
  const [state, dispatch] = useReducer(reducer, { offset, limit });

  return {
    limit: state.limit,
    offset: state.offset,
    asParams: `limit=${state.limit}&offset=${state.offset}`,
    dispatch,
  };
};

usePagination.propTypes = {
  offset: PropTypes.number,
  limit: PropTypes.number,
};
