import React, { Component } from 'react';
import './styles/Copyright.css';

export class Copyright extends Component {

    render(){
        return (
            <div id='copyright'>
                <div id='autores'>
                    <p>
                        Copyrights © 2022/2023 - JEM SHÖCKS, All Rights Reserved.
                    </p>
                    <p>
                        Work done by: Elena Rozas, Jorge Serrano & Mario Gómez
                    </p>
                </div>
            </div>
        )
    }
}

export default Copyright;