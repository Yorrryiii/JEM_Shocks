import React, { Component } from 'react'
import './styles/Home.css';

export class Home extends Component{
    render(){
        return(
            <div id='cuerpo'>
                <div id='portada'>
                    <h5 id='sale'>WE PERSONALISE YOUR STYLE</h5>
                    <h1 id='tituloPrincipal'>This is JEM SHÖCKS</h1>
                </div>
                <div id='segundaSeccion'>
                    <table id='InfoPrincipal'>
                        <tr>
                            <td id='enviosGratis'>
                                <h3>Free Shipping</h3>
                                <p>When order over 30€</p>
                            </td>
                            <td id='ayuda'>
                                <h3>24/7 Support</h3>
                                <p>Get support all day</p>
                            </td>
                            <td id='devolución'>
                                <h3>Refund</h3>
                                <p>Get refund within 3 days!</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;