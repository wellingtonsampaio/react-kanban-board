/*
 * BoardContainer container component that manages the application's Kanban Board.
 */

import React from 'react';
import { connect } from 'react-redux';
import selectBoardContainer from './selectors';
import { loadLists, moveTask } from './actions';

import Board from '../../components/Board';

export class BoardContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Component props validation
  static propTypes = {
    loadLists: React.PropTypes.func,
  };

  componentWillMount() {
    // Load the Kanban Lists when component will mount
    this.props.loadLists();
  }

  render() {
    return (
      <div>
        <Board {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectBoardContainer();

function mapDispatchToProps(dispatch) {
  return {
    // Dispatch an action that loads the Kanban lists
    loadLists: () => dispatch(loadLists()),
    // Dispatch an action to move a task to another list
    moveTask: (sourceTasklist, destinationTasklist, task) => dispatch(moveTask(sourceTasklist, destinationTasklist, task)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
