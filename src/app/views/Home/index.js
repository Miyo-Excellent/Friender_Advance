// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './scss/Home.scss';

const Home = ({ commits, newCommit }) => {
  const funCommit = () => {
    const commit = document.querySelector('#newCommit').value;
    newCommit(commit);
  };
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <ul>
        <li><Link to="/user">User</Link></li>
        <li><a href="http://localhost:3000/user">User [A target]</a></li>
      </ul>

      <div id="commitContent">
        {commits.map((commit, i) => (
          <p key={i}>{commit}</p>
        ))}
      </div>
      <input type="text" placeholder="new Commit" id="newCommit" />
      <button onClick={funCommit()}>Send</button>
    </div>
  );
};

const mapStateToProps = state => ({
  commits: state.home.commits
});

const mapDispatchToProps = dispatch => ({
  newCommit(commit) {
    dispatch({
      type: 'NEW_COMMIT',
      commit
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
