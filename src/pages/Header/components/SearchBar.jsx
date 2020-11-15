import React from 'react';

function SearchBar() {
    return (
        <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 lista">
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="https://google.com">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="https://google.com">Artistas</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="https://google.com">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="https://google.com">Filtrar</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="https://google.com">Recomendados</a>
                </li>
            </ul>
        </div>
    )
}

export default SearchBar;
