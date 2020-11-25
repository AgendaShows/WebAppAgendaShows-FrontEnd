import React from 'react';

function CardRecital(props) {

    const { imagen } = props

    return (
        <div className="contenedorImagen">
           <img src={imagen} alt="FotoRecital" className="img-fluid"/>
        </div>
    )
}

export default CardRecital;