// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Loggin from './components/Loggin';

// Data
import links from './data/menu.json';

// Styles
import styles from "./scss/Nav.scss";

const Nav = ({}) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>{ links.map((to, i) => (
        <li className={styles.item} key={i}>
          <Link to={to.path}>{to.spanishName}</Link>
        </li>
      ))}</ul>
      <Loggin />
    </nav>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
