import React, { useEffect, useState } from 'react'
import Item from "./Item";

export default function Places()
{
    const[items, setItems] = useState([]);

    useEffect(() => {

        async function getPlaces()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filterList = []

            for (let i = 0; i < data.length; i++){
                const item = data[i]

                if(data[i].Category.Id === 63 || data[i].Category.Id === 64) {
                    filterList.push(item)
                }
            }
            console.log(filterList)
            
            setItems(filterList);
        }
        getPlaces();

    }, []);

    return(
    <>
        <h2>Places To Eat</h2>
        <div className='item-container'>
            {items.map((item, index) => (
                <Item index={index} place={item} key={item.id} />
            ))}
        </div>
    </>
    )    
}