import React from 'react';

function Form() {
    return (
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Introduci tu busqueda"
                aria-label="Search"/>
            <button className="btn btn-warning my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    )
};

export default Form;
