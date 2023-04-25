import React from "react";
import styles from "./Home.module.css"
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import GetAccommodation from "../../utils/GetAccommodation";


export default function Home() {

    const items = GetAccommodation();


    return (
        <div className={styles.homeMain}>
            <Banner />
            <Gallery /> 
        </div>
    )
}
