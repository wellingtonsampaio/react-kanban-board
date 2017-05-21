/**
* List presentational component that renders a single Task List and its tasks.
*/

import React from 'react';
import styles from './styles.css';
import Task from '../Task';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Component props validation
  static propTypes = {
    taskListId: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    tasks: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
      })
    ).isRequired,
    deleteTask: React.PropTypes.func.isRequired,
  };

  // delete the given task passing this list's ID as a param
  onDeleteTask = (task) => {
    this.props.deleteTask(this.props.taskListId, task.id);
  }

  render() {
    // Create a component for each task filtering the ones without a valid title
    const tasks = this.props.tasks
      .filter(task => task.title !== '')
      .map(task => (
        <ListGroupItem key={task.id}>
          <Task key={task.id} task={task} deleteTask={this.onDeleteTask}></Task>
        </ListGroupItem>
    ));

    return (
      <div className={styles.list}>
        <Panel header={this.props.title} bsStyle="success">
          <ListGroup fill>
            {tasks}
          </ListGroup>
        </Panel>
      </div>
    );
  }

}

export default List;
