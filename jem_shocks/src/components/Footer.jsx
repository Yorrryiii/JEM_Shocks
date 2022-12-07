import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export class Footer extends Component{
    render(){
        return(
            <div id='footer'>
                <br />
                <p>JEM SHÖCKS</p>
                <p>Copyright © 2022 · All Rights Reserved</p>
                <p>Legal Warning Cookies Policy Privacy Policy Quality Policy</p>
                <br />
            </div>
        )
    }

}

export default Footer;