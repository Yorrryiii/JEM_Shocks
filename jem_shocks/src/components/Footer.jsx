import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export class Footer extends Component {
    render() {
        return (
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <li>Home</li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <li>Shop</li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <li>About</li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
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