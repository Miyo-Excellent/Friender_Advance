// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// Components

// Styles
import styles from "./scss/Terms.scss";

const termsAndPolitics = [{
  path: "/terms",
  name: "terms",
  spanishName: "Terminos"
},
{
  path: "/politics",
  name: "politics",
  spanishName: "Politicas"
}];

const helpers = [{
  path: "/help",
  name: "help",
  spanishName: "help"
},
{
  path: "/faq",
  name: "Frequently Asked Questions",
  spanishName: "Preguntas frecuentes"
}];

const socials = [{
  path: "https://www.facebook.com/aleex9704",
  name: "Facebook",
  spanishName: "Facebook"
},
{
  path: "https://twitter.com/miyo_excellent",
  name: "Twitter",
  spanishName: "Twitter"
},
{
  path: "https://www.instagram.com/miyo_excellent",
  name: "Instagram",
  spanishName: "Instagram"
},
{
  path: "https://github.com/Miyo-Excellent/Friender_Advance",
  name: "GitHub",
  spanishName: "GitHub"
}];

const Terms = ({}) => {
  return (
    <div className={styles.terms}>
      <div className={styles.table}>
        <ul className={styles.terms_and_politics}>
          <li className={styles.title}>Terminos y Condiciones</li>
          {termsAndPolitics.map((el, i) =>
            <li key={i} className={styles.item}><Link to={el.path}>{el.spanishName}</Link></li>
          )}</ul>
        <ul className={styles.helpers}>
          <li className={styles.title}>Preguntas Frecuentes</li>
          {helpers.map((el, i) =>
            <li key={i} className={styles.item}><Link to={el.path}>{el.spanishName}</Link></li>
          )}</ul>
        <ul className={styles.socials}>
          <li className={styles.title}>Redes Sociales</li>
          {socials.map((el, i) =>
            <li key={i} className={styles.item}><a href={el.path} target="_blank">{el.spanishName}</a></li>
          )}</ul>
      </div>
      <div className={styles.copy_right}>
        <p><strong>Friender.co</strong> ─ <strong>2018</strong> ─ <strong>Todos los derechos reservados</strong></p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
