import expect from 'expect';
import boardContainerReducer from '../reducer';
import { fromJS } from 'immutable';
import {
  LOAD_LISTS_SUCCESS,
  LOAD_LISTS_FAILURE,
} from '../constants';

describe('boardContainerReducer', () => {
  it('returns the initial state', () => {
    expect(boardContainerReducer(undefined, {})).toEqual(fromJS({ lists: {} }));
  });

  describe('Load Lists Action', () => {
    it('should return a new state with the action lists on success', () => {
      // Given the success action
      const lists = {
        todoList: { id: 1 },
        doingList: { id: 2 },
        doneList: { id: 3 },
      };
      const action = {
        type: LOAD_LISTS_SUCCESS,
        lists,
      };

      // When the reducer is executed
      const result = boardContainerReducer(undefined, action);

      // Then the new state contains the lists
      expect(result.toJS()).toEqual({ lists });
    });

    it('should return a new state with an empty list on failure', () => {
      // Given the failure action
      const action = {
        type: LOAD_LISTS_FAILURE,
      };

      // When the reducer is executed
      const result = boardContainerReducer(undefined, action);

      // Then the new state contains an empty lists
      expect(result.toJS()).toEqual({ lists: {} });
    });
  });
});
