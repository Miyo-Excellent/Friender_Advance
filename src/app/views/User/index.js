// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './scss/User.scss';

class User extends Component {
  render() {
    return (
      <div className={styles.user}>
        <h1>User</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}

export default User;
