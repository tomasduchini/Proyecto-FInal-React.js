import React from "react";
import carrito from "./img/iconos/bx-cart.svg"
let contador = 0;
const Carrito = () => {
    return<>
        <div>
            <img src={carrito} alt="carrito" />
            <span class="badge badge-pill">{contador}</span>
        </div>
    </>;
}

export default Carrito;