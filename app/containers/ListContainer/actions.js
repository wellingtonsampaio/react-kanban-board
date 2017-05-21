/*
 * ListContainer actions
 */

import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_FAILURE,
} from './constants';

// Load the tasks of the given Task List
export function loadTasks(listId) {
  return {
    type: LOAD_TASKS,
    listId,
  };
}

// Notifies the tasks of a Task List were loaded successfully
export function loadTasksSuccess(listId, tasks) {
  return {
    type: LOAD_TASKS_SUCCESS,
    listId,
    tasks,
  };
}

// Notifies the tasks of a Task List were not loaded properly
export function loadTasksFailure(listId, message) {
  return {
    type: LOAD_TASKS_FAILURE,
    message,
  };
}
