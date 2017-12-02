// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './scss/Log.scss';

const Log = ({ }) => {
  return (
    <div className={styles.loggin}>
      <form>
        <div className={styles.email}>
          <input type="email" name="email" id="email" placeholder="mi@email.com" />
        </div>
        <div className={styles.password}>
          <input type="password" name="password" id="password" placeholder="contraseña" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
