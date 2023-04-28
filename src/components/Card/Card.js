import React from "react";
import PropTypes from "prop-types";
import Styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";



export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div className={Styles.card} style={{ backgroundImage: `url(${item.cover})` }} onClick={() => navigate("/Accommodation")}>
      <div className={Styles.gradient}></div>
      <p>{item.title}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};
