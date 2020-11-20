import React from 'react';
import BigLogo from './bandLogo.jpg'
function BigCard (){
    return (
        <div className="bands bigCard">
            <img src={BigLogo} className="imagen" alt="banda" height="120px" width="120px"/>
            {/* <i class="fas fa-search-dollar"></i> */}
            <h6>Banda Grande</h6>
            <span>Genero Musical</span>
        </div>
    )
};

export default BigCard;