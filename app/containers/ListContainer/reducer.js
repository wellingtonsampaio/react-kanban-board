/*
 * ListContainer reducer returns a new state for the component.
 */

import { fromJS } from 'immutable';
import {
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_FAILURE,
} from './constants';

// Component initial state
const initialState = fromJS({});

function listContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS_SUCCESS:
      // on success loading tasks, assign them to their Task List on the state
      return state.set(action.listId, action.tasks);
    case LOAD_TASKS_FAILURE:
      // on failure, set the tasks of the Task List to empty
      return state.set(action.listId, []);
    default:
      return state;
  }
}

export default listContainerReducer;
