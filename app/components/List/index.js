/**
* List presentational component that renders a single Task List and its tasks.
*/

import React from 'react';
import styles from './styles.css';
import Task from '../Task';
import { Button, ButtonGroup, Col, ControlLabel, Form, FormGroup, Glyphicon, Modal } from 'react-bootstrap';
import TextInput from '../TextInput';
import classNames from 'classnames';

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
    canMoveTask: React.PropTypes.bool.isRequired,
    canAddTask: React.PropTypes.bool.isRequired,
    deleteTask: React.PropTypes.func.isRequired,
    moveTask: React.PropTypes.func,
    addTask: React.PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      showNewTaskModal: false,
    };
  }

  // delete the given task passing this list's ID as a param
  onDeleteTask = (task) => {
    this.props.deleteTask(this.props.taskListId, task.id);
  }

  // move the given task passing this list's ID as a param
  onMoveTask = (task) => {
    if (this.props.canMoveTask) {
      // if this component is allowed to move tasks, dispatch the action
      this.props.moveTask(this.props.taskListId, task);
    }
  }

  cancelNewTask = () => {
    this.closeNewTaskModal();
  }

  addNewTask = () => {
    const title = this.newTaskTitle.value();  // because the InpuText component has a function named value()
    if (!title || title.length === 0) {
      this.setState({
        errorText: 'Please provide a title for the task',
      });
      return;
    }
    this.setState({ errorText: null });
    this.closeNewTaskModal();

    this.props.addTask(this.props.taskListId, title);
  }

  closeNewTaskModal = () => {
    this.setState({ showNewTaskModal: false });
  }

  openNewTaskModal = () => {
    this.setState({ showNewTaskModal: true, errorText: null });
  }

  render() {
    // Create a component for each task filtering the ones without a valid title
    const tasks = this.props.tasks
      .filter(task => task.title !== '')
      .map(task => (
        <li key={task.id}>
          <Task
            key={task.id}
            task={task}
            deleteTask={this.onDeleteTask}
            canMoveTask={this.props.canMoveTask}
            moveTask={this.onMoveTask}
          >
          </Task>
        </li>
    ));

    let addTaskButton = null;
    if (this.props.canAddTask) {
      addTaskButton = <Button className="pull-right" onClick={this.openNewTaskModal}><Glyphicon glyph="glyphicon glyphicon-plus"></Glyphicon></Button>;
    }

    return (
      <div>
        <div className={classNames(styles.taskList, 'hover-effect')}>
          <div className={styles.taskListHead}>
            <h3>{this.props.title} {addTaskButton}</h3>
          </div>
          <ul className={classNames(styles.taskListContent, 'list-unstyled')}>
            {tasks}
          </ul>
        </div>

        <Modal show={this.state.showNewTaskModal} onHide={this.closeNewTaskModal}>
          <Modal.Header>
            <Modal.Title>Add a new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formBasicText" validationState={this.getNewTaskValidationState}>
                <Col componentClass={ControlLabel} sm={1}>
                  Title
                </Col>
                <Col sm={11}>
                  <TextInput
                    placeholder="Inform the title of task"
                    ref={(f) => { this.newTaskTitle = f; }}
                    errorText={this.state.errorText}
                    onKeyUp={() => {}}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup className="pull-left">
              <Button onClick={this.addNewTask}>Add</Button>
              <Button onClick={this.cancelNewTask}>Cancel</Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }

}

export default List;
