import React, { Component } from 'react';
import Contador from './Contador';
import Publicidad from './Publicidad';


class About extends Component {
    render() {
        return (
            <div>
                <h2>Soy el componente About</h2>
                <p>
                    <Contador inicial={0} />
    
                    <Publicidad>
                        <h2>Woow Publicidad</h2>
                    </Publicidad>
                </p>
            </div>
        )
    }
}

export default About