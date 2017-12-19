// Dependencies
import React from "react";
import { connect } from "react-redux";

// Components

// Styles
import styles from "./scss/Terms.scss";

const Terms = ({}) => {
  return (
    <div className={styles.terms}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sed labore molestias enim quam placeat quod fuga deleniti porro obcaecati soluta voluptatum ex est inventore, harum corrupti pariatur error, totam saepe? Dolorum ab recusandae voluptas! Id exercitationem nisi culpa ab rerum atque quod perferendis eos?</p>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
