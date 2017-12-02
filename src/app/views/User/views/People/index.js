// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components
import Nav from '../components/Nav';

// Styles
import styles from "./scss/People.scss";

const People = ({ devices, user }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <section className={styles.user_mobile}>
      <Nav />
    </section>
  );

  const Desktop = () => (
    <section className={styles.user}>
      <Nav />
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

export default connect(mapStateToProps, mapDispatchToProps)(People);
