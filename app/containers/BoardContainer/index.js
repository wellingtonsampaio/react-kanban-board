/*
 *
 * BoardContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectBoardContainer from './selectors';
import Board from '../../components/Board';

export class BoardContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
