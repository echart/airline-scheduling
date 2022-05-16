/*
 * calculate the current page
 * ============
 */
export const calculateCurrentPage = (offset) => {
  return offset / 20 + 1;
};
/*
 * calculate the total of pages
 * ============
 */
export const calculateTotalPages = (limit, total) =>
  Math.ceil(total / limit) || 0;
