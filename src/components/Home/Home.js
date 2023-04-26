import React from "react";
import styles from "./Home.module.css"
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


export default function Home() {

    return (
        <div className={styles.homeMain}>
            <Banner />
            <Gallery /> 
        </div>
    )
}
