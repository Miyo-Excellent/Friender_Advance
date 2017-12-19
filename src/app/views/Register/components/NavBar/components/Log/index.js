// Dependencies
import React from "react";
import { connect } from "react-redux";
//import axios from 'axios';

// Styles
import styles from "./scss/Log.scss";

// Assets
import backIMG from "../../assets/img/back.svg";

const Log = ({
  ChangeEmail,
  ChangePassword,
  email,
  HiddenLogin,
  isMobile,
  password
}) => {
  const View = _Mobile => {
    const VALIDATE = (e, type) => {
      const regexpEmail = /[a-zA-Z0-9]{3,24}\@([a-zA-Z0-9]{3,8}\.){1,3}[a-zA-Z0-9]{3,8}/;
      const regexpPassword = /(\*|\%|\$|\[|\]|\{|\}|\^|\·|\─|̣̣\¨|\¬|\~|\`|\½|\ł|\€|\æ|\ß|\ð|\€|\¶|\ŧ|\←|\↓|\→|\ø|\þ|\ł|\ĸ|\ŋ|\đ|\ð|\æ|\«|\»|\¢|\“|\”|\µ)/g;
      if (type === "loggin") {
        e.preventDefault();
        if (regexpEmail.test(email) && !regexpPassword.test(password)) {
          console.log("====================================");// eslint-disable-line
          console.log(`Bienvenido "fulanito"`);// eslint-disable-line
          console.log("====================================");// eslint-disable-line
        }
      }
    };

    if (_Mobile) {
      return (
        <div className={styles.loggin_mobile}>
          <div className={styles.back} onClick={HiddenLogin}>
            <img src={backIMG} alt="Back" />
          </div>
          <form className={styles.formularie}>
            <div className={styles.email}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mi@email.com"
                onChange={e => ChangeEmail(e.target.value)}
              />
            </div>
            <div className={styles.password}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="contraseña"
                onClick={e => ChangePassword(e.target.value)}
              />
            </div>
            <div className={styles.entry}>
              <button onClick={e => VALIDATE(e, "loggin")}>Entrar</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className={styles.loggin}>
          <form className={styles.formularie}>
            <div className={styles.email}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mi@email.com"
              />
            </div>
            <div className={styles.password}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="contraseña"
              />
            </div>
            <div className={styles.entry}>
              <button>Entrar</button>
            </div>
          </form>
        </div>
      );
    }
  };
  return View(isMobile);
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile,
  email: state.register.navBar.loggin.email,
  password: state.register.navBar.loggin.password
});

const mapDispatchToProps = dispatch => ({
  HiddenLogin() {
    dispatch({
      type: "CHANGE_SHOW_LOGGIN"
    });
  },
  ChangeEmail(email) {
    dispatch({
      type: "CHANGE_EMAIL",
      email
    });
  },
  ChangePassword(password) {
    dispatch({
      type: "CHANGE_PASSWORD",
      password
    });
  }
  /*
  GoLoggin(data) {
    dispatch (dispatch => axios
      .post()
      .then()
      .catch()
    )
  }
  */
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
