import React from 'react';

function BigCard (props){

    const { image, name, genre } = props

    return (
        <div className="bands bigCard">
            <img src={image} className="imagen" alt="banda" height="120px" width="120px"/>
            <h6> {name} </h6>
            <span> {genre} </span>
        </div>
    )
};

export default BigCard;