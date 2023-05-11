import React from "react";
import Banner from "../Banner/Banner";
import Dropdown from "../Dropdown/Dropdown";
import Styles from "./About.module.css";
import IMGBannerAbout from "../Banner/IMG_BannerAbout.png";

const infoDropdown = [
  {
    id: "1",
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "2",
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de parturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "3",
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contater si vous avez la moindre question.",
  },
  {
    id: "4",
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {

  return (
    <div className={Styles.aboutMain}>
      <div className={Styles.bannerContainerAbout}>
      <Banner 
      backgroundImage={IMGBannerAbout} 
      />
      </div>
      <div className={Styles.dropContainer}>
      {infoDropdown.map((info) => (
        <Dropdown 
        key={info.id} 
        title={info.title} 
        content={info.description}
        />
      ))}
      </div>
    </div>
  );
};
