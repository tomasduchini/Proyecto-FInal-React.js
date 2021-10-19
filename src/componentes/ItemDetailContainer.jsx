import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import dataJson from "../productos.json";

const ItemDetailContainer = () => {
    const dataItems = dataJson;
    const [Item, setItems] = useState([]);
    const {id: idProduct} = useParams();

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(idProduct){
                const filterProduct = dataItems.filter((item)=> item.id == idProduct);
                resolve(filterProduct[0]);
            }
            else{
                resolve(dataItems);
            }

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
        <div class="product" id={dataItems.id}>
           <ItemDetail item={Item}/>
        </div>
    </>;
}

export default ItemDetailContainer;