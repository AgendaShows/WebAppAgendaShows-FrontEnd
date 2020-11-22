import React from 'react';
import ProfilePicture from './images/Firsttoeleven.jpg'

function ProfileCard() {
    return (
        <div className="band-name">
            <div className="row">
                <div className="col-3 band-image">
                    <img src={ProfilePicture} alt="Foto de la banda" height="180px" width="180px"/>
                </div>
                <div className="col-9 band-title">
                    <h2>First To Eleven</h2> 
                    <br/>
                    <h4>Rock Internacional</h4>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;