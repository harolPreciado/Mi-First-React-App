function Publicidad(props) {
    return (
        <div>
            <p>Inicio de Espacio Publicitario</p>
            {props.children}
            <p>Fin de Espacio Publicitario</p>
        </div>
    );
}

export default Publicidad;