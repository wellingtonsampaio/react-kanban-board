/**
* Task presentational component that renders a single Task.
*/

import React from 'react';
import styles from './styles.css';

class Task extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Component props validation
  static propTypes = {
    task: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
    }).isRequired,
  };

  // Render the component
  render() {
    return (
      <div className={styles.task}>
        {this.props.task.title}
      </div>
    );
  }

}

export default Task;
