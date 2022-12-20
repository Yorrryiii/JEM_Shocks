import React, { Component } from 'react';
import './styles/Contact.css';

export class Contact extends Component {

    render() {
        return (
            <div>
                <div id='introduccion'>
                    <h5 id='sale'>GET 24 / 7 SUPPORT</h5>
                    <h1 id='aboutus'>Contact us</h1>
                </div>

                {/* div que engloba la columna de formulario y la columna de datos de interes */}
                <div id='ColumnasImportantes'>
                    {/* div que engloba el formulario */}
                    <div id='FormularioContacto'>
                        <div id='tituloForm'>
                            <h2 style={{ margin: '0 0 17.5px' }}>Do you have any questions?</h2>
                            <p className='descripcionPregunta'>
                                If you have any questions or concerns about our socks, please do not hesitate to contact us.
                                Our customer service team is happy to help you with any questions you may have.
                                You can do so via our contact form, through our online chat or by sending an email to our customer service, we'll be happy to help you!
                            </p>
                        </div>
                        <div>
                            <form type='POST'>
                                <p id='primeraLinea'>
                                    {/* Apartado para introducir el nombre */}
                                    <input type='text' id='nombre' name='nombre' placeholder='Name' required />
                                    {/* Apartado para introducir el email */}
                                    <input type='email' id='email' name='email' placeholder='Email' required />
                                </p>
                                <p id='segundaLinea'>
                                    {/* Apartado para introducir el número de telefono */}
                                    <input type='tel' id='telefono' name='telefono' placeholder='Phone' />
                                    {/* Apartado para introducir el asunto */}
                                    <input type='text' id='asunto' name='asunto' placeholder='Subject' />
                                </p>
                                {/* Apartado para introducir el mensaje */}
                                <p id='terceraLinea'>
                                    <textarea id='mensaje' name='mensaje' placeholder='Message' cols='30' rows='10' required />
                                </p>
                                {/* Apartado para enviar el formulario */}
                                <input type='submit' id='enviar' name='enviar' value='Submit' />
                            </form>
                        </div>
                    </div>
                    {/* div que engloba la columna de otros dats de interés */}
                    <div id='datos'>
                        <div id='InformacionAdicional'>
                            <div id='ShopAddress'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                </svg> */}
                                <h4>Shop address</h4>
                                <p>Av. de la Industria, 1 </p>
                                <p>28922 Alcorcón </p>
                                <p>Madrid, Spain</p>
                            </div>
                            <div id='ShopHours'>
                                <h4>Shop hours</h4>
                                <p>MON - FRIDAY: 9 to 19 PM</p>
                                <p>SATURDAY: 9 to 13 PM</p>
                                <p>ONLINE: open 24 hours</p>
                            </div>
                            <div id='Contact'>
                                <h4>Contact</h4>
                                <p>Phone: +34 91 123 45 67</p>
                                <p>Email:</p>
                                <p>support@jem_shocks.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;