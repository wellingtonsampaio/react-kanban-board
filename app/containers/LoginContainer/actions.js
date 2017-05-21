/*
 * LoginContainer actions
 */

import {
  AUTHORIZE_USER,
  AUTHORIZE_USER_FAILURE,
} from './constants';

// Start a user authorizion process
export function authorizeUser() {
  return {
    type: AUTHORIZE_USER,
  };
}

// Notified a failure in the user authorization process
export function authorizeFailure() {
  return {
    type: AUTHORIZE_USER_FAILURE,
  };
}
