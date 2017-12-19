// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/Loggin.scss";

const Loggin = ({}) => {
  return (
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loggin);
