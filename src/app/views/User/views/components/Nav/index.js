// Dependencies
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import React from "react";

// Components

// Assets
import menuMap from './assets/menuMap';

// Styles
import styles from './scss/Nav.scss';

const Nav = ({ devices, user }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <section className={styles.user_mobile}>
      <ul>{menuMap(user).map((item, i) => <li key={i} className={styles.nav_Item}> <Link to={item.path}>{item.name}</Link> </li> )}</ul>
      <img src={user.picture.toString()} alt="Avatar"/>
    </section>
  );

  const Desktop = () => (
    <section className={styles.user}>
      <ul>{menuMap(user).map((item, i) => <li key={i}> <Link to={item.path}>{item.name}</Link> </li> )}</ul>
    </section>
  );

  const View = () => (isMobile ? Mobile() : Desktop());
  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
