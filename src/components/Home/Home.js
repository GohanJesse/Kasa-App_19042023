import React from "react";
import styles from "./Home.module.css";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import IMGBannerHome from "../Banner/IMG_BannerHome.png";

export default function Home() {
  return (
    <div className={styles.homeMain}>
      <div className={styles.bannerContainerHome}>
      <Banner
        className={styles.bannerHome}
        backgroundImage={IMGBannerHome}
        text="Chez vous, partout ailleurs"
      />
      </div>
      <Gallery />
    </div>
  );
}
