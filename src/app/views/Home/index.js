// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import Features from './components/Features';
import Footer from './components/Footer';

// Styles
import styles from './scss/Home.scss';
const Home = ({ }) => {
  return (
    <div className={styles.home}>
      <Nav />
      <Header />
      <Features />
      <Content />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
