import { useState } from 'react';

function PeliculasHooks() {
    let pelis = [{titulo:"Toy Story", rating:"4.0"}, {titulo:"Her", rating:"5.3"}]
    const [listadoPeliculas, setListadoPeliculas] = useState(pelis);

    const agregarPeliculas = e => {
        e.preventDefault();
        let titulo = e.target.titulo.value;
        let rating = e.target.rating.value;
        setListadoPeliculas([
            ...listadoPeliculas,
            {titulo, rating}
        ]);
        e.target.titulo.value = '';
        e.target.rating.value = '';
    }
    return (
        <div>
            <h2>Nueva Pelicula</h2>
            <ul>
                {
                    listadoPeliculas.map((pelicula, i) => {
                        return (
                            <li key={i}>
                                <h3>{pelicula.titulo}</h3>
                                <h4>{pelicula.rating}</h4>
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={agregarPeliculas}>
                <input name="titulo" type="text"/>
                <input name="rating" type="text"/>
                <button>Añadir titulo y rating</button>
            </form>
        </div>
    )
}

export default PeliculasHooks;
