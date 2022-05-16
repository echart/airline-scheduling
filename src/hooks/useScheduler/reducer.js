import * as operations from './useScheduler.operations';

export const reducer = (state, action) => {
  switch (action.type) {
    /*
     * init
     * add the data retrieved from API into the state
     * ============
     */
    case 'init':
      return {
        ...state,
        ...action.payload,
        initialized: true,
      };
    /*
     * updateFlights
     * ============
     */
    case 'updateFlights':
      return {
        ...state,
        flights: { ...action.payload },
      };
    /*
     * updateAircrafts
     * ============
     */
    case 'updateAircrafts':
      return {
        ...state,
        aircrafts: { ...action.payload },
      };
    /*
     * addItemIntoRotation
     * add item into the current selected aircraft rotation
     * ============
     */
    case 'addItemIntoRotation':
      return {
        ...state,
        rotation: operations.addIntoRotation(
          state.rotation,
          operations.findById(state.flights.data, action.payload.id)
        ),
        flights: {
          ...state.flights,
          data: operations.removeFlightFromArray(
            state.flights.data,
            action.payload.id
          ),
        },
      };
    /*
     * removeItemFromRotation
     * remove item from the current selected aircraft rotation
     * and add it back to available flight list
     * ============
     */
    case 'removeItemFromRotation':
      const removeState = operations.removeFlightFromRotation(
        state.rotation,
        action.payload.id
      );

      return {
        ...state,
        rotation: removeState.rotation,
        flights: {
          ...state.flights,
          data: [...removeState.flights, ...state.flights.data],
        },
      };
    /*
     * setActiveAircraft
     * set active aircraft to select rotation
     * ============
     */
    case 'setActiveAircraft':
      if (state.aircrafts.active === action.payload.id)
        return state;

      return {
        ...state,
        aircrafts: {
          ...state.aircrafts,
          active: action.payload.id,
        },
        rotation: [],
      };
    /*
     * default
     * ============
     */
    default:
      throw new Error();
  }
};
