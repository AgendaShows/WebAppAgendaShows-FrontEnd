import React from 'react';
import LogoBanda from './bandLogo.jpg'
function PerfilBanda() {
    return (
        <div className="perfil">
            <img src={LogoBanda} alt="fotoBanda"/> 
            <h5>METALLICA</h5>
            <h6>HEAVY METAL</h6>
        </div>
    )
}
export default PerfilBanda;
