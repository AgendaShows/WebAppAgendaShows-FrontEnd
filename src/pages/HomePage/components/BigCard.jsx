import React from 'react';

function BigCard (props){

    const { imagen, nombre, genero } = props

    return (
        <div className="bands bigCard">
            <img src={ imagen } className="imagen" alt="banda" height="120px" width="120px"/>
            <h6> { nombre } </h6>
            <span> { genero } </span>
        </div>
    )
};

export default BigCard;