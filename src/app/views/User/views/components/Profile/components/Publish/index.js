// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components
//import Offert from './components/Offert';
import Service from './components/Service';

// Styles
import styles from "./scss/Publish.scss";

const Publish = ({ devices, services }) => {
  const { isMobile } = devices;
  const Mobile = () => (
    <article className={styles.publish_mobile}>
      <h1 className={styles.title}>Publicaciones recientes</h1>
      <div className={styles.wrapper}>
        {services.map((service, i) => <Service key={i} service={service}/>)}
      </div>
    </article>
  );

  const Desktop = () => <article className={styles.publish} />;

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  services: state.user.posts.services
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
