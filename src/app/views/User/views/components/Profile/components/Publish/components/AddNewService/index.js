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
    this.addDescription = this.addDescription.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.Desktop = this.Desktop.bind(this);
    this.editingNewService = this.editingNewService.bind(this);
    this.inptuConfigChange = this.inptuConfigChange.bind(this);
    this.newService = this.newService.bind(this);
    this.Mobile = this.Mobile.bind(this);
    this.SetNewService = this.SetNewService.bind(this);
  }
  addDescription(e) {
    const { AddDescription } = this.props;
    const description = e.target.value;
    AddDescription(description);
  }
  addTag(e) {
    e.preventDefault();
    const { AddTag, tags } = this.props;
    const tag = document.querySelector("input#addServiceInput");
    if (tags.length < 4 && tag.value.length > 2) {
      if (tag.value !== "") {
        if (!tags.find(el => el === tag.value)) {
          AddTag(tag.value);
          tag.value = "";
        }
      }
    }
  }
  addTitle(e) {
    const { AddTitle } = this.props;
    const title = e.target.value;
    title !== "" && title.length >= 4
      ? AddTitle(title)
      : AddTitle("");
  }
  deleteTag(e, i) {
    const { DeleteTag } = this.props;
    const target = e.target;
    const tag = target.parentElement.textContent.slice(3, -3).trim();

    e.preventDefault();

    if (target.id === `delete_tag_item${i}`) {
      console.dir(tag);
      DeleteTag(tag);
    }

  }
  Desktop() {
    const { editingNewService } = this;
    return <section className={styles.add_service_container}>{
      <div className={styles.newService}>{editingNewService()}</div>
    }</section>;
  }
  editingNewService() {
    const { newService } = this;

    const { ChangeEditingState, editing } = this.props;

    if (editing) {
      return newService();
    } else {
      return ( <h3 onClick={ChangeEditingState}>Crear nuevo servicio</h3>);
    }

  }
  inptuConfigChange(e, config) {
    const {
      AddDirection,
      AddCategory, AddMunincipality,
      AddProvince, AddScheduleFromHour,
      AddScheduleFromMinutes, AddScheduleFromSystem,
      AddScheduleToHour, AddScheduleToMinutes,
      AddScheduleToSystem, AddValue
    } = this.props;

    //const firstChild = e.target.firstChild;

    const id = e.target.id;

    const name = e.target.name;

    //const tag = e.target;

    let value = e.target.value;

    if (config.name === "category") {
      //tag.removeChild(firstChild);
      AddCategory(value);

    } else if (name === "direction") {
      AddDirection(value);

    } else if (name === "minincipality") {
      //tag.removeChild(firstChild);
      AddMunincipality(value);

    } else if (name === "province") {
      //tag.removeChild(firstChild);
      AddProvince(value);

    } else if (id === "from" || id === "to") {
      const fullHour = value.split(":");

      const hour = (H = fullHour[0] || "12") => H.length < 2
        ? `0${H || "0"}`.slice(0, 2)
        : H.slice(0, 2);

      const minutes = (M = fullHour[1] || "00") => M.length < 2
        ? `0${M || "0"}`.slice(0, 2)
        : M.slice(0, 2);

      const summary = `${hour(fullHour[0])}:${minutes(fullHour[1])}`.slice(0,5);

      const setFullHour = () => {
        parseInt(hour()) < 25
          ? id === "from"
            ? AddScheduleFromHour(hour())
            : AddScheduleToHour(hour())
          : console.log("CAMPOS MAL ESCRITOS");

        parseInt(minutes()) < 60
          ? id === "from"
            ? AddScheduleFromMinutes(minutes())
            : AddScheduleToMinutes(minutes())
          : console.log("CAMPOS MAL ESCRITOS");
      };
      !/(\.\_\-\+\─\·\̣\`\¨\~\!\"\#\$\%\&\=\?\¡\¿\'\<\>\|)/g.test(summary)
        ? true //!/[a-zA-Z]/.test(summary)
          ? setFullHour()
          : console.warn("TIENE LETRAS")
        : console.warn("TIENE SIGNOS");
    } else if (name === "typeOfSystem_from" || name === "typeOfSystem_to") {
      value = value.toUpperCase();
      console.log(value);
      name === "typeOfSystem_from"
        ? AddScheduleFromSystem(value)
        : AddScheduleToSystem(value);
    } else if (id === "value") {
      if (!/[a-zA-Z]/g.test(value) && value !== "") {
        AddValue(value);
      }
    }
  }
  newService() {
    const { addDescription, addTag, deleteTag, addTitle, inptuConfigChange } = this;

    const { addNewService, ChangeEditingState, CreateNewService, devices, newServiceConfig, tags } = this.props;

    const { description } = addNewService;

    const cancel = e => {
      e.preventDefault();
      ChangeEditingState();
    };
    const add = e => {
      e.preventDefault();

      const { SetNewService } = this;

      const { addNewService, DeleteNewServiceState } = this.props;

      const { address, category, direction, schedule, tags, title, value } = addNewService;

      const { munincipality, province } = address;

      if (
        title !== "" &&
        title !== undefined &&
        title !== null &&
        /[a-zA-Z.-\/\\\@\&\$\"\']{3,}/.test(title)) {
        if (
          description !== "" &&
          description !== undefined &&
          description !== null &&
          /[a-zA-Z]{3,}/.test(description)) {
          if (
            direction !== "" &&
            direction !== undefined &&
            direction !== null &&
            /[a-zA-Z0-9]{3,}/.test(direction)) {
            if (
              tags.length > 0 &&
              tags.length !== undefined &&
              tags.length !== 0) {
              if (
                category !== "" &&
                category !== /categoria/i &&
                category !== undefined &&
                category !== null &&
                /[a-zA-Z]{3,}/.test(category)) {
                if (
                  value !== "" &&
                  value !== 0 &&
                  value > 0 &&
                  value !== undefined &&
                  value !== null) {
                  if (
                    province !== "" &&
                    province !== /provincia/i &&
                    province !== undefined &&
                    province !== null &&
                    /[a-zA-Z]{3,}/.test(province)) {
                    if (
                      munincipality !== "" &&
                      munincipality !== /provincia/i &&
                      munincipality !== undefined &&
                      munincipality !== null &&
                      /[a-zA-Z]{3,}/.test(munincipality)) {
                      if (
                        schedule.from.hour !== "" &&
                        schedule.to.hour !== "" &&
                        (parseInt(schedule.from.hour) !== 0 &&
                          parseInt(schedule.to.hour) !== 0) &&
                        (parseInt(schedule.from.hour) > 0 &&
                          parseInt(schedule.to.hour) > 0) &&
                        (schedule.from.hour !== undefined &&
                          schedule.to.hour !== undefined) &&
                        (schedule.from.hour !== null && schedule.to.hour !== null)) {
                        if (
                          schedule.from.minutes !== "" &&
                          schedule.to.minutes !== "" &&
                          (schedule.from.minutes !== undefined &&
                            schedule.to.minutes !== undefined) &&
                          (schedule.from.minutes !== null &&
                            schedule.to.minutes !== null)) {
                          if (
                            schedule.from.system !== "" &&
                            schedule.to.system !== "" &&
                            ((schedule.from.system === "PM" ||
                              schedule.from.system === "AM") &&
                              (schedule.to.system === "PM" ||
                                schedule.to.system === "AM")) &&
                            (!/[0-9]/g.test(schedule.from.system) &&
                              /(PM||AM)/.test(schedule.from.system) &&
                              (!/[0-9]/g.test(schedule.to.system) &&
                                /(PM||AM)/.test(schedule.to.system))) &&
                            (schedule.from.system !== undefined &&
                              schedule.to.system !== undefined) &&
                            (schedule.from.system !== null &&
                              schedule.to.system !== null)) {
                            CreateNewService(addNewService);
                            SetNewService({
                              address, category,
                              description, direction,
                              schedule, tags,
                              title, value
                            });
                            DeleteNewServiceState();
                            ChangeEditingState();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    if (devices.isMobile) {
      return (
        <form className={styles.editing_mobile}>
          <div className={styles.title_mobile}>
            <input type="text" placeholder="Titulo" id="title" onChange={addTitle} />
          </div>
          <div className={styles.description_mobile}>
            <textarea name="description" id="description" placeholder={
              !description && description === ""
                ? "Añade una descripción sobre tu nueva oferta de servicio. Recuerda que las publicaciones mas completas son las mas posicionadas en Friender, espesificar muy bien los detalles de tus ofertas asi como aclarar los terminos y condiciones necesarios para el correcto entendimiento de las publicaciones..."
                : description
            } onChange={addDescription}
            />
          </div>
          <span>
            Añade <strong>#Tags</strong> para posicionar tus publicaciones
          </span>
          <div className={styles.tags_mobile}>
            <div className={styles.add_mobile}>
              <div className={styles.image_mobile}>
                <img src={hashKey} alt="Tag Image" />
              </div>
              <div className={styles.inputBox_mobile}>
                <input type="text" placeholder="Añadir etiqueta" id="addServiceInput" />
              </div>
            </div>
            <div className={styles.addButton_mobile}>
              <button onClick={addTag}>Añadir</button>
            </div>
            <div className={styles.tagList_mobile}>
              <ul className={styles.list_mobile}>
                {tags.map((tag, i) => (
                  <li className={styles.item_mobile} key={i} onClick={deleteTag}>{`#${tag}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.config_mobile}>{
            newServiceConfig.map( (element, index) =>
              element.type === "input" ? (
                <div className={styles.inputBox_mobile} key={index}>
                  <input type="text" id={element.name} placeholder={element.spanishName} onChange={e => inptuConfigChange(e, element)} />
                </div>
              ) : element.multiple ? (
                <div className={styles.selectBox_mobile} key={index}>
                  {element.values.map((select, key) => (
                    <div className={styles.item_mobile} key={key}>{select.type === "input" ? (
                      <input type="text" id={select.name} name={select.name} placeholder={select.spanishName} onChange={e => inptuConfigChange(e, element)} />
                    ) : (
                      <select name={select.name} id={select.name} onChange={e => inptuConfigChange(e, element)}>
                        {select.options.map((option, K) => (
                          <option value={option} key={K}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}</div>
                  ))}
                </div>
              ) : element.type === "input" ? (
                <div className={styles.inputBox_mobile} key={index}>
                  <input type="text" id={element.name} placeholder={element.spanishName} onChange={e => inptuConfigChange(e, element)}/>
                </div>
              ) : element.type === "box" ? (
                <div className={styles.box_mobile} key={index}>
                  {element.fields.map((schedule, i) => (
                    <div className={styles.scheduleCamp_mobile} key={i}>
                      <span className={styles.about_mobile}>
                        {schedule.spanishName}
                      </span>
                      <input type="text" id={schedule.name} placeholder="8:00" onChange={e => inptuConfigChange(e, element)} />
                      <select name={`typeOfSystem_${schedule.name}`} id={`typeOfSystem_${schedule.name}`} onChange={e => inptuConfigChange(e, element)}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.selectBox_mobile} key={index}>
                  <select name={element.name} id={element.name} onChange={e => inptuConfigChange(e, element)}>
                    {element.options.map((option, key) => (
                      <option value={option} key={key}>
                        {element.spanishOptions[key]}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
          <div className={styles.courier_box_mobile}>
            <div className={styles.cancel_mobile}>
              <button onClick={e => cancel(e)}>Cancelar</button>
            </div>
            <div className={styles.add_mobile}>
              <button onClick={e => add(e)}>Añadir</button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <form className={styles.editing}>
          <div className={styles.title}>
            <input type="text" placeholder="Titulo" id="title" onChange={addTitle} />
          </div>
          <div className={styles.description}>
            <textarea name="description" id="description" placeholder={
              !description && description === ""
                ? "Añade una descripción sobre tu nueva oferta de servicio. Recuerda que las publicaciones mas completas son las mas posicionadas en Friender, espesificar muy bien los detalles de tus ofertas asi como aclarar los terminos y condiciones necesarios para el correcto entendimiento de las publicaciones..."
                : description
            } onChange={addDescription}
            />
          </div>
          <span className={styles.banner_tags}> Añade <strong>#Tags</strong> para posicionar tus publicaciones </span>
          <div className={styles.tags}>
            <div className={styles.add}>
              <div className={styles.image}>
                <img src={hashKey} alt="Tag Image" />
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Añadir etiqueta" id="addServiceInput" />
              </div>
            </div>
            <div className={styles.addButton}>
              <button onClick={addTag}>Añadir</button>
            </div>
            <div className={styles.tagList}>
              <ul className={styles.list}>
                {tags.map((tag, i) => (
                  <li className={styles.item} key={i} onClick={e => deleteTag(e, i)}> <span>#</span> {`${tag}`} <button id={`delete_tag_item${i}`}>X</button> </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.config}>{
            newServiceConfig.map( (element, index) =>
              element.type === "input" ? (
                <div className={styles.inputBox} key={index}>
                  <input type="text" id={element.name} placeholder={element.spanishName} onChange={e => inptuConfigChange(e, element)} />
                </div>
              ) : element.multiple ? (
                <div className={styles.selectBox} key={index}>{
                  element.values.map((select, key) => (
                    <div className={styles.item} key={key}>{select.type === "input" ? (
                      <input type="text" id={select.name} name={select.name} placeholder={select.spanishName} onChange={e => inptuConfigChange(e, element)} />
                    ) : (
                      <select name={select.name} id={select.name} onChange={e => inptuConfigChange(e, element)}>
                        {select.options.map((option, K) => (
                          <option value={option} key={K}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}</div>
                  ))
                }</div>
              ) : element.type === "input" ? (
                <div className={styles.inputBox} key={index}>
                  <input type="text" id={element.name} placeholder={element.spanishName} onChange={e => inptuConfigChange(e, element)}/>
                </div>
              ) : element.type === "box" ? (
                <div className={styles.box} key={index}>
                  {element.fields.map((schedule, i) => (
                    <div className={styles.scheduleCamp} key={i}>
                      <div className={styles.about}>
                        <span> {schedule.spanishName} </span>
                      </div>
                      <div className={styles.hour}>
                        <input type="text" id={schedule.name} placeholder="8:00" onChange={e => inptuConfigChange(e, element)} />
                      </div>
                      <select name={`typeOfSystem_${schedule.name}`} id={`typeOfSystem_${schedule.name}`} onChange={e => inptuConfigChange(e, element)}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.selectBox} key={index}>
                  <select name={element.name} id={element.name} onChange={e => inptuConfigChange(e, element)}>
                    {element.options.map((option, key) => (
                      <option value={option} key={key}>
                        {element.spanishOptions[key]}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
          <div className={styles.courier_box}>
            <div className={styles.cancel}>
              <button onClick={e => cancel(e)}>Cancelar</button>
            </div>
            <div className={styles.add}>
              <button onClick={e => add(e)}>Añadir</button>
            </div>
          </div>
        </form>
      );
    }
  }
  Mobile() {
    const { editingNewService } = this;
    return (
      <section className={styles.add_service_container_mobile}>
        {<div className={styles.newService_mobile}>{editingNewService()}</div>}
      </section>
    );
  }
  SetNewService(newService) {
    axios.post('/api/created-new-service', newService);
  }
  render() {
    const { isMobile } = this.props.devices;
    const { Desktop, Mobile } = this;
    return isMobile ? Mobile() : Desktop();
  }
}
const mapStateToProps = state => ({
  addNewService: state.user.posts.AddNewService,
  devices: state.devices,
  editing: state.user.profile.editing,
  newServiceConfig: state.user.posts.newServiceConfig,
  tags: state.user.posts.AddNewService.tags,
  type: state.user.type
});
const mapDispatchToProps = dispatch => ({
  AddCategory(category) {
    dispatch({ type: "ADD_CATEGORY", category });
  },
  AddDescription(description) {
    dispatch({ type: "ADD_DESCRIPTION", description });
  },
  AddDirection(direction) {
    dispatch({ type: "ADD_DIRECTION", direction });
  },
  AddMunincipality(munincipality) {
    dispatch({ type: "ADD_MUNINCIPALITY", munincipality });
  },
  AddProvince(province) {
    dispatch({ type: "ADD_PROVINCE", province });
  },
  AddTag(tag) {
    dispatch({ type: "ADD_TAG", tag });
  },
  AddSchedule(schedule) {
    dispatch({ type: "ADD_SCHEDULE", schedule });
  },
  AddScheduleFromHour(hour) {
    dispatch({ type: "ADD_SCHEDULE_FROM_HOUR", hour });
  },
  AddScheduleFromMinutes(minutes) {
    dispatch({ type: "ADD_SCHEDULE_FROM_MINUTES", minutes });
  },
  AddScheduleFromSystem(system) {
    dispatch({ type: "ADD_SCHEDULE_FROM_SYSTEM", system });
  },
  AddScheduleToHour(hour) {
    dispatch({
      type: "ADD_SCHEDULE_TO_HOUR",
      hour
    });
  },
  AddScheduleToMinutes(minutes) {
    dispatch({ type: "ADD_SCHEDULE_TO_MINUTES", minutes });
  },
  AddScheduleToSystem(system) {
    dispatch({ type: "ADD_SCHEDULE_TO_SYSTEM", system });
  },
  AddTitle(title) {
    dispatch({ type: "ADD_TITLE", title });
  },
  AddValue(value) {
    dispatch({ type: "ADD_VALUE", value });
  },
  ChangeEditingState() {
    dispatch({ type: "CHANGE_EDITNG_STATE" });
  },
  CreateNewService(service) {
    dispatch({ type: "CREATE_NEW_SERVICE", service });
  },
  DeleteTag(tag) {
    dispatch({ type: "DELETE_TAG", tag });
  },
  DeleteNewServiceState() {
    dispatch({ type: "DELETE_NEW_SERVICE_STATE" });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewService);
