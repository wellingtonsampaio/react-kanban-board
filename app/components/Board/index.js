/**
* Board presentational component that renders a Kanban Board and its (for now) 3 Task Lists.
*/

import React from 'react';
import styles from './styles.css';
import ListContainer from '../../containers/ListContainer';
import { Grid, Row, Col } from 'react-bootstrap';

class Board extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Component props validation
  static propTypes = {
    lists: React.PropTypes.shape({
      todoList: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
      }),
      doingList: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
      }),
      doneList: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
      }),
    }),
    moveTask: React.PropTypes.func.isRequired,
  };

  onMoveTask = (sourceTasklist, task) => {
    // Determine the destination list according to the source
    const destinationTasklist = (this.props.lists.todoList.id === sourceTasklist) ? this.props.lists.doingList.id : this.props.lists.doneList.id;

    // Dispatch the action
    this.props.moveTask(sourceTasklist, destinationTasklist, task);
  }

  render() {
    // Render a component for the To-Do list if one was informed
    const todoListComponent =
          this.props.lists.todoList !== undefined ?
            <ListContainer id={this.props.lists.todoList.id} title="To-Do" canMoveTask moveTask={this.onMoveTask}></ListContainer> :
            <div />;

    // Render a component for the Doing list if one was informed
    const doingListComponent =
          this.props.lists.doingList !== undefined ?
            <ListContainer id={this.props.lists.doingList.id} title="Doing" canMoveTask moveTask={this.onMoveTask}></ListContainer> :
            <div />;

    // Render a component for the Done list if one was informed
    const doneListComponent =
          this.props.lists.doneList !== undefined ?
            <ListContainer id={this.props.lists.doneList.id} title="Done" canMoveTask={false}></ListContainer> :
            <div />;

    return (
      <div className={styles.board}>
        <Grid fluid>
          <Row>
            <Col xs={12} md={4}>
              {todoListComponent}
            </Col>
            <Col xs={12} md={4}>
              {doingListComponent}
            </Col>
            <Col xs={12} md={4}>
              {doneListComponent}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Board;
