// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import NavBar from './components/NavBar';
import Terms from './components/Terms';

// Styles
import styles from './scss/Home.scss';

const Home = ({ Entity }) => {
  return (
    <div className={styles.home}>
      <button onClick={() => Entity('people')}>CHANGE TO PEOPLE</button>
      <button onClick={() => Entity('company')}>CHANGE TO COMPANY</button>
      <header className={styles.header}>
        <NavBar />
        <div className={styles.text_content}>
          <div className={styles.title}>
            <h1>Friender</h1>
          </div>
          <div className={styles.slogan}>
            <h2>Tu red de empleo y conexiones profesionales</h2>
          </div>
        </div>
      </header>
      <footer className={styles.footer}>
        <Terms />
      </footer>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  Entity(entity) {
    dispatch({
      type: 'CHANGE_ENTITY',
      entity
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
