import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export class Footer extends Component{
    render(){
        return(
            <div id='footer'>
                <table id='container'>
                    <tr>
                        <td id='AboutUs'>
                            <h2>About us</h2>
                            <hr />
                            <p>
                                If you are looking to have your essence even on your feet, JEM Shöcks is your shop. 
                                From first hand you can find different styles and different materials which combine perfectly with your daily outfit.
                            </p>
                        </td>
                        <td id='GetInTouch'>
                            <h2>Get in Touch</h2>
                            <hr />
                            <p>Mudejar's Motorway, km. 299. Zaragoza</p>
                            <p>+34 91 123 45 67</p>
                            <p>support@jem_shocks.com</p>
                        </td>
                        <td id='Pages'>
                            <h2>Pages</h2>
                            <hr />
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </td>
                        <td id='Subscribe'>
                            <h2>Subscribe</h2>
                            <hr />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default Footer;