import Pelicula from './Pelicula'
import React, { Component } from 'react';

class TiraPeliculas extends Component {

    lanzarAlerta(){
        alert('Hiciste click')
    }

    cambiarAmarillo(){
        document.querySelector("body").style.backgroundColor = "Yellow"
    }

    cambiarRosa(){
        document.querySelector("body").style.backgroundColor = "Pink"
    }

    render() {
        return (
            <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
                <Pelicula generos={["Fantasia", "Aventuras"]} rating="8.0" titulo="Harry Potter" />
                <Pelicula generos={["Animación", "Familiar"]} rating="7.0" titulo="Toy Story" />
                <Pelicula titulo="Her" />
                <Pelicula generos={["Acción", "Suspenso"]} rating="4.6" titulo="Parasite" />
            </div>

        );
    }
}

export default TiraPeliculas;