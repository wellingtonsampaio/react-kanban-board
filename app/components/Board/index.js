/**
*
* Board
*
*/

import React from 'react';

import styles from './styles.css';

class Board extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.board}>
        React Kanban Board
      </div>
    );
  }
}

export default Board;
