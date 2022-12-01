import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component{
    render(){

        return(
            <div className="Navbar">
                <nav>
                    {/* Insertamos el logo de la marca */}
                        <img src="/images/LOGO.png" alt="test" />

                    
                    <div id=''>
                        <a href="/">Contact</a>
                        <a href="/">About</a>
                        <a href="/">Shop</a>
                        <a href="/">Home</a>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Navbar;