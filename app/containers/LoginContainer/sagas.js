/*
 * LoginContainer sagas intercepts actions and perform async processing.
 */

import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AUTHORIZE_USER } from './constants';
import { authorizeFailure } from './actions';
import authApiService from '../../services/authApiService';

// Interact with the API to authorize a user
function* authorizeUser() {
  try {
    // Wait until the authorization process is completed
    yield call(authApiService.authorize);

    // On successfull authorization, navigate to the board page
    yield put(push('/board'));
  } catch (e) {
    // Or  dispatch the action to notify the failure
    yield put(authorizeFailure());
  }
}

export function* authorizeUserSaga() {
  // Take the latest if multiple actions of this type were fired
  yield* takeLatest(AUTHORIZE_USER, authorizeUser);
}

// All sagas to be loaded
export default [
  authorizeUserSaga,
];
