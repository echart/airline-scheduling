/**
 * find the item of the given id inside items
 * ===================
 */
export const findById = (items, id) => items?.find((item) => item.id === id);

/**
 * find the index of the given id inside items
 * ===================
 */
export const findIndexById = (items, id) =>
  items?.findIndex((item) => item.id === id);

/**
 * return if the given index equal the length of array
 * ===================
 */
export const isLastIndex = (index, length) => index === length - 1;

/**
 * remove flight from the flight list
 * ===================
 */
export const removeFlightFromArray = (flights, id) =>
  flights.filter((flight) => flight.id !== id);

/**
 * add item on end of rotation
 * ===================
 */
export const addIntoRotation = (items, add) => [...items, add];

/**
 * add item as first item of passed array
 * ===================
 */
export const addAsFirstItem = (items, add) => [add, ...items];

/**
 * remove the flight with the given id of the current rotation
 * ===================
 */
export const removeFlightFromRotation = (flights, id) => {
  const index = findIndexById(flights, id);
  const items = [...flights]; //create a new array from flights;

  const deletedArray = items.splice(index);

  return { rotation: items, flights: deletedArray };
};
