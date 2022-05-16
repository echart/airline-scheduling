import { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return { response: { ...action.payload }, error: null };
    case 'error':
      return { response: null, error: action.payload };
    default:
      return state;
  }
};

const fetchData = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();

  return json;
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(url)
      .then((res) => dispatch({ type: 'setData', payload: res }))
      .catch((e) => dispatch({ type: 'error', payload: e }));
  }, [url]);

  return state;
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
