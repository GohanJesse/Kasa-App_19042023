import React from "react";
import Styles from "./InfoAccommodation.module.css";

export default function InfoAccommodation() {
  return (
    <div className={Styles.infoAccommodation}>
      <h2 className={Styles.nameAcco}>Ici le titre de la location</h2>
      <p className={Styles.locationAcco}>Paris, île-de-France</p>
      <div>Tag TAG Tag</div>
    </div>
  );
}
