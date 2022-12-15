import React, { Component } from 'react';
import './styles/Error.css';

export class Error extends Component{
    render(){
        return(
            <div id='error'>
                <a href="/JEM_SHOCKS/">
                    <img src="/images/NotFound.png" alt="ERROR 404 - Not Found" id='Error404NotFound' />
                </a>
            </div>
        )
    }
}

export default Error;