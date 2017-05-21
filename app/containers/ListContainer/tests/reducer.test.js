import expect from 'expect';
import listContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('listContainerReducer', () => {
  it('returns the initial state', () => {
    expect(listContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
