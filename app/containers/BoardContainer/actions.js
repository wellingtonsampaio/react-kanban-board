/*
 * BoardContainer actions
 */

import {
 LOAD_LISTS,
 LOAD_LISTS_SUCCESS,
 LOAD_LISTS_FAILURE,
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
