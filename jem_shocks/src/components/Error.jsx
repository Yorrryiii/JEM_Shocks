// Importamos las librerías de React
import React, { Component } from 'react';
// Importamos el css de Error
import './Error.css';

export class Error extends Component{
    render(){
        return(
            <img src="../images/NotFound.png" alt="ERROR 404 - Not Found" />
        )
    }
}

export default Error;