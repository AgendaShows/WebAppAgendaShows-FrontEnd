import React from 'react';
import Logo from './bandLogo.jpg';
function BandCard(){
    return(
        <div className="row">
            <div className="col-12 col-lg-4 cardsProfile">
                <img src={Logo} className="fotoBanda" alt="banda" height="100px" width="100px"/>
                <h4>NombreBanda</h4>
                <p>Categoría</p>
            </div>
            <div className="col-12 col-lg-8 cardsRecitales">
                <textarea name="descripcion" className="descripcion" placeholder="Descripcion"></textarea>
                <div className="row">
                    <div className="col-12 buttonCards">
                        <button type="button" className="btn btn-outline-warning btn-block">VER MÁS</button>
                    </div>
                </div>
            </div>   
        </div>
    )
};

export default BandCard;

{/* <div className="col-12 col-lg-4 cardsProfile">
<div className="col-12 col-lg-8 cardsRecitales"> */}
{/* <div className="col-4 buttonCards"> */}