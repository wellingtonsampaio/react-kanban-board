/*
 * BoardContainer reducer returns a new state for the component.
 */

import { fromJS } from 'immutable';
import {
  LOAD_LISTS_SUCCESS,
  LOAD_LISTS_FAILURE,
} from './constants';

// Component initial state
const initialState = fromJS({
  lists: {},
});

function boardContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTS_SUCCESS:
      // on success, assign the lists to the state
      return state.set('lists', action.lists);
    case LOAD_LISTS_FAILURE:
      // on success, reset the lists to empty
      return state.set('lists', {});
    default:
      return state;
  }
}

export default boardContainerReducer;
