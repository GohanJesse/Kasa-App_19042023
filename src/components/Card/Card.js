import React from 'react'
import PropTypes from 'prop-types';
import Styles from "./Card.module.css"

export default function Card({ title, cover }) {

  return (
    <div className={Styles.card} style={{ backgroundImage: `url(${cover})` }}>
        <p>{title}</p>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string,
};
