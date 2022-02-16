import React, { Component } from 'react';

import TiraPeliculas from './TiraPeliculas'
import Gif from './Gif';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Soy el componente Home</h2>
                <Gif />
                <TiraPeliculas />
            </div>
        )
    }
}

export default Home