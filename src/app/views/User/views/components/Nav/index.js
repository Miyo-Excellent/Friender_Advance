// Dependencies
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

// Components

// Assets
import menuMap from "./utils/menuMap";

// Styles
import styles from "./scss/Nav.scss";

const Nav = ({ devices, user }) => {
  const { isMobile } = devices;
  const generator = () => (
    <ul className={styles.menu}>
      {menuMap(user, devices).map((item, i) => (
        <li key={i} className={styles.item}>
          <Link to={item.path} className={styles.link}>
            <img src={item.image} alt={item.name} className={styles.image} />
          </Link>
        </li>
      ))}
    </ul>
  );

  const Mobile = () => <nav className={styles.nav_mobile}>{generator()}</nav>;

  const Desktop = () => <nav className={styles.nav}>{generator()}</nav>;

  const View = () => isMobile ? Mobile() : Desktop();
  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
