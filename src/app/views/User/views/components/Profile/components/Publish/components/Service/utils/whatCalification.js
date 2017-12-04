// Dependencies
import React from 'react';

// Assets
import star from "../../../assets/img/019-star-3.svg";
import markStart from "../../../assets/img/018-star-4.svg";

const whatCalification = (styles, data) => {
  switch (data.califacation) {
    case 0:
      return (
        <div className={styles.califacation}>
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
        </div>
      );
      break;

    case 1:
      return (
        <div className={styles.califacation}>
          <img src={star} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
        </div>
      );
      break;

    case 2:
      return (
        <div className={styles.califacation}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
        </div>
      );
      break;

    case 3:
      return (
        <div className={styles.califacation}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={markStart} alt="star" />
          <img src={markStart} alt="star" />
        </div>
      );
      break;

    case 4:
      return (
        <div className={styles.califacation}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={markStart} alt="star" />
        </div>
      );
      break;

    case 5:
      return (
        <div className={styles.califacation}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      );
      break;
    default:
      break;
  }
};

export default whatCalification;
