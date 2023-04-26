import React from "react"
import Banner from "../Banner/Banner"
import Dropdown  from "../Dropdown/Dropdown"
import Styles from "./About.module.css"

const infoDropdown = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur KAsa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de parturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contater si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la prioprité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]


export default function About() {
console.log(infoDropdown);

    return (
        <div className={Styles.aboutMain}>
            <Banner />
            {infoDropdown.map((info, index) => (
                <Dropdown 
                    key="{${info}-${index}}"
                    title={info.title}
                    content={info.content}
                />
            ))}
        </div>
    )
};
