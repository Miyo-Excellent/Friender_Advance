// Dependencies
import { connect } from "react-redux";
import React, { Component } from 'react';

// Components

// Styles
//import styles from "./scss/Connector.scss";

//import People from '../../People/index';
class Connector extends Component {
  constructor(props) {
    super(props);
    this.desktop = this.desktop.bind(this);
    this.mobile = this.mobile.bind(this);
    this.view = this.view.bind(this);
  }
  desktop() {
    return <h1>All Friends</h1>;
  }
  mobile() {
    return <h1>All Friends</h1>;
  }
  view() {
    const { desktop, mobile } = this;
    const { isMobile } = this.props.devices;
    return (isMobile ? mobile() : desktop());
  }
  render() {
    const { view } = this;
    return view();
  }
}

const mapStateToProps = state => ({
  devices: state.devices
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Connector);
