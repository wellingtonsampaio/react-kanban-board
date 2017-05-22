import expect from 'expect';
import {
  authorizeUser,
  authorizeFailure,
} from '../actions';
import {
  AUTHORIZE_USER,
  AUTHORIZE_USER_FAILURE,
} from '../constants';

describe('LoginContainer actions', () => {
  describe('Authorize Action', () => {
    it('should create an action to authorize the user', () => {
      // Given the intention to authorize the user
      const expectedAction = {
        type: AUTHORIZE_USER,
      };

      // When the action is invoked
      const result = authorizeUser();

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });

    it('should create an action to notify failure when authorizing the yser', () => {
      // Given an error when auhtorizing the user
      const expectedAction = {
        type: AUTHORIZE_USER_FAILURE,
      };

      // When the action is invoked
      const result = authorizeFailure();

      // Then It matches the expected action
      expect(result).toEqual(expectedAction);
    });
  });
});
