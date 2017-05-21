/*
 * ListContainer selector define the state to props mapping for the component.
 */

import { createSelector } from 'reselect';

// Direct selector to the listContainer state domain
const selectListContainerDomain = () => state => state.get('listContainer');

// Default selector used by ListContainer
const selectListContainer = () => createSelector(
  selectListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectListContainer;
export {
  selectListContainerDomain,
};
