// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Company from './components/Company';
import Controller from './components/Controller';
import NavBar from './components/NavBar';
import People from './components/Peoples';
import Step from './components/Step';

// Styles
import styles from './scss/Register.scss';

// Assets
import peopleIMG from './assets/img/peoples.png';
import companyIMG from './assets/img/company.jpg';

const Register = ({ changeEntiy, userData }) => {
  const {
    type,
    step
  } = userData;
  const whoType = () => {
    if (type === 'people') {
      return <People />;
    } else if (type === 'company') {
      return <Company />;
    }
  };
  const whoStep = step => {
    switch (step) {
      case 1:
        if (type === 'people') {
          return (
            <div className={styles.entity}>
              <div className={styles.company} id="entity_company" onClick={() => changeEntiy('company')} >
                <img src={companyIMG} alt="Company" />
              </div>
              <div className={styles.select} id="entity_people" onClick={() => changeEntiy('people')} >
                <img src={peopleIMG} alt="People" />
              </div>
            </div>
          );
        } else if (type === 'company') {
          return (
            <div className={styles.entity}>
              <div className={styles.select} id="entity_company" onClick={() => changeEntiy('company')} >
                <img src={companyIMG} alt="Company" />
              </div>
              <div className={styles.people} id="entity_people" onClick={() => changeEntiy('people')} >
                <img src={peopleIMG} alt="People" />
              </div>
            </div>
          );
        }
        break;

      case 2:
        return whoType(type);
        break;

      case 3:
        return whoType(type);
        break;

      default:
        break;
    }
  };
  return (
    <section className={styles.register}>
      <NavBar />
      <Step />
      {whoStep(step)}
      <Controller />
    </section>
  );
};

const mapStateToProps = state => ({
  userData: state.register.userData
});

const mapDispatchToProps = dispatch => ({
  changeEntiy(entity) {
    dispatch({
      type: 'CHANGE_ENTITY',
      entity
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
