import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component{
    render(){

        return(
            <div className="Navbar">
                <nav>
                    {/* Insertamos el logo de la marca */}
                    <img src="/images/LOGO.png" alt="test" />

                    <div id='tabs'>
                        <a href="/">Home</a>
                        <a href="/">Shop</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Navbar;