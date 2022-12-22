import React, { Component } from 'react';
import './styles/About.css';


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
                <table class="tg">
                    <thead>
                        <tr>
                            <td class="title" colspan="4"><h4 id='titulo1'>Why <span id='titulo2'>JEM Shöcks</span></h4></td>
                            <td rowspan="5">
                                <img class="fotoWhyJem" src="/images/AboutWhyJemFoto.jpg" alt="why-jem-shocks"/>
                            </td>
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
                            <td class="tg-cly1">content1</td>
                            <td class="tg-cly1">content3</td>
                        </tr>
                        <tr>
                            <td class="tg-0lax" rowspan="2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
                                    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                </svg>
                            </td>
                            <td class="secTittle">Custom Made</td>
                            <td class="tg-0lax" rowspan="2">logo4</td>
                            <td class="secTittle">Free Returns</td>
                        </tr>
                        <tr>
                            <td class="tg-cly1">content2</td>
                            <td class="tg-cly1">content4</td>
                        </tr>
                    </thead>
                </table>


                <div id='text'>
                    <h1 id='titulo1'>Why <span id='titulo2'>JEM Shöcks</span></h1>
                    <h2 id='cuerpo1'>
                        JEM SHÖCKS it is an online platform where you can buy different types of socks.
                        The shop offers a wide variety of styles, colours and sizes so that customers can choose the pair of socks that best suits their needs.
                        Most online sock shops also offer the option to buy by the pack or by the pair, as well as different types of materials, such as cotton, wool or lycra. The purchase is made through the shop's website, where you can select the desired socks and make the payment online.
                        The shop then sends the socks directly to the customer through the post.
                    </h2>
                </div>

                {/*Lineas divisorias*/}
                {/* <div>
                    <hr size="5px" width="50%" align="center" color="red"/>
                    <hr size="5px" width="50%" align="center" color="red"/>
                    <hr size="5px" width="50%" align="center" color="red"/>
                </div> */}

                {/*Team*/}
                <div id='text'>
                    <h1 id='titulo1'>Our <span id='titulo2'>Team</span></h1>
                </div>
                <div class="photos">
                    <div class="single-team-item">
                        <div class="founders founders-1"></div>
                        <h4>Mario Gómez <span>Founder</span></h4>
                        <ul class="social-link-team">
                            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div class="single-team-item">
                        <div class="founders founders-2"></div>
                        <h4>Jorge Serrano <span>Founder</span></h4>
                        <ul class="social-link-team">
                            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>


                    <div class="single-team-item">
                        <div class="founders founders-3"></div>
                        <h4>Elena Rozas <span>Founder</span></h4>
                        <ul class="social-link-team">
                            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>

                </div>

                <h2 id='titulo2'>
                    Will you join us to get to know us?
                </h2>
            </div>
        )
    }
}

export default About;