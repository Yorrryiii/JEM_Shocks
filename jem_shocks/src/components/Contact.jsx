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
                <div id='formInfo'>
                    {/* div que engloba el formulario */}
                    <div id='FormularioContacto'>
                        <div id='tituloForm'>
                            <h2>Do you have any questions?</h2>
                            <p className='descripcionPregunta'>
                                If you have any questions or concerns about our socks, please do not hesitate to contact us.
                                Our customer service team is happy to help you with any questions you may have.
                                You can do so via our contact form, through our online chat or by sending an email to our customer service, we'll be happy to help you!
                            </p>
                        </div>
                        <div id=''>
                            <form type='POST'>
                                <p id='primeraLinea'>
                                    {/* Apartado para introducir el nombre */}
                                    <input type='text' id='nombre' name='nombre' placeholder='Name' required/>
                                    {/* Apartado para introducir el email */}
                                    <input type='email' id='email' name='email' placeholder='Email' required/>
                                </p>
                                <p id='segundaLinea'>
                                    {/* Apartado para introducir el número de telefono */}
                                    <input type='tel' id='telefono' name='telefono' placeholder='Phone' />
                                    {/* Apartado para introducir el asunto */}
                                    <input type='text' id='asunto' name='asunto' placeholder='Subject' />
                                </p>
                                {/* Apartado para introducir el mensaje */}
                                <p id='terceraLinea'>
                                    <textarea id='mensaje' name='mensaje' placeholder='Message' cols='30' rows='10' required/>
                                </p>
                                {/* Apartado para enviar el formulario */}
                                <input type='submit' id='enviar' name='enviar' value='Submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;