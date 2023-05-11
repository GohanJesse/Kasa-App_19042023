import { React } from "react";
import Styles from "./Gallery.module.css";
import Card from "../Card/Card";
import Data from "../../Data/tempData.json";


export default function Gallery() {

  const items = Data;

  return (
    <div className={Styles.gallery}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
