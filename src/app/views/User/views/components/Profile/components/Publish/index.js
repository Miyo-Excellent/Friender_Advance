// Dependencies
import { connect } from "react-redux";
import React, { Component } from "react";

// Components
//import Offert from './components/Offert';
import Service from "./components/Service";
import AddNewService from './components/AddNewService';

// Styles
import styles from "./scss/Publish.scss";

class Publish extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.Desktop = this.Desktop.bind(this);
    this.load = this.load.bind(this);
    this.Mobile = this.Mobile.bind(this);
    this.View = this.View.bind(this);
  }

  Desktop() {
    const { load } = this;
    return (
      <article className={styles.publish}>
        <AddNewService />
        <div className={styles.wrapper}>{load()}</div>
      </article>
    );
  }

  load() {
    const { services } = this.props;
    return services.map((service, i) => <Service key={i} service={service} index={i} />);
  }

  Mobile() {
    const { load } = this;
    return (
      <article className={styles.publish_mobile}>
        <AddNewService />
        <div className={styles.wrapper}>{load()}</div>
      </article>
    );
  }

  View() {
    const { isMobile } = this.props.devices;
    const { Desktop, Mobile } = this;
    return isMobile ? Mobile() : Desktop();
  }

  render() {
    const { View } = this;
    return View();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  services: state.user.posts.services
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
