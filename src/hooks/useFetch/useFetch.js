import { useEffect, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return { response: action.payload, loading: false, error: null };
    case 'error':
      return { response: null, loading: false, error: action.payload };
    case 'loading':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async (endpoint) => {
    dispatch({ type: 'loading', payload: true });

    const req = await fetch(endpoint);
    const json = await req.json();

    return json;
  }, []);

  useEffect(() => {
    fetchData(url)
      .then((res) => dispatch({ type: 'setData', payload: res.data }))
      .catch((e) => dispatch({ type: 'error', payload: e }));
  }, [url, fetchData]);

  return state;
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
