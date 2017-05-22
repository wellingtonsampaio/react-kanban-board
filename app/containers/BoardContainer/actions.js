/*
 * BoardContainer actions
 */

import {
 LOAD_LISTS,
 LOAD_LISTS_SUCCESS,
 LOAD_LISTS_FAILURE,
 MOVE_TASK,
} from './constants';

// Load the Kanban Lists
export function loadLists() {
  return {
    type: LOAD_LISTS,
  };
}

// Notifies that the Kanban Lists were loaded successfully
export function loadListsSuccess(lists) {
  return {
    type: LOAD_LISTS_SUCCESS,
    lists,
  };
}

// Notifies that the Kanban Lists were not loaded properly
export function loadListsFailure(message) {
  return {
    type: LOAD_LISTS_FAILURE,
    message,
  };
}

//  Move a task to another list
export function moveTask(sourceTasklist, destinationTasklist, task) {
  return {
    type: MOVE_TASK,
    sourceTasklist,
    destinationTasklist,
    task,
  };
}
