import React from 'react';
import {Link} from 'react-router-dom';

function SearchBar() {
    return (
        <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 lista">
                <li className="nav-item">
                    <Link className="btn btn-outline-light" to="/inicio">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-outline-light" to="/firsttoeleven">Artistas</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-outline-light" to="/filtros">Filtrar</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-outline-light" to="/recomendados">Recomendados</Link>
                </li>
            </ul>
        </div>
    )
};

export default SearchBar;
