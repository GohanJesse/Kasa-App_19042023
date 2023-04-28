import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Accommodation.module.css";
import Carrousel from "../Carrousel/Carrousel";
import InfoAccommodation from "../InfoAccommodation/InfoAccommodation";
import OwnerAccommodation from "../OwnerAccommodation/OwnerAccommodation";
import Dropdown from "../Dropdown/Dropdown";
// import Data from "../../Data/tempData.json"

export default function Accommodation() {
  const navigate = useNavigate();
  return (
    <div className={Styles.AccommodationMain}>
      <Carrousel />
      <div className={Styles.blocInfoAccommodation}>
        <InfoAccommodation />      
        <OwnerAccommodation />
      </div>
      <div className={Styles.blocDropdownAccommodation}>
        <Dropdown />
        <Dropdown />
      </div>
      <span onClick={() => navigate("/")}>Retourner sur la page d'acceuil</span>
    </div>
  );
};


// key={Data.id} title={Data.title} content={Data.description}