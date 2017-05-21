/*
 * BoardContainer sagas intercepts actions and perform async processing.
 */

import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOAD_LISTS } from './constants';
import { loadListsSuccess, loadListsFailure } from './actions';
import taskListsApiService from '../../services/taskListsApiService';

// Constants for the application's Kanban Lists
const TODO_LIST_ID = 'react-kanban-board-todo';
const DOING_LIST_ID = 'react-kanban-board-doing';
const DONE_LIST_ID = 'react-kanban-board-done';

function* loadLists() {
  try {
    // Wait until all the user's lists are loaded
    const listsResult = yield call(taskListsApiService.list);
    const lists = listsResult.items || [];

    // Iterate through the list to check if the application's lists exist
    let todoList;
    let doingList;
    let doneList;
    lists.forEach(list => {
      switch (list.title) {
        case TODO_LIST_ID:
          todoList = list;
          break;
        case DOING_LIST_ID:
          doingList = list;
          break;
        case DONE_LIST_ID:
          doneList = list;
          break;
        default:
          break;
      }
    });

    // If the application To-do list does not exist with the expected title, create
    if (!todoList) {
      todoList = yield call(taskListsApiService.insert, TODO_LIST_ID);
    }

    // If the application Doing list does not exist with the expected title, create
    if (!doingList) {
      doingList = yield call(taskListsApiService.insert, DOING_LIST_ID);
    }

    // If the application Done list does not exist with the expected title, create
    if (!doneList) {
      doneList = yield call(taskListsApiService.insert, DONE_LIST_ID);
    }

    // On success, create an action to nofify the event
    yield put(loadListsSuccess({ todoList, doingList, doneList })
    );
  } catch (e) {
    // Or dispatch the action to notify the failure
    yield put(loadListsFailure(e.message));
  }
}

export function* loadListsSaga() {
  // Take the latest request to load the Kanban Lists
  yield* takeLatest(LOAD_LISTS, loadLists);
}

// All sagas to be loaded
export default [
  loadListsSaga,
];
