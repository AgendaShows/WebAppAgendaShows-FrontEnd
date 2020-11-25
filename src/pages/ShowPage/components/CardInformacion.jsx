import React from 'react';

function CardInformacion(props) {

    const { descripcion, lugarEvento, calle, numero, localidad } = props

    return ( 
        <div className="informacion">
            <div className="div-informacion"> 
                {descripcion} 
                <div className="row">
                <div className="col-12 col-lg-6 div-locacion">
                    <p>Lugar: {lugarEvento} </p>
                    <p>Calle: {calle} {numero} </p>
                    <p>Localidad: {localidad} </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardInformacion;