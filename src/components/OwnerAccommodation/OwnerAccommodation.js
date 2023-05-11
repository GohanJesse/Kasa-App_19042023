import React from "react";
import Styles from "./OwnerAccommodation.module.css";
import Rating from '../Rating/Rating';

export default function OwnerAccommodation({ accommodation }) {
  return (
    <div className={Styles.ownerInformation}>
      <div className={Styles.ownerContainer}>
        <p className={Styles.nameProfil}>{accommodation.host.name.split(' ')[0]}<br />{accommodation.host.name.split(' ')[1]}</p>
        <div className={Styles.imgProfil} style={{ backgroundImage: `url(${accommodation.host.picture})` }}></div>
      </div>
      <div className={Styles.ratingContainer}>
        <Rating className={Styles.stars} rating={accommodation.rating} />
      </div>
    </div>
  );
}
