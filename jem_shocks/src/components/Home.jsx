import React, { Component } from 'react'
import './styles/Home.css';

export class Home extends Component {
    render() {
        return (
            <div id='cuerpo'>
                <div id='portada'>
                    <h5 id='sale'>WE PERSONALISE YOUR STYLE</h5>
                    <h1 id='tituloPrincipal'>This is JEM SHÖCKS</h1>
                </div>

                <div id='segundaSeccion'>
                    <table id='InfoPrincipal'>
                        <tr>
                            <td id='enviosGratis'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z" />
                                </svg>
                                <h3>Free Shipping</h3>
                                <p>When order over 30€</p>
                            </td>
                            <td id='ayuda'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg>
                                <h3>24/7 Support</h3>
                                <p>Get support all day</p>
                            </td>
                            <td id='devolucion'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                </svg>
                                <h3>Refund</h3>
                                <p>Get refund within 3 days!</p>
                            </td>
                        </tr>
                    </table>
                </div>

                <div id='terceraSeccion'>
                    <h3 id='tituloProductos'>Our <span id='cuerpoProductos'>Products</span></h3>
                    <hr />
                    <p>At JEM Shöcks, we use organic materials to make your socks of perfect quality, wearing among many other styles, socks like these:</p>
                </div>
            </div>
        )
    }
}

export default Home;