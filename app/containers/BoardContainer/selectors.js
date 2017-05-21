/*
 * BoardContainer selector define the state to props mapping for the component.
 */

import { createSelector } from 'reselect';

// Direct selector to the boardContainer state domain
const selectBoardContainerDomain = () => state => state.get('boardContainer');

// Default selector used by BoardContainer
const selectBoardContainer = () => createSelector(
  selectBoardContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBoardContainer;
export {
  selectBoardContainerDomain,
};
