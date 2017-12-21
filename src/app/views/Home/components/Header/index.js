// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Data

// Styles
import styles from "./scss/Header.scss";

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.text_content}>
        <div className={styles.title}>
          <h1>Friender</h1>
        </div>
        <div className={styles.slogan}>
          <h2>Tu red de empleo y conexiones profesionales</h2>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
