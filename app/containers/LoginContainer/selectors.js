/*
 * LoginContainer selector define the state to props mapping for the component.
 */

import { createSelector } from 'reselect';

// Direct selector to the loginContainer state domain
const selectLoginContainerDomain = () => state => state.get('loginContainer');

// Default selector used by LoginContainer
const selectLoginContainer = () => createSelector(
  selectLoginContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLoginContainer;
export {
  selectLoginContainerDomain,
};
