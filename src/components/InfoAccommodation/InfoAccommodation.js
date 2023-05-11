import React from "react";
import Styles from "./InfoAccommodation.module.css";
import Tag from "../Tag/Tag";

export default function InfoAccommodation({ accommodation }) {

  const { title, location, tags } = accommodation;

  return (
    <div className={Styles.infoAccommodation}>
      <h2 className={Styles.nameAcco}>{title}</h2>
      <p className={Styles.locationAcco}>{location}</p>
      <div className={Styles.containerTag}>
        {tags.map((tag, index) => (
          <Tag  key={index} tag={tag}/>
        ))}
      </div>
    </div>
  );
}
