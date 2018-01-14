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

    const headerWrapperCustomStyles = (options) => {
      const { header } = options;
      return {
        background: `
        hsla(0, 0%, 98%, 1)
          url(${header}) no-repeat`
      };
    };

    return (
      <header className={styles.header}>
        <div className={styles.header_whapper} style={headerWrapperCustomStyles({header: user.header})}>
          <div className={styles.user_info}>
            <div className={styles.picture}>
              <img src={user.picture} alt={`Foto de perfil de ${user.name} ${user.lastname}`} />
            </div>
            <div className={styles.full_name}>
              <span>{`${user.name} ${user.lastname}`}</span>
            </div>
            <div className={styles.email}>
              <span>{`${user.email}`}</span>
            </div>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.connect}>
            <div className={styles.connectors}>
              <span className={styles.title}>Seguidos</span>
              <span className={styles.how}>{user.connectors.length}</span>
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
