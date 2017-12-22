// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Loggin from './components/Loggin';

// Data
import links from './data/menu.json';

// Styles
import styles from "./scss/Nav.scss";

//Assets
import back from './assets/img/back.svg';
import list from './assets/img/list.svg';
import unlocked from './assets/img/unlocked.svg';

const Nav = ({ changeLoginBar, changeMenuBar, isMobile, mobileConfig }) => {
  return !isMobile
    ? (
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          { links.map((to, i) => (
            <li className={styles.item} key={i}>
              <Link to={to.path}>{to.spanishName}</Link>
            </li>
          ))}</ul>
        <Loggin />
      </nav>
    ) : (
      <nav className={styles.nav_mobile}>
        { mobileConfig.menu_bar
          ? <ul className={styles.menu_mobile}>
            <li className={styles.back_mobile} onClick={changeMenuBar}>
              <img src={back} alt="Plegar" />
            </li>
            { links.map((to, i) => (
              <li className={styles.item_mobile} key={i}>
                <Link to={to.path}>{to.spanishName}</Link>
              </li>
            ))}</ul>
          : <div className={styles.popMenu_mobile} onClick={changeMenuBar}>
            <img src={list} alt="Menu"/>
          </div>
        }
        { mobileConfig.log_bar
          ? <Loggin />
          : <div className={styles.popLogin_mobile} onClick={changeLoginBar}>
            <img src={unlocked} alt="Ingresar" />
          </div>

        }
      </nav>
    );
};

const mapStateToProps = state => ({
  isMobile : state.devices.isMobile,
  mobileConfig: state.register.nav.config.mobile
});

const mapDispatchToProps = dispatch => ({
  changeMenuBar() {
    dispatch({
      type: 'CHANGE_MENU_BAR'
    });
  },
  changeLoginBar() {
    dispatch({
      type: 'CHANGE_LOG_BAR'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
