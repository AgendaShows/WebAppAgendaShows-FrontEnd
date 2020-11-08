import React from 'react';
import {Link} from 'react-router-dom';

function ButtonRegistro () {

    return (
        <div className="registro">
            <span className="texto">¿No sos usuario? ¡Registrate!</span>
            <br/>
            <Link to=""><button type="click" id="boton-registrate" className="btn btn-success">Registrate</button></Link>
        </div>
    )
};

export default ButtonRegistro;