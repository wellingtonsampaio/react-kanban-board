import expect from 'expect';
import {
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  addTask,
  deleteTask,
} from '../actions';
import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_FAILURE,
  ADD_TASK,
  DELETE_TASK,
} from '../constants';

describe('ListContainer actions', () => {
  describe('Load tasks Action', () => {
    it('should create an action to load the tasks of a list', () => {
      // Given the list
      const listId = 'TaskListId';
      const expectedAction = {
        type: LOAD_TASKS,
        listId,
      };

      // When the action is invoked
      const result = loadTasks(listId);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });

    it('should create an action to notify success when loading the tasks of the list', () => {
      // Given the loaded lists and the expected ation
      const listId = 'TaskListId';
      const tasks = [];
      const expectedAction = {
        type: LOAD_TASKS_SUCCESS,
        listId,
        tasks,
      };

      // When the action is invoked
      const result = loadTasksSuccess(listId, tasks);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });

    it('should create an action to notify failure when an error occurs loading the tasks', () => {
      // Given the error essage and the expected ation
      const listId = 'TaskListId';
      const message = 'Error';
      const expectedAction = {
        type: LOAD_TASKS_FAILURE,
        listId,
        message,
      };

      // When the action is invoked
      const result = loadTasksFailure(listId, message);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Add task Action', () => {
    it('should create an action to add task to a list', () => {
      // Given the list
      const taskList = 'TaskListId';
      const title = 'New Task Title';
      const expectedAction = {
        type: ADD_TASK,
        taskList,
        title,
      };

      // When the action is invoked
      const result = addTask(taskList, title);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });

  describe('delete task Action', () => {
    it('should create an action to delete a task', () => {
      // Given the list
      const taskList = 'TaskListId';
      const task = 'TaskId';
      const expectedAction = {
        type: DELETE_TASK,
        taskList,
        task,
      };

      // When the action is invoked
      const result = deleteTask(taskList, task);

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });
});
