// Dependencies
import React from "react";
import { connect } from "react-redux";

// Styles
import styles from "./scss/Controller.scss";

const Controller = ({ BackStep, Complete, NextStep, UserData }) => {
  const {
    address,
    email,
    lastname,
    name,
    nickname,
    nit,
    password,
    phone,
    type,
    typeOfCompany,
    step
  } = UserData;

  const nextStep = () => {
    if (step < 3) {
      NextStep();
    }
  };

  const backStep = () => {
    if (step > 1) {
      BackStep();
    }
  };

  const complete = () => {
    const okEmail = /[a-zA-Z0-9]{3,24}\@([a-zA-Z0-9]{3,8}\.){1,3}[a-zA-Z0-9]{3,8}/;
    const okLastname = /[a-zA-Z0-9]{3,}/;
    const okName = /[a-zA-Z0-9]{3,}/;
    const okMunincipality =
      address.munincipality !== "index" || address.munincipality !== "";
    const okPhone = /3[0-9]{2}[0-9]{6}/;
    const okPassword = /(\*|\%|\$|\[|\]|\{|\}|\^|\·|\─|̣̣\¨|\¬|\~|\`|\½|\ł|\€|\æ|\ß|\ð|\€|\¶|\ŧ|\←|\↓|\→|\ø|\þ|\ł|\ĸ|\ŋ|\đ|\ð|\æ|\«|\»|\¢|\“|\”|\µ)/g;
    const okProvince = address.province !== "index" || address.province !== "";
    const okTypeOfCompany = typeOfCompany !== "index" || typeOfCompany !== "";
    if (type === "company") {
      Complete();
    } else {
      if (
        okEmail &&
        okLastname &&
        okName &&
        okMunincipality &&
        okPhone &&
        okPassword &&
        okProvince &&
        okTypeOfCompany
      ) {
        console.log('New User');
        Complete();
      }
    }
  };

  const View = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.controllers}>
            <div className={styles.next_full}>
              <button className={styles.button} onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
        break;

      case 2:
        return (
          <div className={styles.controllers}>
            <div className={styles.back}>
              <button className={styles.button} onClick={backStep}>
                Back
              </button>
            </div>
            <div className={styles.next}>
              <button className={styles.button} onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        );
        break;

      case 3:
        return (
          <div className={styles.controllers}>
            <div className={styles.back}>
              <button className={styles.button} onClick={backStep}>
                Back
              </button>
            </div>
            <div className={styles.complete}>
              <button className={styles.button} onClick={complete}>
                Completar
              </button>
            </div>
          </div>
        );
        break;

      default:
        break;
    }
  };
  return View();
};

const mapStateToProps = state => ({
  UserData: state.register.userData
});

const mapDispatchToProps = dispatch => ({
  Complete() {
    dispatch({
      type: "COMPLETE_REGISTER"
    });
  },
  BackStep(step) {
    dispatch({
      type: "BACK_STEP"
    });
  },
  NextStep(step) {
    dispatch({
      type: "NEXT_STEP"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
