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
                            <td class="tg-cly1" colspan="4">Why Jem_Shocks</td>
                            <td class="tg-nrix" rowspan="5">Foto</td>
                        </tr>
                        <tr>
                            <td class="tg-0lax" rowspan="2">logo1</td>
                            <td class="tg-cly1">title1</td>
                            <td class="tg-0lax" rowspan="2">logo3</td>
                            <td class="tg-cly1">title3</td>
                        </tr>
                        <tr>
                            <td class="tg-cly1">content1</td>
                            <td class="tg-cly1">content3</td>
                        </tr>
                        <tr>
                            <td class="tg-0lax" rowspan="2">logo2</td>
                            <td class="tg-cly1">title2</td>
                            <td class="tg-0lax" rowspan="2">logo4</td>
                            <td class="tg-cly1">title4</td>
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