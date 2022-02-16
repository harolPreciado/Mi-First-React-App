import { useState, useEffect, useRef } from 'react';

function PeliculasHooks2() {
    const [peliculas, setPeliculas] = useState([]);
    const [pagina, setPagina] = useState(1)

    const subtitle = useRef();

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setPeliculas(
                    data.results
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [peliculas]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);

    const cargarMas = async () => {
        await setPagina(pagina + 1)
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then(response => response.json())
            .then(data => {
                setPeliculas(
                    data.results
                )
            })
            .catch(error => console.error(error))
    }

    const cambiarH2= ()=>{
        subtitle.current.style.color = 'red';
    }

    return (
        <div>
            <h2 ref = {subtitle}> Soy el componente Peliculas Hooks 2</h2>
            <button onClick={cambiarH2}>Cambiar H2</button>
            <ul>
                {peliculas.length === 0 && <p>Cargando</p>}
                {
                    peliculas.map((pelicula, i) => {
                        return (
                            <li key={i}>
                                <h2>{pelicula.name}</h2>
                                <img src={pelicula.image} alt="avatar" width="150" />
                            </li>
                        )
                    })
                }
                <button onClick={cargarMas}>Siguiente Pagina</button>
            </ul>
        </div>
    )
}

export default PeliculasHooks2;