import React from "react"
import Banner from "../Banner/Banner"
import Dropdown  from "../Dropdown/Dropdown"
import Styles from "./About.module.css"
import BannerStyles from "../Banner/Banner.module.css"


export default function About() {
    return (
        <div className={Styles.aboutMain}>
            <Banner />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
        </div>
    )
}