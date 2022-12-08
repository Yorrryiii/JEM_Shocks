import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

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
                        <Link to="/" id ='home'>Home</Link>
                        <Link to="/shop" id ='shop'>Shop</Link>
                        <Link to="/about" id ='about'>About</Link>
                        <Link to="/contact" id ='contact'>Contact</Link>
                    </div>

                    
                </nav>
            </div>
        )
    }
}

export default Navbar;