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
        <div className="card-container">
            {
                data.map((card, idx)=><Card handleAddCourseName={handleAddCourseName}
                card={card} key={idx}></Card>)
            }
        </div>
    );
};

export default Cards;