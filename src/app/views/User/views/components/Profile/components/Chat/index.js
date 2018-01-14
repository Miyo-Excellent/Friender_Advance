// Dependencies
import { connect } from "react-redux";
import React, { Component } from 'react';

// Components

// Styles
import styles from "./scss/Chat.scss";

//import People from '../../People/index';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.desktop = this.desktop.bind(this);
    this.mobile = this.mobile.bind(this);
    this.view = this.view.bind(this);
  }
  desktop() {
    const { connectors } = this.props;
    return (
      <ul className={styles.chat}>{connectors.map((connector, index, arr) =>
        (connector.isConnected)
          ? (
            <li key={index} className={styles.connector}>
              <div className={styles.connector_photo}>
                <img src={connector.picture} alt={`${connector.name} ${connector.lastname}`}/>
              </div>
            </li>
          ) : null
      )}</ul>
    );
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
  devices: state.devices,
  connectors: state.user.connectors
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
