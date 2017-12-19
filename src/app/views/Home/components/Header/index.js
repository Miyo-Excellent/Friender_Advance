// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Data
import features from './data/features';

// Styles
import styles from "./scss/Header.scss";

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.text_content}>
        <div className={styles.title}>
          <h1>Friender</h1>
        </div>
        <div className={styles.features}>{features.map((feature, i) =>
          <div className={styles.feature} key={i}>
            <div className={styles.img}>
              <img src={feature.image} alt={feature.alt} />
            </div>
            <div className={styles.description}>
              <h1 className={styles.title}>{feature.title}</h1>
              <p className={styles.text}>{feature.text}</p>
            </div>
          </div>
        )}</div>
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
