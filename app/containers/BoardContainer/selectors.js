import { createSelector } from 'reselect';

/**
 * Direct selector to the boardContainer state domain
 */
const selectBoardContainerDomain = () => state => state.get('boardContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BoardContainer
 */

const selectBoardContainer = () => createSelector(
  selectBoardContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBoardContainer;
export {
  selectBoardContainerDomain,
};
