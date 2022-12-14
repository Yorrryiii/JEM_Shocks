import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

export class Navbar extends Component{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 1) {
          // cambia el color del navbar a rojo
          document.getElementById('navigation').style.backgroundColor = '#051922';
        } else {
          // deja el navbar en su color original
          document.getElementById('navigation').style.backgroundColor = '';
        }
    }

    render(){
        return(
            <div>
                <nav id='navigation'>
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
