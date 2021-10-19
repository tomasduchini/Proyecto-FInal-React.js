import React, {useState} from "react";
import CarritoContextUse from "./CarritoContext";

const ItemCount = ({stock, initial, item}) =>{
    const [Contador, setContador] = useState(initial);

    const { addItem } = CarritoContextUse();
    const [Estado, setEstado] = useState(false);

    const menos = (e) => {
        e.preventDefault();
        remove();
    }
    const mas = (e) => {
        e.preventDefault();
        add();
    }
    const add = () => {
        let resultado = parseInt(Contador) + 1;
        if(resultado <= stock){
            setContador(resultado);
        }else{
            alert("No hay mas productos dispopnibles");
        }
    }
    const remove = () =>{
        if(Contador > 1){
            let resultado = parseInt(Contador) - 1;
            setContador(resultado);
        }
    }
    const Agregar = (contador) =>{
        alert("Agregado(s) "+contador+" producto(s) al carrito");
        setEstado();
        addItem(item, contador);
    }
    return<>
        <div>
            <button onClick={menos}>-</button>
            <input type="text" className="form-control text-center" aria-describedby="basic-addon1" value={Contador} id="input" />
            <button href="" onClick={mas} className="">+</button>
            <button onClick={() => Agregar(Contador)}>Agregar al carrito</button>
        </div>
    </>

}

export default ItemCount;