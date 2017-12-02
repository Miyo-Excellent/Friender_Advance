// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Log from './components/Log';

// Styles
import styles from './scss/NavBar.scss';

const NavBar = ({ }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.item}><Link to="/">Inicio</Link></li>
        <li className={styles.item}><Link to="/">¿Que es Friender?</Link></li>
        <li className={styles.item}><Link to="/">Ayuda</Link></li>
        <li className={styles.item}><Link to="/register">Siggin</Link></li>
        <li className={styles.item}><Link to="/User">User</Link></li>
      </ul>
      <Log />
    </nav>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
