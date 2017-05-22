/**
* Task stateless presentational component that renders a single Task.
*/

import React from 'react';
import styles from './styles.css';
import { Button, ButtonGroup, Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

function Task({ task, deleteTask, canMoveTask, moveTask }) {
  // Array of action buttons
  const buttons = [];

  // Add button to delete the task
  buttons.push(<Button key="deleteButton" bsStyle="success" onClick={() => deleteTask(task)}><Glyphicon glyph="glyphicon glyphicon-remove"></Glyphicon></Button>);

  // If allowed, add button to move the task to another list
  if (canMoveTask) {
    buttons.push(<Button key="moveButton" bsStyle="success" onClick={() => moveTask(task)}><Glyphicon glyph="glyphicon glyphicon-arrow-right"></Glyphicon></Button>);
  }

  return (
    <div className={styles.task}>
      <Panel>
        <Grid fluid>
          <Row>
            <Col xs={9}>
              <div>
                {task.title}
              </div>
            </Col>
            <Col xs={3}>
              <ButtonGroup bsSize="xsmall">
                {buttons}
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
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
