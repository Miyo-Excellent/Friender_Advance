// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
import styles from './scss/People.scss';

const People = ({
  ChangeEmail,
  ChangeLastname,
  ChangeMunicipality,
  ChangeName,
  ChangeNickname,
  ChangePassword,
  ChangePhone,
  ChangeProvince,
  userData
}) => {
  const whoStep = UserData => {
    const {
      email,
      lastname,
      municipality,
      name,
      nickname,
      phone,
      province,
      step
    } = UserData;

    switch (step) {
      case 2:
        return (
          <div className={styles.one}>
            <div className={styles.name}>
              <input type="text" id="name" name="name" placeholder={name} onChange={e => ChangeName(e.target.value)}/>
            </div>
            <div className={styles.lastname}>
              <input type="text" id="lastname" name="lastname" placeholder={lastname} onChange={e => ChangeLastname(e.target.value)} />
            </div>
            <div className={styles.phone}>
              <input type="tel" id="phone" name="phone" placeholder={phone} onChange={e => ChangePhone(e.target.value)} />
            </div>
            <div className={styles.email}>
              <input type="email" id="email" name="email" placeholder={email} onChange={e => ChangeEmail(e.target.value)} />
            </div>
            <div className={styles.address}>
              <div className={styles.provices}>
                <select name="province" id="province" onChange={e => ChangeProvince(e.target.value)} value={province}>
                  <option value="index">Provincia</option>
                  <option value="antioquia">Antioquia</option>
                </select>
              </div>
              <div className={styles.municipality}>
                <select name="municipality" id="municipality" onChange={e => ChangeMunicipality(e.target.value)} value={municipality}>
                  <option value="index">Municipio</option>
                  <option value="medellin">Medellin</option>
                </select>
              </div>
            </div>
          </div>
        );
        break;

      case 3:
        return (
          <div className={styles.two}>
            <div className={styles.nick}>
              <input type="text" id="nick" name="nick" placeholder={nickname} onChange={e => ChangeNickname(e.target.value)} />
            </div>
            <div className={styles.password}>
              <input type="password" id="pwd" name="pwd" placeholder="Contraseña" onChange={e => ChangePassword(e.target.value)} />
            </div>
          </div>
        );
        break;

      default:
        return <h1>Problemas con el registro <Link to="/">Volver</Link></h1>;
        break;
    }
  };
  return (
    <form className={styles.people}>
      <div className={styles.steps}>
        {whoStep(userData)}
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  userData: state.register.userData
});

const mapDispatchToProps = dispatch => ({
  ChangeEmail(email) {
    dispatch({
      type: 'CHANGE_EMAIL',
      email
    });
  },
  ChangeLastname(lastname) {
    dispatch({
      type: 'CHANGE_LASTNAME',
      lastname
    });
  },
  ChangeMunicipality(municipality) {
    dispatch({
      type: 'CHANGE_MUNINCIPALITY',
      municipality
    });
  },
  ChangeName(name) {
    dispatch({
      type: 'CHANGE_NAME',
      name
    });
  },
  ChangeNickname(nickname) {
    dispatch({
      type: 'CHANGE_NICKNAME',
      nickname
    });
  },
  ChangePassword(password) {
    dispatch({
      type: 'CHANGE_PASSWORD',
      password
    });
  },
  ChangePhone(phone) {
    dispatch({
      type: 'CHANGE_PHONE',
      phone
    });
  },
  ChangeProvince(province) {
    dispatch({
      type: 'CHANGE_PROVINCE',
      province
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
