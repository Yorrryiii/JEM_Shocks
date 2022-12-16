import React, { Component } from 'react';
import './styles/Busqueda.css';

export class Busqueda extends Component{
    render(){
        return(
            <div>
                <div class = "search-box">
                    <input type="text" placeholder = "search...." />
                    <a href="##" class = 'icon'>
                        <i class= "bi bi-search"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Busqueda;