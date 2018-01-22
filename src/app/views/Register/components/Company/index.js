// Dependencies
import React from "react";
import { connect } from "react-redux";

// Styles
import styles from "./scss/Company.scss";

const Company = ({ step, isMobile }) => {
  const whitchStep = Step => {
    switch (Step) {
      case 2:
        return (
          <div className={styles.step}>
            <div className={styles.one}>
              <div className={styles.name}>
                <input type="text" id="name" name="name" placeholder="Nombre" />
              </div>
              <div className={styles.lastname}>
                <input
                  type="tel"
                  id="nit"
                  name="nit"
                  placeholder="NIT: N# identificación tributario"
                />
              </div>
              <div className={styles.phone}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Telefono"
                />
              </div>
              <div className={styles.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mi@email.com"
                />
              </div>
            </div>
            <div className={styles.two}>
              <div className={styles.type}>
                <select name="type" id="type">
                  <option value="index">Tipo de establecimiento</option>
                  <option value="branch_office">Sucursal</option>
                  <option value="Headquarters">Sede</option>
                </select>
              </div>
              <div className={styles.address}>
                <div className={styles.provices}>
                  <select name="province" id="province">
                    <option value="index">Provincia</option>
                    <option value="antioquia">Antioquia</option>
                  </select>
                </div>
                <div className={styles.municipality}>
                  <select name="municipality" id="municipality">
                    <option value="index">Municipio</option>
                    <option value="medellin">Medellin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case 3:
        return (
          <div className={styles.step}>
            <div className={styles.three}>
              <div className={styles.nick}>
                <input
                  type="text"
                  id="nick"
                  name="nick"
                  placeholder="ID: usuario"
                />
              </div>
              <div className={styles.password}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
            </div>
          </div>
        );
        break;

      default:
        break;
    }
  };

  const View = () => {
    if (isMobile) {
      return <form className={styles.companies_mobile}>{whitchStep(step)}</form>;
    } else {
      return <form className={styles.companies}>{whitchStep(step)}</form>;
    }
  };

  return View();
};

const mapStateToProps = state => ({
  step: state.register.userData.step,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
