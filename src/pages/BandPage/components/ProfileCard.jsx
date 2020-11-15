import React from 'react';
import Image from './images/Firsttoeleven.jpg'

function ProfileCard() {
    return (
        <div className="band-name">
            <div class="row">
                <div class="col-3 band-image">
                    <img src={Image} alt="Foto de la banda" height="180px" width="180px"/>
                </div>
                <div class="col-9 band-title">
                    <h2>First To Eleven</h2> 
                    <br/>
                    <h4>Rock Internacional</h4>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;