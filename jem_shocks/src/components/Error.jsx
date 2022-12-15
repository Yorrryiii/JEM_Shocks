import React, { Component } from 'react';
import './styles/Error.css';

export class Error extends Component{
    render(){
        return(
            <div id='error'>
                <img src="/images/NotFound.png" alt="ERROR 404 - Not Found" id='Error404NotFound' />
            </div>
        )
    }
}

export default Error;