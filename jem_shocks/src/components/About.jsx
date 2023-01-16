import React, { Component } from 'react';
import './styles/About.css';
import OpinionCarousel from './Carousel'
import { Link } from 'react-router-dom';


export class About extends Component {

    render() {
        return (

            <div id='cuerpo'>
                {/*Preloader*/}
                <div id="preloader">
                    <div id="loader"></div>
                </div>

                {/*Header*/}
                <div id='introduccion'>
                    <h5 id='sale'>WE SELL CUSTOM SHÖCKS</h5>
                    <h1 id='aboutus'>About Us</h1>
                </div>

                {/*Web Content*/}
                <div id="whyJemDiv">
                    <div>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <td class="title" colspan="4"><h1 id='tituloProductos'>Why <span id='cuerpoProductos'>JEM SHÖCKS</span></h1></td>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" rowspan="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="bi bi-truck" viewBox="0 0 16 16">
                                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </td>
                                    <td class="secTittle">Home Delivery</td>
                                    <td class="tg-0lax" rowspan="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                        </svg>
                                    </td>
                                    <td class="secTittle">Best Prices</td>
                                </tr>
                                <tr>
                                    <td class="content">Your order shipped directly to your place within 2 to 4 labourable days</td>
                                    <td class="content">content3</td>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" rowspan="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
                                            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                        </svg>
                                    </td>
                                    <td class="secTittle">Custom Made</td>
                                    <td class="tg-0lax" rowspan="2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                        </svg>
                                    </td>
                                    <td class="secTittle">Free Returns</td>
                                </tr>
                                <tr>
                                    <td class="content">The best custom made designs with natural quality materials. Have a new design in mind? send us an e-mail.</td>
                                    <td class="content">If you got the wrong size or you would like a new design the first return is completely cost free.</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div>
                        <img class="fotoWhyJem" src="/images/AboutWhyJemFoto.jpg" alt="why-jem-shocks" />
                    </div>
                </div>

                <div id='septimaSeccion'>
                    <div id='nuevosDescuentos'>
                        <h2>January sale is on!<br />with big <span id='cambioLetra'>Discount</span>...</h2>
                        <div class="descuento">
                            <span id='hastaDescuento'>
                                Sale! Up to
                                <br />
                            </span>
                            <span id='cincuenta'>50%</span>
                            <span id='off'> off</span>
                        </div>
                        <a href="/JEM_SHOCKS/shop">
                            <button id='bigDiscount'>
                                <Link to="/JEM_SHOCKS/shop" id='goShop' onClick={'/JEM_SHOCKS/shop'}>Shop now</Link>
                            </button>
                        </a>
                    </div>
                </div>

                {/*Team*/}
                <div id='OurTeam'>
                    <h3 id='tituloProductos'>Our <span id='cuerpoProductos'>Team</span></h3>
                    <hr />
                </div>
                <div class="photos">
                    <div class="single-team-item">
                        <div class="founders founders-1"></div>
                        <h4>Mario Gómez <span>Founder</span></h4>
                    </div>

                    <div class="single-team-item">
                        <div class="founders founders-2"></div>
                        <h4>Jorge Serrano <span>Founder</span></h4>
                    </div>

                    <div class="single-team-item">
                        <div class="founders founders-3"></div>
                        <h4>Elena Rozas <span>Founder</span></h4>
                    </div>
                </div>

                <OpinionCarousel />

                <div class="partners">
                    <img class="partner1" src="/images/partner1.png" alt="why-jem-shocks" />
                    <img class="partner2 normal" src="/images/partner2.png" alt="why-jem-shocks" />
                    <img class="partner3" src="/images/partner3.png" alt="why-jem-shocks" />
                    <img class="partner4" src="/images/partner4.png" alt="why-jem-shocks" />
                    <img class="partner5" src="/images/partner5.png" alt="why-jem-shocks" />
                </div>
            </div>
        )
    }
}

export default About;