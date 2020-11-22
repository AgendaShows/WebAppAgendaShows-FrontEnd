import React from 'react';

function CardInformacion(props) {

    const { descripcion } = props

    return ( 
        <div className="informacion">
            <textarea> {descripcion} </textarea>
        </div>
    )
}

export default CardInformacion;
