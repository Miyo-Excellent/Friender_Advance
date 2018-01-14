// Dependencies
import React, { Component } from "react";

// Assets
import deslike from '../../assets/img/like_2_2.svg';
import unShapes from '../../assets/img/shapes_2_2.svg';

class Interactive extends Component {
  render() {
    const { changeLike } = this.props;
    return (
      <div className={styles.interactive}>
        <div className={styles.like} onClick={e => changeLike(e, service)}>
          <img src={deslike} alt="like" />
        </div>
        <div className={styles.shapes} onClick={e => changeShapes(e, service)}>
          <img src={unShapes} alt="like" />
        </div>
      </div>
    );
  }
}

export default Interactive;
