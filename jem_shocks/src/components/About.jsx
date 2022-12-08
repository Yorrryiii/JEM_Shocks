import React, { Component } from 'react';
import './styles/About.css';

export class About extends Component{

    render(){
        return(
            <div id='cuerpo'>
                <div id='introduccion'>
                    <h5>WE SALE CUSTOME SOCKS</h5>
                    <h1>ABOUT US</h1>
                </div>

                <div id='text'>
                    <h1>Who are we?</h1>
                    <h2>
                        JEM SHÖCKS it is an online platform where you can buy different types of socks.
                        The shop offers a wide variety of styles, colours and sizes so that customers can choose the pair of socks that best suits their needs. 
                        Most online sock shops also offer the option to buy by the pack or by the pair, as well as different types of materials, such as cotton, wool or lycra. The purchase is made through the shop's website, where you can select the desired socks and make the payment online. 
                        The shop then sends the socks directly to the customer through the post.
                    </h2>
                </div>
            </div>
        )
    }
}

export default About;