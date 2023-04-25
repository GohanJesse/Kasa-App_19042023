import { useState, useEffect } from 'react';
import Data from "../Data/tempData.json";

export default function GetAccommodation() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(Data);
        console.log(Data);
    }, [])

    return items;
}
