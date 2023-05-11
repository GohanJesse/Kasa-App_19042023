import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Styles from "./Accommodation.module.css";
import Carrousel from "../Carrousel/Carrousel";
import InfoAccommodation from "../InfoAccommodation/InfoAccommodation";
import OwnerAccommodation from "../OwnerAccommodation/OwnerAccommodation";
import Dropdown from "../Dropdown/Dropdown";
import Data from "../../Data/tempData.json";


export default function Accommodation() {
  const { id } = useParams();
  const urlLocation = useLocation();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(urlLocation.state?.item);

  useEffect(() => {
    if (!accommodation) {
      const foundAccommodation = Data.find(item => item.id === id);
      if (foundAccommodation) {
        setAccommodation(foundAccommodation);
        console.log(id);
      } else {
        navigate('/NotFound');
      }
    }
  }, [id, accommodation, navigate]);

  if (!accommodation) {
    return null;
  }

  return (
    <div className={Styles.AccommodationMain}>
      <div className={Styles.blocCarrousel}>
      <Carrousel 
      pictures={accommodation.pictures}
      />
      </div>
      <div className={Styles.blocInfoAccommodation}>
        <InfoAccommodation 
        title={accommodation.title} 
        accommodation={accommodation}
        />
        <OwnerAccommodation 
        location={accommodation.location} 
        accommodation={accommodation}
        />
      </div>
      <div className={Styles.blocDropdownAccommodation}>
        <div className={Styles.dropLeft}>
        <Dropdown 
        title="Description" 
        content={accommodation.description} 
        defaultOpen={true}
        />
        </div>
        <div className={Styles.dropRight}>
        <Dropdown 
        title="Equipements" 
        content={accommodation.equipments.map((equipment, index) => <p key={index}>{equipment}</p>)} 
        defaultOpen={true}
        />
        </div>
      </div>
    </div>
  );
};

