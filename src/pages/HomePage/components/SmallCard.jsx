import React from 'react';
import { Link } from 'react-router-dom'

function SmallCard (props){

    const { imagen, nombre, genero, id } = props
    const urlParam = `/banda/${nombre}/${id}`;

    return (
        <div className="bands smallCard">
            <img src={imagen} className="imagen" alt="banda" height="120px" width="120px"/>
            <h6> {nombre} </h6>
            <span> {genero} </span>
            <br/>
            <br/>
            <Link to={urlParam} className="btn btn-outline-warning">+ INFO</Link>
        </div>
    )
};

export default SmallCard;