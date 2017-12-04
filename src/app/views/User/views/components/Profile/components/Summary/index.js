// Dependencies
import { connect } from "react-redux";
import React, { Component } from "react";

// Components

// Utils
import { summaryMap } from "./utils";

// Styles
import styles from "./scss/Summary.scss";
class Summary extends Component {
  constructor(props) {
    super(props);
    this.Desktop = this.Desktop.bind(this);
    this.Mobile = this.Mobile.bind(this);
    this.fethSummary = this.fethSummary.bind(this);
  }

  fethSummary(User) {
    return summaryMap(styles, User);
  }

  Desktop() {
    return <section className={styles.summary} />;
  }

  Mobile() {
    const { user } = this.props;
    const {} = this;
    return (
      <article className={styles.summary_mobile}>
        <h1 className={styles.title}>Resumen de tus postulaciones</h1>
        {this.fethSummary(user)}
      </article>
    );
  }

  render() {
    const { isMobile } = this.props.devices;
    return isMobile ? this.Mobile() : this.Desktop();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
