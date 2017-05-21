/**
* Login stateless presentational component that renders the UI which allows the user to authorize the application to use its data.
*/

import React from 'react';
import styles from './styles.css';
import { Button, Jumbotron } from 'react-bootstrap';

function Login({ onLogin }) {
  return (
    <div className={styles.login}>
      <Jumbotron>
        <h1>React Kanban Board</h1>
        <p>A Kanban Board application that uses Google Tasks as data store.</p>
        <p>Sign in with your Google account to synchronize your Kanban Board tasks with the Google Tasks.</p>
        <p>Once you agree to join, 3 new lists will be created on your Google Tasks account for the purpose of this application.</p>
        <p><Button bsStyle="primary" onClick={onLogin}>Let's start</Button></p>
      </Jumbotron>
    </div>
  );
}

// Component props validation
Login.propTypes = {
  onLogin: React.PropTypes.func.isRequired,
};

export default Login;
