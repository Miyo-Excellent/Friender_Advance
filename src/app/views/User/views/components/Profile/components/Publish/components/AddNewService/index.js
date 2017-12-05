// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/AddNewService.scss";

const AddNewService = ({ ChangeEditingState, devices, editing }) => {
  const { isMobile } = devices;
  const editingNewService = () =>
    editing ? <h3 onClick={() => ChangeEditingState()}>Editando nuevo servicio</h3> : <h3 onClick={() => ChangeEditingState()}>Crear nuevo servicio</h3>;
  const Mobile = () => (
    <section className={styles.add_service_container_mobile}>
      <div className={styles.input_title}>{editingNewService()}</div>
    </section>
  );

  const Desktop = () => <section className={styles.add_service_container} />;

  const View = () => isMobile ? Mobile() : Desktop();

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  editing: state.user.profil.editing
});

const mapDispatchToProps = dispatch => ({
  ChangeEditingState() {
    dispatch({
      type: 'CHANGE_EDITNG'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewService);
