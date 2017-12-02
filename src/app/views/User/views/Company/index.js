// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components

// Styles
import styles from "./scss/Company.scss";

const Company = ({ devices, user }) => {
  const { isMobile } = devices;

  const View = () =>
    isMobile ? (
      <section className={styles.user_mobile}>
        <h1>Company ─ Mobile</h1>
      </section>
    ) : (
      <section className={styles.user}>
        <h1>Company ─ Desktop</h1>
      </section>
    );
  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
