import React from 'react';
import SmallLogo from "./bandLogo.jpg";

function SmallCard (){
    return (
        <div className="bands smallCard">
            <img src={SmallLogo} class="imagen" alt="banda" height="120px" width="120px"/>
            {/* <i class="fas fa-search-dollar"></i> */}
            <h6>Banda 2</h6>
            <span>Genero Musical</span>
        </div>
    )
};

export default SmallCard;