// Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';

// Styles
import styles from './scss/Followers.scss';

// Assets
import not_found from './assets/img/404.gif';

class Followers extends Component {
  constructor(props) {
    super(props);
    this.followerWidget = this.followerWidget.bind(this);
  }

  followerWidget() {
    const { user } = this.props;
    const { follows } = user;
    const { followers } = follows;

    const topFollowers = followers.filter((follower, i) => i < 9);

    return topFollowers.map((follower, i) =>
      (follower.picture)
        ? (
          <div className={styles.retrate} key={i}>
            <img src={follower.picture} alt={`${follower.name} ${follower.lastname}`} />
          </div>
        ) : (
          <div className={styles.not_found} key={i}>
            <img src={not_found} alt={`Foto no ${follower.name} ${follower.lastname} encontrada`} />
          </div>
        ));
  }

  render() {
    const { followerWidget } = this;
    return (
      <article className={styles.followers}>
        <h3 className={styles.title}>Seguidores</h3>
        <div className={styles.galery}>{followerWidget()}</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices, user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
