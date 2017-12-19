// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components
import Terms from './components/Terms';

// Styles
import styles from "./scss/Footer.scss";

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <Terms />
    </footer>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
