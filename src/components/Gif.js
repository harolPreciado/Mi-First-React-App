import React, { Component } from 'react';

class Gif extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.error(error))
    }

    componentDidMount() {
        console.log("Me monté")
        this.traerGifNuevo()
    }

    traerGifNuevo(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=bFFB4Y9NvHxsASAb5Yo36tQ5ahsRWa3v&tag=&rating=g", this.mostrarGif)
    }

    mostrarGif = (data) =>{
        this.setState(
            {
                gif: data.data.images.downsized_medium.url
            }
        )
    }

    componentDidUpdate(){
        alert("Tengo un gif nuevo")
    }

    render() {
        let contenido;
        if (this.state.gif == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif}></img>
        }

        return (
            <div>
                {contenido}
                <button onClick={() => this.traerGifNuevo()}>Random Gif</button>
            </div>
        )
    }
}

export default Gif;