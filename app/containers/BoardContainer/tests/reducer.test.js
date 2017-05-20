import expect from 'expect';
import boardContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('boardContainerReducer', () => {
  it('returns the initial state', () => {
    expect(boardContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
