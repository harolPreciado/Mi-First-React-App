import "./Pelicula.css"
function Pelicula(props) {
    let listadoDeGeneros;
    if (props.generos != null) {
        listadoDeGeneros =
        <ul>
                {props.generos.map((genero,i)=> <li key={genero+i}>{genero}</li>)}
            </ul>
    }else{
        listadoDeGeneros = "";
    }
    return (
        <div>
            <h2 className="titulos">{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            {listadoDeGeneros}
        </div>

    );
}

Pelicula.defaultProps = {
    rating: "Esta peli aun no fue puntuada",
    generos: null
}

export default Pelicula;