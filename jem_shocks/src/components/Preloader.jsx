import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Preloader.css';

export class Preloader extends Component {
    render() {
        return (
            <div class="custom-loader"></div>
        )
    }
}

export default Preloader;