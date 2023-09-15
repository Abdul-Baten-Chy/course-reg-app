import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleAddCourseName}) => {
const [data, setData]= useState([])
    useEffect(()=>{
        fetch('info.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                data.map(card=><Card handleAddCourseName={handleAddCourseName}
                card={card}></Card>)
            }
        </div>
    );
};

export default Cards;