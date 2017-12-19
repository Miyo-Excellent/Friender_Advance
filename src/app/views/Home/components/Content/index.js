// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/Content.scss";

const Content = ({}) => {
  return (
    <section className={styles.content}>
      <h1>Content</h1>
    </section>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
