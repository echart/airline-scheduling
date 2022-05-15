import useFetch from '../useFetch';
import { usePagination } from '../usePagination/usePagination';

export const useFetchPagination = (endpoint) => {
  const pagination = usePagination();
  const URL = `${endpoint}?${pagination.asParams}`;

  let req = useFetch(URL);

  return {
    loading: req.loading,
    error: req.error,
    data: req?.response || [],
    pagination,
  };
};
