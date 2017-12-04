// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components

// Utils
import { whatCalification } from './utils';

// Styles
import styles from "./scss/Service.scss";

const Service = ({ devices, service }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <article className={styles.service_mobile}>
      <div className={styles.log}>
        <img src={service.img} alt="logo" />
      </div>
      <div className={styles.information}>
        <div className={styles.short_info}>
          {whatCalification(styles, service)}
          <div className={styles.honorary_delay}>
            <p>valor: <strong>$ {service.honorary}</strong></p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <div className={styles.user_name}>
              <h4>{service.title}</h4>
            </div>
            <span>|</span>
            <div className={styles.about}>
              <h5>{service.about}</h5>
            </div>
          </div>
          <div className={styles.description}>
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </article>
  );

  const Desktop = () => <article className={styles.service} />;

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
