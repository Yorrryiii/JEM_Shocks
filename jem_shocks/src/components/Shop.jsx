import React, { Component } from 'react';
import './styles/Shop.css';

export class Shop extends Component{

    Preloader() {
        return (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        );
      }

    render(){
        return(
            <div>
                {/* Contenido de la página shop */}
                <div id='introduccion'>
                    <h5 id='sale'>YOUR FAVOURITE PERSONALISED SHÖCKS</h5>
                    <h1 id='aboutus'>Shop</h1>
                </div>
                {/* <div class="spinner"></div>                 */}
            </div>
        )
    }
}

export default Shop;