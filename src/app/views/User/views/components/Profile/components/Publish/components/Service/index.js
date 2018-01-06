// Dependencies
import { connect } from "react-redux";
import React, { Component } from 'react';

// Components

// Utils
import { whatCalification } from './utils';

// Styles
import styles from "./scss/Service.scss";

// Assets
import like from './assets/img/like_2.svg';
import deslike from './assets/img/like_2_2.svg';
import shapes from './assets/img/shapes_2.svg';
import unShapes from './assets/img/shapes_2_2.svg';

class Service extends Component {
  constructor(props) {
    super(props);
    this.changeLike = this.changeLike.bind(this);
    this.changeShapes = this.changeShapes.bind(this);
    this.Desktop = this.Desktop.bind(this);
    this.Mobile = this.Mobile.bind(this);
    this.View = this.View.bind(this);
  }
  changeLike (e, service) {
    const { addFavorite, favorites, removeFavorite } = this.props;
    const validation = element => (e.target.tagName === 'DIV')
      ? e.target.childNodes[0].src = element
      : e.target.src = element;

    if (favorites.find(favorite => favorite._id === service._id)) {
      validation(deslike);
      removeFavorite(service._id);
    } else {
      validation(like);
      addFavorite(service);
    }
  }
  changeShapes(e, service) {
    if (e.target.tagName === 'DIV') {
      e.target.childNodes[0].src = shapes;
    } else {
      e.target.src = shapes;
    }
  }
  Mobile() {
    const { service } = this.props;
    return (
      <article className={styles.service_mobile}>
        <div className={styles.log_mobile}>
          <img src={service.img} alt="logo" />
        </div>
        <div className={styles.information_mobile}>
          <div className={styles.short_info_mobile}>
            {whatCalification(styles, service)}
            <div className={styles.honorary_delay_mobile}>
              <p>valor: <strong>$ {service.honorary}</strong></p>
            </div>
          </div>
          <div className={styles.info_mobile}>
            <div className={styles.title_mobile}>
              <div className={styles.user_name_mobile}>
                <h4>{service.title}</h4>
              </div>
              <div className={styles.about_mobile}>
                <h5>{service.about}</h5>
              </div>
            </div>
            <div className={styles.description_mobile}>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </article>
    );

  }
  Desktop() {
    const { changeLike, changeShapes, style } = this;
    const { addPostulation, changeThisShowRequirementsState, isPostulated, service, showRequirements, removePostulation } = this.props;

    const showMeRequirements = () => changeThisShowRequirementsState(service);

    return (
      <article className={styles.service} style={!isPostulated(service)
        ? {
          background: "hsla(90, 75%, 50%, .2)"
        } : {
          zIndex: 0
        }
      }>
        <div className={styles.image} style={style(service.img, 'image')} />
        <div className={styles.interactive}>
          <div className={styles.like} onClick={e => changeLike(e, service)}>
            <img src={deslike} alt="like" />
          </div>
          <div className={styles.shapes} onClick={e => changeShapes(e, service)}>
            <img src={unShapes} alt="like" />
          </div>
        </div>
        <div className={styles.like} style={style(service.img, 'like')} />
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
              <div className={styles.about}>
                <h5>{service.about.slice(0, 45)}</h5>
              </div>
            </div>
            <div className={styles.description}>{showRequirements(service)
              ? (
                <section className={styles.more_information}>
                  <ul className={styles.comments}>{service.comments.map((comment, index, arr) =>
                    <li className={styles.comment} key={index}>
                      <div className={styles.comment_user_photo} style={style(comment.user.picture, 'image')}/>
                      <div className={styles.content}>
                        <div className={styles.meta_info}>
                          <span>{`${comment.user.name} | @${comment.user.nickname}`}</span>
                          <p>{comment.comment.slice(0, 79)}</p>
                        </div>
                      </div>
                    </li>
                  )}</ul>
                </section>
              ) : (
                <p>{service.description.slice(0, 326)}</p>
              )
            }</div>
          </div>
          <div className={styles.controllers}>
            <div className={styles.postulate}>
              <button
                className={
                  isPostulated(service)
                    ? styles.cls_button_postulate
                    : styles.cls_button_not
                } onClick={() =>
                  isPostulated(service)
                    ? addPostulation(service)
                    : removePostulation(service._id)
                }
              >{isPostulated(service)
                  ? "Postularse"
                  : "Postulado"
                }</button>
            </div>
            <div className={styles.comments}>
              <button className={showRequirements(service)
                ? styles.cls_button_not_comments
                : styles.cls_button_comments
              } onClick={showMeRequirements
              }>{showRequirements(service)
                  ? "Detalles"
                  : "Comentarios"
                }</button>
            </div>
          </div>
        </div>
      </article>
    );
  }
  style(img, how) {
    if (how === 'image') {
      return {
        background: `
          url(${img}) center center no-repeat
          hsla(0, 0%, 98%, 1)`
      };
    } else if (how === 'like') {
      return { };
    } else if (how === 'shared') {
      return { };
    }
  }
  View () {
    const { Desktop, Mobile } = this;
    const { isMobile } = this.props.devices;
    return (isMobile ? Mobile() : Desktop());
  }
  render() {
    const { View } = this;
    return View();
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  favorites: state.user.favorites,
  isPostulated: (service) => state.user.postulations.filter(postulation => postulation._id === service._id).length < 1,
  showRequirements: (Newservice) => state.user.posts.services.filter(service => service._id === Newservice._id)[0].state.showRequirements
});
const mapDispatchToProps = dispatch => ({
  addFavorite(favorite) {
    dispatch({
      type: 'ADD_FAVORITE',
      favorite
    });
  },
  addPostulation(postulation) {
    dispatch({
      type: 'ADD_POSTULATION',
      postulation
    });
  },
  addNewServiceState(service) {
    dispatch({
      type: 'ADD_NEW_SERVICE_STATE',
      state: {
        showRequirements: false
      }
    });
  },
  changeThisShowRequirementsState(service) {
    dispatch({
      type: "CHANGE_THIS_SHOW_REQUIREMENTS_STATE",
      _id: service._id
    });
  },
  removeFavorite(_id) {
    dispatch({
      type: 'REMOVE_FAVORITE',
      _id
    });
  },
  removePostulation(_id) {
    dispatch({
      type: 'REMOVE_POSTULATION',
      _id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
