// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components
import ShortInformation from './components/ShortInformation';
import Summary from './components/Summary';
import Publish from './components/Publish';

// Styles
import styles from "./scss/Profil.scss";

const Profil = ({ devices }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <section className={styles.profil_mobile}>
      <ShortInformation />
      <Summary />
      <Publish />
    </section>
  );

  const Desktop = () => <section className={styles.profil} />;

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
