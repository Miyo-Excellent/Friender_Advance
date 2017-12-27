// Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';

// Components
import Header from './components/Header';
import Networks from './components/Networks';

// Styles
import styles from './scss/ProfileInformation.scss';

class ProfileInformation extends Component {
  constructor(props) {
    super(props);
    this.view = this.view.bind(this);
  }

  view() {
    const { devices, user } = this.props;
    return devices.isMobile
      ? (<article className={styles.profile_information_mobile}>
        <header className={styles.header_mobile}>
          <div className={styles.picture_mobile}>
            <img src={user.picture_mobile} alt={`Foto de perfil de ${user.name} ${user.lastname}`} />
          </div>
        </header>
      </article>)
      : (<article className={styles.profile_information}>
        <Header />
        <Networks />
      </article>);
  }

  render() {
    const { view } = this;
    return view();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
