import React from "react";
import { Link } from 'react-router-dom';
import Carrito from "./Carrito";

function nav() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">
                <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" width="30" height="30" class="d-inline-block align-top" alt="" />
                Mi Página
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to={`/`}>Inicio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`/productos`}>Productos</Link>
                    </li>
                </ul>
            </div>
            <Carrito/>
        </nav>
    </>;
}

export default nav;