import React from 'react';
import {Link} from 'react-router-dom';

function ButtonRegistro () {

    return (
        <div className="registro">
            <span className="texto">¿No sos usuario? ¡Registrate!</span>
            <br/>
            <Link to="/registro" className="btn btn-success">Registrate</Link>
        </div>
    )
};

export default ButtonRegistro;