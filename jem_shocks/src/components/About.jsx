import React, { Component } from 'react';
import './styles/About.css';

export class About extends Component {

    render() {
        return (
            
            <div id='cuerpo'>
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                <div id='introduccion'>
                    <h5 id='sale'>WE SALE CUSTOME SOCKS</h5>
                    <h1 id='aboutus'>About us</h1>
                </div>

                <div id='text'>
                    <h1 id='titulo1'>Who are we?</h1>
                    <h2 id='cuerpo1'>
                        JEM SHÖCKS it is an online platform where you can buy different types of socks.
                        The shop offers a wide variety of styles, colours and sizes so that customers can choose the pair of socks that best suits their needs.
                        Most online sock shops also offer the option to buy by the pack or by the pair, as well as different types of materials, such as cotton, wool or lycra. The purchase is made through the shop's website, where you can select the desired socks and make the payment online.
                        The shop then sends the socks directly to the customer through the post.
                    </h2>
                </div>

                <div className='row center' style={{ marginTop: '50px' }} >
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '80%' }} />
                    <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
                </div>

               <h2 id='titulo2'>
                Will you join us to get to know us?
               </h2>
            </div>
        )
    }
}

export default About;