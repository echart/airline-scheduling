import { useReducer } from 'react';
import PropTypes from 'prop-types';

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return { ...state, offset: state.offset + state.limit };
    case 'prev':
      return { ...state, offset: state.offset - state.limit };
    case 'update':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const usePagination = (limit = 10, offset = 0) => {
  const [state, dispatch] = useReducer(reducer, { offset, limit });

  return {
    limit: state.limit,
    offset: state.offset,
    asParams: `limit=${state.limit}&offset=${state.offset}`,
    actions: {
      next: () => dispatch({ type: 'next ' }),
      prev: () => dispatch({ type: 'prev ' }),
      update: (payload) => dispatch({ type: 'update ', payload }),
    },
  };
};

usePagination.propTypes = {
  offset: PropTypes.number,
  limit: PropTypes.number,
};
