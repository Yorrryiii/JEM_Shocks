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
                            <p>+34 976 06 01 00</p>
                            <p>support@jem_shocks.com</p>
                        </td>
                        <td id='Pages'>
                            <h2>Pages</h2>
                            <hr />
                            <div id='LinksPaginas'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                <li><Link to="/JEM_SHOCKS/" id='home' onClick={'/JEM_SHOCKS/'}>Home</Link></li>
                            </div>
                            <div id='LinksPaginas'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                <li><Link to="/JEM_SHOCKS/shop" id='shop' onClick={'/JEM_SOCKS/shop'}>Shop</Link></li>
                            </div>
                            <div id='LinksPaginas'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                <li><Link to="/JEM_SHOCKS/about" id='about' onClick={'/JEM_SOCKS/about'}>About</Link></li>
                            </div>
                            <div id='LinksPaginas'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                <li><Link to="/JEM_SHOCKS/contact" id='contact' onClick={'/JEM_SOCKS/contact'}>Contact</Link></li>
                            </div>
                        </td>
                        <td id='Subscribe'>
                            <h2>Subscribe</h2>
                            <hr />
                            <p>
                                Subscribe to our mailing list to get the latest updates.
                            </p>
                            <form method="POST">
                                <input type='email' id='newsletter' name='email' placeholder='Email' required />
                                <a href="/JEM_SHOCKS/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                    </svg>
                                </a>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

}

export default Footer;