// Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/Content.scss";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { LoadUltimatePosts } = this.props;
    LoadUltimatePosts();
  }
  render() {
    const { topPosts } = this.props;
    return (
      <section className={styles.content}>
        <header className={styles.title}>
          <h1>TOP POSTS</h1>
        </header>
        <section className={styles.top}>{topPosts.map((post, i) => (
          <article className={styles.post} key={i}>
            <div className={styles.img}>
              <img src={post.img} alt={post.about}/>
            </div>
            <div className={styles.content}>
              <header className={styles.post_title}>
                <h3>{post.name}</h3>
                <h4>{post.about}</h4>
              </header>
              <div className={styles.description}>
                <p>{`${post.description.slice(0, 147)}...`}</p>
              </div>
              <div className={styles.location}>
                <div className={styles.address}>
                  <span>{post.address.province}</span> <strong>-</strong> <span>{post.address.munincipality}</span>
                </div>
                <div className={styles.date}>
                  <span>Creado el {post.creationDate.day} de {post.creationDate.month}</span>
                </div>
              </div>
            </div>
          </article>
        ))}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topPosts: state.home.content.ultimate_posts
});

const mapDispatchToProps = dispatch => ({
  LoadUltimatePosts() {
    dispatch( dispatch => axios
      .get("http://localhost:3000/api/servicesPosts")
      .then(res => dispatch({
        type: "LOAD_ULTIMATE_POSTS",
        data: res.data.filter((el, i) => i < 10)
      }))
      .catch(err => console.log(`No se pudieron solicitar los datos al servidor: Error: ${err}`)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
