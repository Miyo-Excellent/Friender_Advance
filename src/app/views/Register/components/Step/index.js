// Dependencies
import React from "react";
import { connect } from "react-redux";

// Styles
import styles from "./scss/Step.scss";

const Controller = ({ step }) => {
  const whoStep = Step => {
    if (Step === 1) {
      return (
        <ul className={styles.liste}>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>1</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.half_completed}>2</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.half_completed}>3</span>
            </div>
          </li>
        </ul>
      );
    } else if (Step === 2) {
      return (
        <ul className={styles.liste}>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>1</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>2</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.emply} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.half_completed}>3</span>
            </div>
          </li>
        </ul>
      );
    } else if (Step === 3) {
      return (
        <ul className={styles.liste}>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>1</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>2</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.completed} />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <span className={styles.full_completed}>3</span>
            </div>
          </li>
        </ul>
      );
    }
  };
  return <div className={styles.step}>{whoStep(step)}</div>;
};

const mapStateToProps = state => ({
  step: state.register.userData.step
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
