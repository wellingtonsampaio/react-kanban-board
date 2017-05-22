/*
 * ListContainer sagas intercepts actions and perform async processing.
 */

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOAD_TASKS, DELETE_TASK, ADD_TASK } from './constants';
import { loadTasks, loadTasksSuccess, loadTasksFailure } from './actions';
import { listTasks, deleteTask, insertTask } from '../../services/tasksApiService';

// Sagas

export function* loadTasksSaga() {
  // Take every request to load tasks (there could be many instances of lists)
  yield* takeEvery(LOAD_TASKS, loadTasksSagaAction);
}

export function* deleteTaskSaga() {
  // Take every request to delete a task
  yield* takeEvery(DELETE_TASK, deleteTaskSagaAction);
}

export function* addTaskSaga() {
  // Take every request to add a new task
  yield* takeEvery(ADD_TASK, addTaskSagaAction);
}

// Functions

function* loadTasksSagaAction(action) {
  try {
    // Wait until the tasks are loaded
    const tasks = yield call(listTasks, action.listId);

    // Then dispatch the action to notify the success
    yield put(loadTasksSuccess(action.listId, tasks.items || []));
  } catch (e) {
    // Or dispatch the action to notify the failure
    yield put(loadTasksFailure(action.listId, e.message));
  }
}

function* deleteTaskSagaAction(action) {
  try {
    // Wait until the task is deleted
    yield call(deleteTask, action.taskList, action.task);
  } finally {
    // reload the list
    yield put(loadTasks(action.taskList));
  }
}

function* addTaskSagaAction(action) {
  try {
    // Wait until the task is created
    yield call(insertTask, action.taskList, action.title);
  } finally {
    // reload the list
    yield put(loadTasks(action.taskList));
  }
}

// All sagas to be loaded

export default [
  loadTasksSaga,
  deleteTaskSaga,
  addTaskSaga,
];
