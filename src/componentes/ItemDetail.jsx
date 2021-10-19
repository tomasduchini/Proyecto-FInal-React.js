import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return <>
        <div className="product__content" id={item.id}>
            <h3>{item.nombre}</h3>
            <img src={item.imagen} width="10%" height="10%" alt=""></img>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>
            {<ItemCount stock={item.stock} initial="1" item={item}/>} 
        </div>
    </>;
}

export default ItemDetail;