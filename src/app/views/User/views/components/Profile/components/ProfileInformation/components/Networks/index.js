// Dependencies
import axios from 'axios';
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

  componentDidMount() {
    const { loadUser } = this.props;
    loadUser();
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
const mapDispatchToProps = dispatch => ({
  loadUser() {
    dispatch(dispatch => axios.get("http://localhost:3000/api/user_people")
      .then(res => dispatch({
        type: 'CHANGE_ALL_DATA_USER',
        data: res.data
      })))
      .catch( error => console.error(`No se pudo obtener los datos del usuario, por favor revise el nombre de usuario o la contraseña, puede que uno de ello esten errados: ${error}`));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Networks);
