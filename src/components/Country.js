import React, {useRef} from "react";

function Country(props){
    const Saluda = ()=>{
        alert("Hola " + props.name)
    }
    const Entrar = ()=>{
        reference.current.style.backgroundColor = "yellow";
    }
    const Salir = ()=>{
        reference.current.style.backgroundColor = "transparent";
    }
    const reference = useRef();
        return(
            <div onClick={Saluda} onMouseOver= {Entrar} onMouseOut={Salir} ref={reference}>
                <img src={props.flag} className="imagenPais" alt="Imagen"></img>
                <p>
                    Nombre: {props.name} <br></br>
                    Capital: {props.capital} 
                </p>
            </div>
        )
}
export default Country