import React, { useState } from "react";
import PropTypes from "prop-types";
import Styles from "./Dropdown.module.css";
import VectorUp from "./VectorUp.png";
import VectorDown from "./VectorDown.png";

export default function Dropdown({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);//sert d'interupteur à chaque clic
  };

  return (
    <div className={Styles.dropdownContainer}>
      <button className={Styles.dropdownBtn} onClick={toggleDropdown}>
        {title}
        <img
          className={Styles.arrowIcon}
          src={isOpen ? VectorUp : VectorDown}
          alt="Arrow Icon"
        />
      </button>
      {isOpen && (
        <div className={Styles.dropdownContentContainer}>
          <div className={Styles.dropdownContent}>{content}</div>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  defaultOpen: PropTypes.bool,
};

