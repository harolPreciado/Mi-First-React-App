import {useParams} from "react-router-dom";

const peliculas = [
    {
        id: 1,
        name: 'Toy Story',
        rating: 5.0,
        genere: 'Animation',
    },
    {
        id: 2,
        name: 'Her',
        rating: 2.0,
        genere: 'Romance',
    },
    {
        id: 3,
        name: 'Anabelle',
        rating: 3.5,
        genere: 'Terror',
    },
    {
        id: 4,
        name: 'Avengers',
        rating: 9.0,
        genere: 'Accion',
    },
    {
        id: 5,
        name: 'Taxi',
        rating: 1.0,
        genere: 'Fail',
    }
];

function ListaPeliculas() {
    let params = useParams();
    let id = Number(params.id);
    console.log(id);
    let pelicula = peliculas.find(peli => peli.id === id)
    return(
        <div>
            <h2>Soy el componente Lista de Peliculas</h2>
            {
                pelicula &&
                <>
                    <p><b>id:</b>{pelicula.id}</p>
                    <p><b>name:</b>{pelicula.name}</p>
                    <p><b>rating:</b>{pelicula.rating}</p>
                    <p><b>genere:</b>{pelicula.genere}</p>
                </>
            }
            {
                !pelicula && <p>No hay peliculas con ese ID</p>
            }
            
        </div>
    )
}

export default ListaPeliculas
