import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component{
    render(){
        <div>
            {/* Hacemos que si el usuario le da al logo del navbar, que le lleve a la página de inicio */}
            <Link className="navbar-brand" to="/">JEM SHÖCKS</Link>
            <div>
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Tienda">Tienda</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Informacion">Información</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}