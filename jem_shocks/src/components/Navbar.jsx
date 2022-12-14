import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

export class Navbar extends Component{
    render(){
        // Función que detecta el scroll y cambia de color
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("Navbar").style.backgroundColor = "#ff0080";
            } else {
                document.getElementById("Navbar").style.backgroundColor = "#ff0080";
            }
        }

        return(
            <div id="Navbar">
                <nav>
                    {/* Insertamos el logo de la marca */}
                    <a classname = "imagen" href="/JEM_SHOCKS/">
                    <img src="/images/LOGO.png" alt="test" />
                    </a>

                    <div id='tabs'>
                        <Link to="/JEM_SHOCKS/" id ='home'>Home</Link>
                        <Link to="/JEM_SHOCKS/shop" id ='shop'>Shop</Link>
                        <Link to="/JEM_SHOCKS/about" id ='about'>About</Link>
                        <Link to="/JEM_SHOCKS/contact" id ='contact'>Contact</Link>
                    </div>

                    
                </nav>
            </div>
        )
    }
}

export default Navbar;

