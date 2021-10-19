import React, { useState, useEffect } from "react";
import Item from "./Item";
import dataJson from "../productos.json";

const Items = () => {
    const dataItems = dataJson;
    const [Items, setItems] = useState([]);

    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(dataItems);
            reject("Hubo un error al cargar los productos");
        },2000);
    });

    useEffect(() =>{
        async function fethcData(){
            await promise
                .then(response=>{
                    setItems(response);
                })
        };
        fethcData();
    });

    return <>
        <div class="cards" id={dataItems.id}>
            {Items.map((item)=> (<Item item={item}/>))}
        </div>
    </>;
}

export default Items;