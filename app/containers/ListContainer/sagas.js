/*
 * ListContainer sagas intercepts actions and perform async processing.
 */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOAD_TASKS } from './constants';
import { loadTasksSuccess, loadTasksFailure } from './actions';
import tasksApiService from '../../services/tasksApiService';

function* loadTasks(action) {
  try {
    // Wait until the tasks are loaded
    const tasks = yield call(tasksApiService.list, action.listId);

    // Then dispatch the action to notify the success
    yield put(loadTasksSuccess(action.listId, tasks.items || []));
  } catch (e) {
    // Or dispatch the action to notify the failure
    yield put(loadTasksFailure(action.listId, e.message));
  }
}

export function* loadTasksSaga() {
  // Take every request to load tasks (there could be many instances of lists)
  yield* takeEvery(LOAD_TASKS, loadTasks);
}

// All sagas to be loaded
export default [
  loadTasksSaga,
];
