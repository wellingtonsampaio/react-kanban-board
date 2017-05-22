import expect from 'expect';
import {
  loadLists,
  loadListsSuccess,
  loadListsFailure,
  moveTask,
} from '../actions';
import {
  LOAD_LISTS,
  LOAD_LISTS_SUCCESS,
  LOAD_LISTS_FAILURE,
  MOVE_TASK,
} from '../constants';

describe('BoardContainer actions', () => {
  describe('Load Lists Action', () => {
    it('should create an action to load the lists', () => {
      // Given the intention to load the kanban board lists and the expected actiona
      const expectedAction = {
        type: LOAD_LISTS,
      };

      // When the action is invoked
      const result = loadLists();

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });

    it('should create an action to notify success when loading the lists', () => {
      // Given the loaded lists and the expected ation
      const lists = {
        todoList: {},
        doingList: {},
        doneList: {},
      };
      const expectedAction = {
        type: LOAD_LISTS_SUCCESS,
        lists,
      };

      // When the action is invoked
      const result = loadListsSuccess(lists);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });

    it('should create an action to notify failure when an error occurs loading the lists', () => {
      // Given the error essage and the expected ation
      const message = 'Error';
      const expectedAction = {
        type: LOAD_LISTS_FAILURE,
        message,
      };

      // When the action is invoked
      const result = loadListsFailure(message);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Moave Task Action', () => {
    it('should create an action to move a task to another list', () => {
      // Given the task, the source list and the target list
      const sourceTasklist = 'sourceListId';
      const destinationTasklist = 'destinationListId';
      const task = {};
      const expectedAction = {
        type: MOVE_TASK,
        sourceTasklist,
        destinationTasklist,
        task,
      };

      // When the action is invoked
      const result = moveTask(sourceTasklist, destinationTasklist, task);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });
});
