/**
* Task stateless presentational component that renders a single Task.
*/

import React from 'react';
import styles from './styles.css';
import { Button, ButtonGroup, Glyphicon, Panel } from 'react-bootstrap';

function Task({ task, deleteTask, canMoveTask, moveTask }) {
  // Array of action buttons
  const buttons = [];

  // Add button to delete the task
  buttons.push(<Button key="deleteButton" className={styles.actionButton} onClick={() => deleteTask(task)}><Glyphicon glyph="glyphicon glyphicon-remove"></Glyphicon></Button>);

  // If allowed, add button to move the task to another list
  if (canMoveTask) {
    buttons.push(<Button key="moveButton" className={styles.actionButton} onClick={() => moveTask(task)}><Glyphicon glyph="glyphicon glyphicon-arrow-right"></Glyphicon></Button>);
  }

  return (
    <div>
      <Panel className={styles.panel}>
        <div>
          <span>{task.title}</span>
          <ButtonGroup bsSize="xsmall" className="pull-right">
            {buttons}
          </ButtonGroup>
        </div>
      </Panel>
    </div>
  );
}

// Component props validation
Task.propTypes = {
  task: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }).isRequired,
  canMoveTask: React.PropTypes.bool.isRequired,
  deleteTask: React.PropTypes.func.isRequired,
  moveTask: React.PropTypes.func,
};

export default Task;
