import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component{
    render(){

        return(
            <div className="Navbar">
                <nav>
                    {/* Insertamos el logo de la marca */}
                    <a classname = "imagen" href="https://google.com">
                    <img src="/images/LOGO.png" alt="test" />
                    </a>

                    <div id='tabs'>
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    
                </nav>
            </div>
        )
    }
}

export default Navbar;