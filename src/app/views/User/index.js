// Dependencies
import { connect } from "react-redux";
import React from "react";

// Views
import Company from "./views/Company";
import People from "./views/People";

// Styles
import styles from "./scss/User.scss";

const User = ({ devices, user }) => {
  const { isMobile } = devices;
  const { type } = user;

  const whatKind = Type => Type === "people" ? <People /> : <Company />;

  const View = () =>
    isMobile ? (
      <section className={styles.user}>{whatKind(type)}</section>
    ) : (
      <section className={styles.user}>{whatKind(type)}</section>
    );
  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
