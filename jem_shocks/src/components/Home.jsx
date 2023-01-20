import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import OpinionCarousel from './Carousel';
import './styles/Home.css';
import Video from './Video.mp4';

export class Home extends Component {

    // CUENTA ATRAS PARA FIN DE LA OFERTA 
    componentDidMount() {
        const countDownDate = new Date().getTime() + (6 * 24 * 60 * 60 * 1000) + (13 * 60 * 60 * 1000) + (38 * 60 * 1000) + (17 * 1000);

        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "--";
            }
        }, 1000);
    }

    render() {
        return (
            <div id='cuerpo'>
                <div id='portada'>
                    <h5 id='sale'>WE CUSTOMIZE YOUR STYLE</h5>
                    <h1 id='tituloPrincipal'>This is JEM SHÖCKS</h1>
                    <div id='botonesPortada'>
                        <a href="/JEM_SHOCKS/shop">
                            <button id='bigDiscount'>
                                <Link to="/JEM_SHOCKS/shop" id='goShop' onClick={'/JEM_SHOCKS/shop'}>Collection</Link>
                            </button>
                        </a>
                        <a href="/JEM_SHOCKS/contact">
                            <button id='bigDiscount'>
                                <Link to="/JEM_SHOCKS/contact" id='goShop' onClick={'/JEM_SHOCKS/contact'}>Contact us</Link>
                            </button>
                        </a>
                    </div>
                </div>

                <div id='segundaSeccion'>
                    <table id='InfoPrincipal'>
                        <tr>
                            <td id='enviosGratis'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z" />
                                </svg>
                                <h3>Free Shipping</h3>
                                <p>When order over 30€</p>
                            </td>
                            <td id='ayuda'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg>
                                <h3>24/7 Support</h3>
                                <p>Get support all day</p>
                            </td>
                            <td id='devolucion'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                </svg>
                                <h3>Refund</h3>
                                <p>Get refund within 3 days!</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <div id='terceraSeccion'>
                    <h3 id='tituloProductos'>Our <span id='cuerpoProductos'>Products</span></h3>
                    <hr />
                    <p>At JEM Shöcks, we use organic materials to make your socks of perfect quality, wearing among many other styles, socks like these:</p>

                    {/* Ponemos 3 ejemplos de calcetines */}
                    <div id='ejemplosCalcetines'>
                        <div id='ejCalcetines1'>
                            <img src="/images/ejCalcetines1.png" alt="Socks 1" />
                            <h3>Fast Food</h3>
                            <p>3,95€</p>
                            {/* Boton que nos redireccione a la pagina de shop */}
                            <a href="/JEM_SHOCKS/shop">
                                <button id='botonTienda'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    <Link to="/JEM_SHOCKS/shop" id='VerTienda' onClick={'/JEM_SHOCKS/shop'}>View in shop</Link>
                                </button>
                            </a>
                        </div>

                        <div id='ejCalcetines2'>
                            <img src="/images/ejCalcetines2.png" alt="Socks 2" />
                            <h3>Bananas & Monkeys</h3>
                            <p>4,95€</p>
                            <a href="/JEM_SHOCKS/shop">
                                <button id='botonTienda'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    <Link to="/JEM_SHOCKS/shop" id='VerTienda' onClick={'/JEM_SHOCKS/shop'}>View in shop</Link>
                                </button>
                            </a>
                        </div>

                        <div id='ejCalcetines3'>
                            <img src="/images/ejCalcetines3.png" alt="Socks 3" />
                            <h3>Minions Skaters</h3>
                            <p>4,50€</p>
                            <a href="/JEM_SHOCKS/shop">
                                <button id='botonTienda'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    <Link to="/JEM_SHOCKS/shop" id='VerTienda' onClick={'/JEM_SHOCKS/shop'}>View in shop</Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div id='cuartaSeccion'>
                    <div>
                        <img src="/images/ejCalcetines4.png" alt="Socks 4" />
                    </div>
                    <div>
                        <div id='ProductoMes'>
                            <h3 id='tituloProductos'>Deal <span id='cuerpoProductos'>of the month</span></h3>
                            <h4>MOTORBIKE</h4>
                            <p>Are you a motorbike lover? So... these socks are for you! With their unique and novel design they add a bit of fun to your outfits. Don't think twice and be the coolest at your favourite sport and the most original at that upcoming event!</p>
                            <br />
                            {/* Ponemos un h3 tachado que ponga 4,95€ */}
                            <h2 id='precioAnterior'>4,95€</h2>
                            <h3 id='precioActual'>3,95€</h3>
                            <p><b>Take advantage of this offer!</b></p>
                            {/* Cuenta atrás de la oferta */}
                            <ul id='countdown'>
                                <li><span id="days"></span>Days</li>
                                <li><span id="hours"></span>Hours</li>
                                <li><span id="minutes"></span>Minutes</li>
                                <li><span id="seconds"></span>Seconds</li>
                            </ul>
                            <a href="/JEM_SHOCKS/shop">
                                <button id='botonTienda'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    <Link to="/JEM_SHOCKS/shop" id='VerTienda' onClick={'/JEM_SHOCKS/shop'}>View in shop</Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Carrousel de Opiniones */}
                <OpinionCarousel />

                <div id='sextaSeccion'>
                    <div id='ajustamosAncho'>
                        <div id='columna'>
                            <video src={Video} /* controls */ autoPlay loop muted />
                        </div>
                        <div id='columna'>
                            {/* info */}
                            <div id='since'>
                                <p>Since Year 2022</p>
                                <h2>We are <span>JEM Shöcks</span></h2>
                                <p>We are an e-commerce company specialising in the sale of socks. Our selection includes a variety of styles, colours and patterns to suit all tastes and needs. Whether you're looking for warm wool socks to keep your feet warm in the winter or lightweight cotton socks for everyday wear, we have what you need.</p>
                                <p>We pride ourselves on offering high quality socks at affordable prices and our team is dedicated to providing excellent customer service to ensure that your shopping experience with us is always a pleasure.</p>
                                <a href="/JEM_SHOCKS/about">
                                    <button id='knowMore'>
                                        <Link to="/JEM_SHOCKS/about" id='goAbout' onClick={'/JEM_SHOCKS/about'}>know more</Link>
                                    </button>
                                </a>
                            </div>
                        </div>
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
            </div>
        )
    }
}

export default Home;