// Dependencies
import { connect } from "react-redux";
import React from "react";

// Components
import ShortInformation from './components/ShortInformation';
import Summary from './components/Summary';
import Publish from './components/Publish';
import ProfileInformation from './components/ProfileInformation';
import Followers from './components/Followers';

// Styles
import styles from "./scss/Profil.scss";

const Profil = ({ devices, user }) => {
  const { isMobile } = devices;
  const Mobile = () => user.type === 'people'
    ? (<main className={styles.profil_mobile}>
      <ShortInformation />
      <Summary />
      <Publish />
    </main>)
    : (<h1>Business</h1>);

  const Desktop = () => user.type === 'people'
    ? (<main className={styles.profil_desktop}>
      <section className={styles.information_desktop}>
        <ProfileInformation />
        <Summary />
        <Followers />
      </section>
      <section className={styles.dinamic_content_desktop}>
        <h1>Dinamic Content</h1>
      </section>
      <section className={styles.friends}>
        <h1>All Friends</h1>
      </section>
    </main>)
    : (<h1>Business</h1>);

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
