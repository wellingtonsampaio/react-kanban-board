/**
* LoginContainer container component that manages the user's login process.
*/

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import { authorizeUser } from './actions';

import Login from '../../components/Login';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    // Dispatch an action that authorizes a user
    onLogin: () => dispatch(authorizeUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
