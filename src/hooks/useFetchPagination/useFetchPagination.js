import { useEffect, useState } from 'react';
import useFetch from '../useFetch';
import { usePagination } from '../usePagination/usePagination';

export const useFetchPagination = (endpoint) => {
  const [state, setState] = useState();
  const pagination = usePagination();
  const URL = `${endpoint}?${pagination.asParams}`;

  let req = useFetch(URL);

  useEffect(() => {
    const tmp = {
      loading: req.loading,
      error: req.error,
      data: req?.response?.data || [],
      pagination: {
        ...pagination,
        ...req?.response?.pagination,
      },
    };

    setState(tmp)
  // eslint-disable-next-line
  }, [req]);

  return state;
};
