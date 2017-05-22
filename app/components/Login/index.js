/**
* Login stateless presentational component that renders the UI which allows the user to authorize the application to use its data.
*/

import React from 'react';
import styles from './styles.css';
import { Button } from 'react-bootstrap';

function Login({ onLogin }) {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <h1>React Kanban Board</h1>
        <h3>Sign in with your Google account to synchronize your Kanban Board tasks with Google Tasks.</h3>
        <br />
        <Button onClick={onLogin}>Let's start</Button>
      </div>
    </div>
  );
}

// Component props validation
Login.propTypes = {
  onLogin: React.PropTypes.func.isRequired,
};

export default Login;
