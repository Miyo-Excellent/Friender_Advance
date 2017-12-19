// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Log from './components/Log';

// Styles
import styles from './scss/NavBar.scss';

// Assets
import unlockIMG from './assets/img/unlocked.svg';
import listIMG from './assets/img/list.svg';
import backIMG from './assets/img/back.svg';

const NavBar = ({ HiddenLoggin, HiddenMenu, isMobile, show }) => {
  const handleMenu = isMenu => {
    if (!isMenu) {
      return (
        <ul className={styles.menu}>
          <li className={styles.arrow} onClick={HiddenMenu}><img src={backIMG} alt="Back"/></li>
          <li className={styles.item}><Link to="/">Inicio</Link></li>
          <li className={styles.item}><Link to="/about">¿Que es Friender?</Link></li>
          <li className={styles.item}><Link to="/help">Ayuda</Link></li>
        </ul>
      );
    } else {
      return (
        <div className={styles.menu_widget} id="menu_widget" onClick={() => showMe('menu')}>
          <img src={listIMG} alt="Menu" className={styles.item_widget} />
        </div>
      );
    }
  };

  const handleLoggin = isLoggin => {
    if (!isLoggin) {
      return (
        <Log />
      );
    } else {
      return (
        <div className={styles.loggin_widget} id="loggin_widget" onClick={() => showMe('loggin')}>
          <img src={unlockIMG} alt="Loggin" className={styles.item_widget} />
        </div>
      );
    }
  };

  const showMe = whitch => {
    switch (whitch) {
      case 'menu':
        HiddenMenu();
        break;

      case 'loggin':
        HiddenLoggin();
        break;

      default:
        console.log('Problemas con evento');//eslint-disable-line
        break;
    }
  };

  const whoView = _Mobile => {

    if (_Mobile) {
      return (
        <div className={styles.menu_content_mobile}>
          {handleMenu(!show.menu)}
          {handleLoggin(!show.loggin)}
        </div>
      );
    } else {
      return (
        <div className={styles.menu_content}>
          <ul className={styles.menu}>
            <li className={styles.item}><Link to="/">Inicio</Link></li>
            <li className={styles.item}><Link to="/about">¿Que es Friender?</Link></li>
            <li className={styles.item}><Link to="/help">Ayuda</Link></li>
          </ul>
          <Log />
        </div>
      );
    }
  };

  const View = ua => {
    if (ua) {
      return (
        <nav className={styles.nav_mobile}>
          {whoView(ua)}
          <div className={styles.text_content}>
            <div className={styles.title}>
              <h1>Friender</h1>
            </div>
            <div className={styles.slogan}>
              <h2>Tu red de empleo y conexiones profesionales</h2>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className={styles.nav}>
          {whoView(ua)}
          <div className={styles.title}>
            <h1>Friender</h1>
          </div>
          <div className={styles.slogan}>
            <h2>Tu red de trabajo profesional!</h2>
          </div>
        </nav>
      );
    }
  };

  return View(isMobile);
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile,
  show: state.register.navBar.show
});

const mapDispatchToProps = dispatch => ({
  HiddenLoggin() {
    dispatch({
      type: 'CHANGE_SHOW_LOGGIN'
    });
  },
  HiddenMenu() {
    dispatch({
      type: 'CHANGE_SHOW_MENU'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
