/*
 * ListContainer container component that manages a Task List.
 */

import React from 'react';
import { connect } from 'react-redux';
import selectListContainer from './selectors';
import { loadTasks, deleteTask, addTask } from './actions';

import List from '../../components/List';

export class ListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Component props validation
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    loadTasks: React.PropTypes.func,
  };

  componentWillMount() {
    // Load the tasks of the current list when the component will mount
    this.props.loadTasks(this.props.id);
  }

  render() {
    // Get the tasks of the current list
    const tasks = this.props[this.props.id] || [];

    return (
      <div>
        <List {...this.props} taskListId={this.props.id} tasks={tasks} />
      </div>
    );
  }

}

const mapStateToProps = selectListContainer();

function mapDispatchToProps(dispatch) {
  return {
    // Dispatch an action that loads the tasks of the given Task List
    loadTasks: (listId) => dispatch(loadTasks(listId)),
    // Dispatch an action to delete the given task
    deleteTask: (taskList, task) => dispatch(deleteTask(taskList, task)),
    // Dispatch an action to add a new task
    addTask: (taskList, title) => dispatch(addTask(taskList, title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
