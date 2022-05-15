import { useEffect, useReducer } from 'react';
import useFetchPagination from '../useFetchPagination';
import { findIndexById, isLastIndex } from './useScheduler.operations';

import { reducer } from './reducer';
import endpoints from '../../config/endpoints';
import messages from '../../config/messages';

const defaultData = {
  data: [],
  error: null,
  pagination: null,
};

const initialState = {
  initialized: false,
  aircrafts: defaultData,
  flights: defaultData,
  rotation: [],
};

export const useScheduler = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const aircrafts = useFetchPagination(endpoints.aicrafts);
  const flights = useFetchPagination(endpoints.flights);

  /*
   * action creators
   * ===================
   */
  const actions = {
    onAddRotation: (id) =>
      dispatch({ type: 'addItemIntoRotation', payload: { id } }),
    onRemoveRotation: (id) => {
      const index = findIndexById(state.rotation, id);
      const isLastItem = isLastIndex(index, state.rotation.length);

      if (isLastItem || window?.confirm(messages.rotation.confirm_remove)) {
        dispatch({ type: 'removeItemFromRotation', payload: { id } });
      }
    },
    onSelectAircraft: (id) => {
      /* if it had how to save the rotation,
        should retrieve it here and pass as payload.
      */
      dispatch({
        type: 'setActiveAircraft',
        payload: { id },
      });
    },
    onChangeDate: (value) => {
      /* if it had how to change the current day
        should save the current rotation and get the state.rotation for the selected day
      */
      return null;
    },
  };

  useEffect(() => {
    /*
     * initializes the scheduler
     * adding the data to the state after return from useAircraft/Flight hook
     * ===================
     */
    if (state.initialized) return;

    const hasAircrafts = aircrafts.data?.length;
    const hasFlights = flights.data?.length;

    if (hasAircrafts && hasFlights) {
      dispatch({
        type: 'init',
        payload: {
          aircrafts: {
            ...aircrafts,
            active: aircrafts.data[0].ident,
          },
          flights,
        },
      });
    }
  }, [aircrafts, flights]);

  return {
    ...state,
    actions,
  };
};
