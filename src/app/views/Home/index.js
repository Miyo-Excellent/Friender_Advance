// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './scss/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <h1>Home</h1>
        <ul>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
