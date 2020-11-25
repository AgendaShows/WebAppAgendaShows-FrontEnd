import React from 'react';

function ProfileCard(props) {

    const { imagen, nombre, genero } = props

    return (
        <div className="band-name">
            <div className="row">
                <div className="col-3 band-image">
                    <img src={imagen} alt="Foto de la banda" height="180px" width="180px"/>
                </div>
                <div className="col-9 band-title">
                    <h2> {nombre} </h2> 
                    <br/>
                    <h4> {genero} </h4>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;