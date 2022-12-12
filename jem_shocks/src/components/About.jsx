import React, { Component } from 'react';
import './styles/About.css';


export class About extends Component {

    render() {
        return (
            
            <div id='cuerpo'>
                {/*Importamos la fuente POPPINS*/}
                <link rel="stylesheet" href="https://use.typekit.net/cej1rqi.css"></link>
                {/*Preloader*/}
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                {/*Header*/}
                <div id='introduccion'>
                    <h5 id='sale'>WE SALE CUSTOM SOCKS</h5>
                    <h1 id='aboutus'>About Us</h1>
                </div>
                {/*Web Content*/}

                <div id='content'>
                    <div class ='features'>
                     <h3 class = 'features-title'>Custom made</h3>
                     <p class = 'features-content'>probando probando custom bla bla bla bla bla bla</p>
                    </div>
                    <div class ='features'>
                     <h3 class = 'features-title'>Custom made</h3>
                     <p class = 'features-content'>probando probando custom bla bla bla bla bla bla</p>
                    </div>
                    <div class ='features'>
                     <h3 class = 'features-title'>Custom made</h3>
                     <p class = 'features-content'>probando probando custom bla bla bla bla bla bla</p>
                    </div>
                    <div class ='features'>
                     <h3 class = 'features-title'>Custom made</h3>
                     <p class = 'features-content'>probando probando custom bla bla bla bla bla bla</p>
                    </div>
                </div>


                <div id='text'>
                    <h1 id='titulo1'>Why <span id ='titulo2'>JEM Shöcks</span></h1>
                    <h2 id='cuerpo1'>
                        JEM SHÖCKS it is an online platform where you can buy different types of socks.
                        The shop offers a wide variety of styles, colours and sizes so that customers can choose the pair of socks that best suits their needs.
                        Most online sock shops also offer the option to buy by the pack or by the pair, as well as different types of materials, such as cotton, wool or lycra. The purchase is made through the shop's website, where you can select the desired socks and make the payment online.
                        The shop then sends the socks directly to the customer through the post.
                    </h2>
                </div>
                
                {/*Lineas divisorias*/}
                <div className='row center' style={{ marginTop: '50px' }} >
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '80%' }} />
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
                </div>

                {/*Team*/}
                <div id='text'>
                    <h1 id='titulo1'>Our <span id ='titulo2'>Team</span></h1>
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