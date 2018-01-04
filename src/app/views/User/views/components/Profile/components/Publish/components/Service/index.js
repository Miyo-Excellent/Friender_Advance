// Dependencies
import { connect } from "react-redux";
import React from "react";

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

const Service = ({ addFavorite, devices, favorites, lastItem, removeFavorite, service }) => {
  const { isMobile } = devices;
  const Mobile = () => (
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

  const style = (el, how) => {
    if (how === 'image') {
      return {
        background: `url(${el.img}) center center no-repeat`
      };
    } else if (how === 'like') {
      return { };
    } else if (how === 'shared') {
      return { };
    }

  };

  const changeLike = (e, options) => {
    const validation = element => (e.target.tagName === 'DIV')
      ? e.target.childNodes[0].src = element
      : e.target.src = element;

    if (favorites.find(favorite => favorite._id === options._id)) {
      validation(deslike);
      removeFavorite(options._id);
    } else {
      validation(like);
      addFavorite(options);
    }
  };
  const changeShapes = (e, options) => {
    if (e.target.tagName === 'DIV') {
      e.target.childNodes[0].src = shapes;
    } else {
      e.target.src = shapes;
    }
  };
  const Desktop = () => <article className={styles.service}>
    <div className={styles.image} style={style(service, 'image')} />
    <div className={styles.interactive}>
      <div className={styles.like} onClick={e => changeLike(e, service)}>
        <img src={deslike} alt="like" />
      </div>
      <div className={styles.shapes} onClick={e => changeShapes(e, service)}>
        <img src={unShapes} alt="like" />
      </div>
    </div>
    <div className={styles.like} style={style(service, 'like')} />
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
        <div className={styles.description}>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  </article>;

  const View = () => (isMobile ? Mobile() : Desktop());

  return View();
};

const mapStateToProps = state => ({
  devices: state.devices,
  favorites: state.user.favorites
});
const mapDispatchToProps = dispatch => ({
  addFavorite(favorite) {
    dispatch({
      type: 'ADD_FAVORITE',
      favorite
    });
  },
  removeFavorite(_id) {
    dispatch({
      type: 'REMOVE_FAVORITE',
      _id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
