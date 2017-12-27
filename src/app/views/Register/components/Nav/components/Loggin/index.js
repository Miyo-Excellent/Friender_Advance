// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/Loggin.scss";

// Assets
import back from '../../assets/img/back.svg';

const Loggin = ({ changeLoginBar, isMobile }) => {
  return isMobile
    ? (
      <div className={styles.loggin_mobile}>
        <div className={styles.back_mobile} onClick={changeLoginBar}>
          <img src={back} alt="Plegar" />
        </div>
        <form className={styles.form_mobile}>
          <div className={styles.email_mobile}>
            <input type="text" id="email" name="email" placeholder="mi-correo@dominio.com" />
          </div>
          <div className={styles.password_mobile}>
            <input type="password" id="password" name="password" placeholder="Contraseña" />
          </div>
          <div className={styles.set_mobile}>
            <input name="set" id="set" type="button" value="Entrar" />
          </div>
        </form>
      </div>
    ) : (
      <div className={styles.loggin}>
        <form className={styles.form}>
          <div className={styles.email}>
            <input type="text" id="email" name="email" placeholder="mi-correo@dominio.com" />
          </div>
          <div className={styles.password}>
            <input type="password" id="password" name="password" placeholder="Contraseña" />
          </div>
          <div className={styles.set}>
            <input name="set" id="set" type="button" value="Entrar" />
          </div>
        </form>
      </div>
    );
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({
  changeLoginBar() {
    dispatch({
      type: 'CHANGE_LOG_BAR'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loggin);
