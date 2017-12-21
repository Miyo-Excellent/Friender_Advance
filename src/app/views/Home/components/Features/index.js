// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Data
import features from './data/features';

// Styles
import styles from "./scss/Features.scss";

const Features = ({}) => {
  return (
    <div className={styles.features}>
      <header className={styles.header}>
        <h3>Features</h3>
      </header>
      <section className={styles.feature_wrapper}>{features.map((feature, i) =>
        <div className={styles.feature} key={i}>
          <div className={styles.img}>
            <img src={feature.image} alt={feature.alt} />
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>{feature.title}</h1>
            <p className={styles.text}>{feature.text}</p>
          </div>
        </div>
      )}</section>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Features);
