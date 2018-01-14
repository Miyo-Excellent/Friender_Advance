// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components
import Nav from '../components/Nav';
import Profil from '../components/Profile';

// Styles
import styles from "./scss/People.scss";

const People = ({ devices }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <section className={styles.user_mobile}>
      <Nav />
      <Profil />
    </section>
  );

  const Desktop = () => (
    <section className={styles.user_desktop}>
      <Profil />
    </section>
  );

  const View = () => (isMobile ? Mobile() : Desktop());
  return View();
};

const mapStateToProps = state => ({
  devices: state.devices
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(People);
