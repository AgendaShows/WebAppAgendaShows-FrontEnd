import React from 'react';

function Form() {
    return (
        <form className="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Introduci tu busqueda"
                aria-label="Search"/>
            <button class="btn btn-warning my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    )
};

export default Form;
