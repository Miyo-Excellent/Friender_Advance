// Dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

// Styles
import styles from './scss/Networks.scss';

// Assets
import facebook_logo_circle from './assets/img/facebook_circle.png';
import twtter_logo_circle from './assets/img/twitter_circle_1.png';
import instagram_logo_circle from './assets/img/instagram_citcle.png';
import not_found from './assets/img/404.gif';

class Networks extends Component {
  constructor(props) {
    super(props);
    this.image = this.image.bind(this);
  }
  image(type) {
    switch (type) {
      case 'facebook': {
        return facebook_logo_circle;
        break;
      }
      case 'twitter': {
        return twtter_logo_circle;
        break;
      }
      case 'instagram': {
        return instagram_logo_circle;
        break;
      }
      default: {
        return not_found;
        break;
      }
    }
  }

  render() {
    const { image } = this;
    const { user } = this.props;
    return (
      <div className={styles.networks}>
        <ul className={styles.networks_list}>{ user.profile.networks.map((network, i) => (
          <li className={styles.item} key={i}>{
            <Link className={styles.link} to={network.url} target="_black">
              <img src={image(network.network)} alt={network.network} />
            </Link>
          }</li>
        ))}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  user: state.user
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Networks);
