// Dependencies
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

// Components

// Assets
import hashKey from "./assets/images/hash-key.svg";

// Styles
import styles from "./scss/AddNewService.scss";

class AddNewService extends Component {
  constructor(props) {
    super(props);
    this.addTag = this.addTag.bind(this);
    this.Desktop = this.Desktop.bind(this);
    this.editingNewService = this.editingNewService.bind(this);
    this.newService = this.newService.bind(this);
    this.newTitle = this.newTitle.bind(this);
    this.Mobile = this.Mobile.bind(this);
  }
  componentDidMount() {
    const { LoadNewServicesConfig, type } = this.props;
    LoadNewServicesConfig(type);
  }
  addTag(e) {
    e.preventDefault();
    const { AddTag, tags } = this.props;
    const tag = document.querySelector("input#addServiceInput");
    if (tags.length < 4) {
      if (tag.value !== "") {
        if (!tags.find(el => el === tag.value)) {
          AddTag(tag.value);
          tag.value = "";
        }
      }
    }
  }
  Desktop() {
    return <section className={styles.add_service_container} />;
  }
  editingNewService() {
    const { newService } = this;
    const { ChangeEditingState, editing } = this.props;
    return editing ? (
      newService()
    ) : (
      <h3 onClick={() => ChangeEditingState()}>Crear nuevo servicio</h3>
    );
  }
  newService() {
    const { addTag, newTitle } = this;
    const { newServiceConfig, tags } = this.props;
    return (
      <form className={styles.editing}>
        <div className={styles.title}>
          <input type="text" placeholder="Titulo" onChange={newTitle} />
        </div>
        <div className={styles.description}>
          <textarea
            name="description"
            id="description"
            placeholder="Añade una descripción sobre tu nueva oferta de servicio. Recuerda que las publicaciones mas completas son las mas posicionadas en Friender, espesificar muy bien los detalles de tus ofertas asi como aclarar los terminos y condiciones necesarios para el correcto entendimiento de las publicaciones..."
          />
        </div>
        <span>
          Añade <strong>#Tags</strong> para posicionar tus publicaciones
        </span>
        <div className={styles.tags}>
          <div className={styles.add}>
            <div className={styles.image}>
              <img src={hashKey} alt="Tag Image" />
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Añadir etiqueta"
                id="addServiceInput"
              />
            </div>
          </div>
          <div className={styles.addButton}>
            <button onClick={addTag}>Añadir</button>
          </div>
          <div className={styles.tagList}>
            <ul className={styles.list}>
              {tags.map((tag, i) => (
                <li className={styles.item} key={i}>
                  {`#${tag}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.config}>
          {newServiceConfig.map(
            (element, index) =>
              element.type === "input" ? (
                <div className={styles.inputBox} key={index}>
                  <input type="text" placeholder={element.spanishName} />
                </div>
              ) : element.multiple ? (
                <div className={styles.selectBox} key={index}>
                  {element.values.map((select, key) => (
                    <div className={styles.item} key={key}>
                      {select.type === "input" ? (
                        <input type="text" placeholder={select.spanishName} />
                      ) : (
                        <select name={select.name} id={select.name}>
                          {select.options.map((option, K) => (
                            <option value={option} key={K}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.inputBox} key={index}>
                  <input type="text" placeholder={element.spanishName} />
                </div>
              )
          )}
        </div>
      </form>
    );
  }
  newTitle(e) {
    const { NewTitle } = this.props;
    if (e.target.value !== "") {
      NewTitle(e.target.value);
      e.target.value = "";
    }
  }
  Mobile() {
    const { editingNewService } = this;
    return (
      <section className={styles.add_service_container_mobile}>
        <div className={styles.newService}>{editingNewService()}</div>
      </section>
    );
  }
  render() {
    const { isMobile } = this.props.devices;
    const { Desktop, Mobile } = this;
    return isMobile ? Mobile() : Desktop();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  editing: state.user.profil.editing,
  newServiceConfig: state.user.posts.newServiceConfig,
  tags: state.user.posts.AddNewService.tags,
  type: state.user.type
});

const mapDispatchToProps = dispatch => ({
  AddCategory(category) {
    dispatch({
      type: "ADD_CATEGORY",
      category
    });
  },
  AddDescription(description) {
    dispatch({
      type: "ADD_DESCRIPTION",
      description
    });
  },
  AddDirection(direction) {
    dispatch({
      type: "ADD_DIRECTION",
      direction
    });
  },
  AddMunincipality(munincipality) {
    dispatch({
      type: "ADD_MUNINCIPALITY",
      munincipality
    });
  },
  AddProvince(province) {
    dispatch({
      type: "ADD_PROVINCE",
      province
    });
  },
  AddTag(tag) {
    dispatch({
      type: "ADD_TAG",
      tag
    });
  },
  AddTitle(title) {
    dispatch({
      type: "ADD_TITLE",
      title
    });
  },
  AddValue(value) {
    dispatch({
      type: "ADD_VALUE",
      value
    });
  },
  ChangeEditingState() {
    dispatch({
      type: "CHANGE_EDITNG"
    });
  },
  LoadNewServicesConfig(type) {
    type === "people"
      ? dispatch(dispatch => axios
        .get("http://localhost:3000/api/new-service-people-config")
        .then(res =>
          dispatch({
            type: "LOAD_NEW_SERVICES_CONFIG",
            data: res.data
          })
        )
        .catch(err =>
          console.log(`No se pudieron solicitar los datos al servidor: Error: ${err}`)
        )
      )
      : dispatch(dispatch => axios
        .get("http://localhost:3000/api/new-service-company-config")
        .then(res =>
          dispatch({
            type: "LOAD_NEW_SERVICES_CONFIG",
            data: res.data
          })
        )
        .catch(err =>
          console.log(
            `No se pudieron solicitar los datos al servidor: Error: ${err}`
          )
        )
      );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewService);
