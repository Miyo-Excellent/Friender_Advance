// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components

// Styles
import styles from "./scss/Offert.scss";

const Offert = ({ devices }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <article className={styles.offert_mobile}>
      <h1 className={styles.title}>Oferta</h1>
    </article>
  );

  const Desktop = () => <article className={styles.offert} />;

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Offert);
