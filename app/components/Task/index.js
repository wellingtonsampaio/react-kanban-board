/**
* Task stateless presentational component that renders a single Task.
*/

import React from 'react';
import styles from './styles.css';
import { Button, ButtonGroup, Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

function Task({ task, deleteTask }) {
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
              <ButtonGroup>
                <Button bsStyle="success" onClick={() => deleteTask(task)}><Glyphicon glyph="glyphicon glyphicon-remove"></Glyphicon></Button>
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
  deleteTask: React.PropTypes.func.isRequired,
};

export default Task;
