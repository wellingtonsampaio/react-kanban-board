/**
* Login stateless presentational component that renders the UI which allows the user to authorize the application to use its data.
*/

import React from 'react';
import styles from './styles.css';
import { Button } from 'react-bootstrap';

function Login({ onLogin }) {
  return (
    <div className={styles.login}>
      <Button onClick={onLogin}>Sign in with Google</Button>
    </div>
  );
}

// Component props validation
Login.propTypes = {
  onLogin: React.PropTypes.func.isRequired,
};

export default Login;
