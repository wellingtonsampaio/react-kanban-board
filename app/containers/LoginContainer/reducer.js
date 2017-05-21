/*
 * LoginContainer reducer returns a new state for the component.
 */

import { fromJS } from 'immutable';
import {
} from './constants';

// Component initial state
const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default loginContainerReducer;
