import React, { useState } from 'react';
import Styles from "./Dropdown.module.css";
import VectorUp from "./VectorUp.png";
import VectorDown from "./VectorDown.png";

export default function Dropdown() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Styles.dropdownContainer}>
      <button className={Styles.dropdownBtn} onClick={toggleDropdown}>
        Cliquez ici
        <img className={Styles.arrowIcon} src={isOpen ? VectorUp : VectorDown} />
      </button>
      {isOpen && (
        <div className={Styles.dropdownContent}>
          {/* Mettez ici le contenu de la div déroulante */}
          <p>Contenu de la div déroulante</p>
        </div>
      )}
    </div>
  )
}
