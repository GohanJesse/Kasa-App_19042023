import { React } from 'react';
import Styles from "./Gallery.module.css";
import Card from "../Card/Card";
import Data from "../../Data/tempData.json";



export default function Gallery() {

  const items = Data
  // console.log(Data);


  return (
    <div className={Styles.gallery}>
        {items.map((item, index) => (
                <Card 
                    key={item.id}
                    title={item.title}
                    cover={item.cover}
                />

            ))}
    </div>
  )
};


