import React from 'react';
import { Link } from 'react-router-dom';

function RecitalCard (props) {

    const {nombreBanda, titulo, imagen, descripcion, id} = props;
    const urlParam = `/fullRecital/${id}`

    return(
        <div className="row">
            <div className="col-12 col-lg-4 cardsProfile">
                <img src={imagen} className="fotoBanda" alt="banda" height="100px" width="100px"/>
                <h4>{nombreBanda}</h4>
                <p>{titulo}</p>
            </div>
            <div className="col-12 col-lg-8 cardsRecitales">
                <textarea name="descripcion" className="descripcion" placeholder="Descripcion">
                    {descripcion}
                </textarea>
                <div className="row">
                    <div className="col-12 buttonCards">
                        <Link to={urlParam} className="btn btn-outline-warning btn-block">VER MÁS</Link>
                    </div>
                </div>
            </div>   
        </div>
    )
};

export default RecitalCard;