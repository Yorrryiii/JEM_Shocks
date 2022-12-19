import React, { Component } from 'react';
import './styles/Contact.css';

export class Contact extends Component{

    render(){
        return(
            <div>
                {/* div que engloba la columna de formulario y la columna de datos de interes */}
                <div id='formInfo'>
                    {/* div que engloba el formulario */}
                    <div>
                        <div id='tituloForm'>
                            <h2>Have you any question?</h2>
                            <p id='descripcionPregunta'>
                                If you have any questions or concerns about our socks, please do not hesitate to contact us. 
                                Our customer service team is happy to help you with any questions you may have. 
                                You can do so via our contact form, through our online chat or by sending an email to our customer service, we'll be happy to help you!
                            </p>
                        </div>
                        <div id='formulario'>
                            <form type='POST'>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;