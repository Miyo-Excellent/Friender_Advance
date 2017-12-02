// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './scss/Terms.scss';

const Terms = ({ }) => {
  return (
    <section className={styles.terms}>
      <article className={styles.info}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet voluptatem ex animi quaerat. Esse quas delectus nisi accusantium aut modi, illo, reiciendis, inventore debitis tempore magnam necessitatibus? Distinctio recusandae laboriosam sapiente dicta asperiores alias ipsam ea enim totam, autem voluptates mollitia ullam facere et tenetur praesentium eveniet laudantium aut eaque debitis incidunt esse minima perspiciatis quae. Excepturi nisi minus quas reprehenderit, quia similique assumenda blanditiis, commodi consequuntur harum quidem.</p>
      </article>
    </section>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
