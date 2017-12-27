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
  }

  Desktop() {
    return <section className={styles.short_info} />;
  }

  Mobile() {
    const { user } = this.props;
    const background = {
      background: `url("${user.header}") no-repeat center center`,
      backgroundSize: "cover"
    };
    return (
      <article className={styles.short_info_mobile}>
        <div className={styles.image_background} style={background} />
        <div className={styles.details}>
          <div className={styles.pictute}>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className={styles.info}>
            {!user.profession ? (
              <div className={styles.text}>
                <h1 className={styles.names_title}>{`${user.name} - ${user.lastname}`}</h1>
              </div>
            ) : (
              <div className={styles.text}>
                <h1 className={styles.names_title}>{`${user.name} - ${user.lastname}`}</h1>
                <span>|</span>
                <h2 className={styles.profession_title}>{user.profession}</h2>
              </div>
            )}
            <div className={styles.followers}>
              <span>Seguidores:</span>
              <strong>{user.follows.followers}</strong>
            </div>
            <div className={styles.followins}>
              <span>Seguidos:</span>
              <strong>{user.follows.followins}</strong>
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
