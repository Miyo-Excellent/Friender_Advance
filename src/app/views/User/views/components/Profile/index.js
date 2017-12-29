// Dependencies
import axios from 'axios';
import { connect } from "react-redux";
import React, { Component } from 'react';

// Components
import ShortInformation from './components/ShortInformation';
import Summary from './components/Summary';
import Publish from './components/Publish';
import ProfileInformation from './components/ProfileInformation';
import Connectors from './components/Connectors';

// Styles
import styles from "./scss/Profil.scss";
//import People from '../../People/index';
class Profil extends Component {
  constructor(props) {
    super(props);
    this.company = this.company.bind(this);
    this.desktop = this.desktop.bind(this);
    this.mobile = this.mobile.bind(this);
    this.people = this.people.bind(this);
    this.view = this.view.bind(this);
  }
  componentDidMount() {
    const { loadServices, loadNewServicesConfig, loadUser, user } = this.props;
    loadUser();
    loadServices();
    loadNewServicesConfig(user.type);
  }
  company() {
    return (<h1>Business</h1>);
  }
  desktop() {
    const { company, people } = this;
    const { user } = this.props;
    return user.type === 'people'
      ? people()
      : company();
  }
  mobile() {
    const { user } = this.props;
    return user.type === 'people'
      ? (<main className={styles.profil_mobile}>
        <ShortInformation />
        <Summary />
        <Publish />
      </main>)
      : (<h1>Business</h1>);
  }
  people() {
    return (<main className={styles.profil_desktop}>
      <section className={styles.information_desktop}>
        <ProfileInformation />
        <Summary />
        <Connectors />
      </section>
      <section className={styles.dinamic_content_desktop}>
        <Publish />
      </section>
      <section className={styles.friends}>
        <h1>All Friends</h1>
      </section>
    </main>);
  }
  view() {
    const { desktop, mobile } = this;
    const { isMobile } = this.props.devices;
    return (isMobile ? mobile() : desktop());
  }
  render() {
    const { view } = this;
    return view();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  loadUser() {
    dispatch(dispatch => axios.get("http://localhost:3000/api/connectors")
      .then(res => dispatch({
        type: 'CHANGE_ALL_DATA_USER',
        data: res.data
      })))
      .catch( error => console.error(`No se pudo obtener los datos del usuario, por favor revise el nombre de usuario o la contraseña, puede que uno de ello esten errados: ${error}`));
  },
  loadServices() {
    dispatch( dispatch => axios.get("http://localhost:3000/api/servicesPosts")
      .then(res => dispatch({
        type: "LOAD_SERVICES_POSTS",
        data: res.data
      }))
      .catch(err => console.log(`No se pudieron solicitar los datos al servidor: Error: ${err}`)));
  },
  loadNewServicesConfig(type) {
    const error = err =>
      console.log( `No se pudieron solicitar los datos al servidor: Error: ${err}`);

    type === "people"
      ? dispatch( dispatch => axios.get("http://localhost:3000/api/new-service-people-config")
        .then(res => dispatch({
          type: "LOAD_NEW_SERVICES_CONFIG",
          data: res.data
        }))
        .catch(err => error(err)))
      : dispatch( dispatch => axios.get("http://localhost:3000/api/new-service-company-config")
        .then(res => dispatch({
          type: "LOAD_NEW_SERVICES_CONFIG",
          data: res.data
        }))
        .catch(err => error(err)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
