import React from "react";

const Item = ({ item }) => {
    const link = '/item/' + item.id;
    return <>
        <div className="cards__content" id={item.id}>
            <a href={link} key={item.id}>
                <h3>{item.nombre}</h3>
                <img src={item.imagen} width="80%" height="80%" alt=""></img>
                <p>Precio: ${item.precio}</p>
                <p>Stock: {item.stock}</p>
            </a>
        </div>
    </>;
}
export default Item;