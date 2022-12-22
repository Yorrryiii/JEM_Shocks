import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Busqueda from './Busqueda';
import Login from './Login';

export class Navbar extends Component {

    // Código JavaScript para cambiar el color del navbar al hacer scroll
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 1) {
            document.getElementById('navigation').style.backgroundColor = '#051922';
        } else {
            document.getElementById('navigation').style.backgroundColor = '';
        }
    }

    render() {
        return (
            <div>
                <nav id='navigation'>
                    <ul>
                        <a href="/JEM_SHOCKS/">
                            <img class = "logoNavbar" src="/images/LOGO.png" alt="JEM SHÖCKS LOGO" />
                        </a>

                        <div id='parteDcha'>
                            {/* Insertamos la lupa */}
                            <Busqueda />

                            {/* Insertamos el carrito de la compra */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="carrito" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg> */}
                        </div>

                        <div id='tabs'>
                            <Link to="/JEM_SHOCKS/" id='home' onClick={'/JEM_SHOCKS/'}>Home</Link>
                            <Link to="/JEM_SHOCKS/shop" id='shop' onClick={'/JEM_SOCKS/shop'}>Shop</Link>
                            <Link to="/JEM_SHOCKS/about" id='about' onClick={'/JEM_SOCKS/about'}>About</Link>
                            <Link to="/JEM_SHOCKS/contact" id='contact' onClick={'/JEM_SOCKS/contact'}>Contact</Link>
                        </div>
                    </ul>
                    <Link to="/JEM_SHOCKS/login/" id='login'><Login /> </Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;