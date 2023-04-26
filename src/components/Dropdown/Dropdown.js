import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from "./Dropdown.module.css";
import VectorUp from "./VectorUp.png";
import VectorDown from "./VectorDown.png";

export default function Dropdown({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Styles.dropdownContainer}>
      <button className={Styles.dropdownBtn} onClick={toggleDropdown}>
        {title}
        <img className={Styles.arrowIcon} src={isOpen ? VectorUp : VectorDown} />
      </button>
      {isOpen && (
        <div className={Styles.dropdownContentContainer}>
          <p className={Styles.dropdownContent}>{content}</p>
        </div>
      )}
    </div>
  )
};

Dropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
