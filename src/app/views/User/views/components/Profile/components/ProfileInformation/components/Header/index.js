// Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';

// Styles
import styles from './scss/Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.picture}>
          <img src={user.picture} alt={`Foto de perfil de ${user.name} ${user.lastname}`} />
        </div>
        <div className={styles.information}>
          <div className={styles.full_name}>
            <h3>{`${user.name} ${user.lastname}`}</h3>
          </div>
          <div className={styles.email}>
            <h3>{`${user.email}`}</h3>
          </div>
          <div className={styles.connect}>
            <div className={styles.followers}>
              <span className={styles.title}>Seguidos</span>
              <span className={styles.how}>{user.follows.followers.length}</span>
            </div>
            <div className={styles.followins}>
              <span className={styles.title}>Seguidores</span>
              <span className={styles.how}>{ user.follows.followins.length}</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
