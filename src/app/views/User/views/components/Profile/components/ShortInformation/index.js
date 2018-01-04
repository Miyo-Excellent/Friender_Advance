// Dependencies
import { connect } from "react-redux";
import React, { Component } from "react";

// Components

// Styles
import styles from "./scss/ShortInformatio.scss";
class ShortInformatio extends Component {
  constructor(props) {
    super(props);

    this.Desktop = this.Desktop.bind(this);
    this.Mobile = this.Mobile.bind(this);
    this.headerMobile = this.headerMobile.bind(this);
  }

  Desktop() {
    return <section className={styles.short_info} />;
  }
  headerMobile () {
    const { header } = this.props.user;

    const background = `url(${header}) no-repeat center center`;

    return {
      background
    };
  }
  Mobile() {
    const { headerMobile } = this;
    const { user } = this.props;
    return (
      <article className={styles.short_info_mobile}>
        <div className={styles.image_background} style={headerMobile()} />
        <div className={styles.details}>
          <div className={styles.pictute}>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className={styles.info}>{
            !user.profession ? (
              <div className={styles.text}>
                <h1 className={styles.names_title}>{`${user.name} ${user.lastname}`}</h1>
              </div>
            ) : (
              <div className={styles.text}>
                <h1 className={styles.names_title}>{`${user.name} ${user.lastname}`}</h1>
                <h2 className={styles.profession_title}>{user.profession}</h2>
              </div>
            )}
          <div className={styles.connectors}>
            <span>Seguidores:</span>
            <strong>{user.connectors.length}</strong>
          </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShortInformatio);
