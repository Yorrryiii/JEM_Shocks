import React, { Component } from 'react';
import './styles/Error.css';

export class Error extends Component{
    render(){
        return(
            <div id='error'>
                <a href="/JEM_SHOCKS/">
                    <img src="/images/NotFound.png" alt="JEM SHÖCKS LOGO" class = "notFound" id='Error404NotFound' />
                </a>
            </div>
        )
    }
}

export default Error;