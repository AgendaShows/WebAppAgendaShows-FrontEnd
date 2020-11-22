import React from 'react';

function PerfilBanda(props) {

    const { imagen, nombre, genero } = props

    return (
        <div className="perfil">
            <img src={imagen} alt="fotoBanda"/> 
            <h5> {nombre} </h5>
            <h6> {genero} </h6>
        </div>
    )
}

export default PerfilBanda;