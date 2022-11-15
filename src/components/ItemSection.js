import React, { useEffect, useState } from 'react'
import Item from "./Item";

export default function Places({category})
{
    const[items, setItems] = useState([]);

    useEffect(() => {

        async function getPlaces()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filterList = []
            const id = category;

            for (let i = 0; i < data.length; i++){
                const item = data[i]

                // eslint-disable-next-line
                if(data[i].Category.Id == id) {
                    filterList.push(item)
                }
            }
            console.log(data)
            console.log(filterList)
            
            setItems(filterList);
        }
        getPlaces();

    }, [category]);

    return(
    <>
        <div className='item-container'>
            {items.map((item, index) => (
                <Item index={index} place={item} key={item.id} />
            ))}
        </div>
    </>
    )    
}