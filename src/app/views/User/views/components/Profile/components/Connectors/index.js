// Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';

// Styles
import styles from './scss/Connectors.scss';

// Assets
import not_found from './assets/img/404.gif';

class Connectors extends Component {
  constructor(props) {
    super(props);
    this.connectorWidget = this.connectorWidget.bind(this);
  }

  connectorWidget() {
    const { user } = this.props;
    const { connectors } = user;

    const topConnectors = connectors.filter((connector, i) => i < 9);

    return topConnectors.map((connector, i) =>
      (connector.picture)
        ? (
          <div className={styles.retrate} key={i}>
            <img src={connector.picture} alt={`${connector.name} ${connector.lastname}`} />
            <div className={styles.tooltip}>
              <div className={styles.name}>
                <span>{connector.type === 'people'
                  ? `${connector.name} ${connector.lastname}`
                  : `${connector.name}`
                }</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.not_found} key={i}>
            <img src={not_found} alt={`Foto no ${connector.name} ${connector.lastname} encontrada`} />
          </div>
        ));
  }

  render() {
    const { connectorWidget } = this;
    return (
      <article className={styles.connectors}>
        <h3 className={styles.title}>Conectores</h3>
        <div className={styles.galery}>{connectorWidget()}</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices, user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Connectors);
