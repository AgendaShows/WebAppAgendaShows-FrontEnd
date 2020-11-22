import React, { useState, useEffect } from 'react';

//* Styles
import '../../assets/styles/Show/show.scss';

//* Components
import Header from "../Header/Header";
import CardRecital from "./components/CardRecital";
import CardInformacion from "./components/CardInformacion";
import PerfilBanda from "./components/PerfilBanda";
import Buttons from "./components/Buttons";
import Footer from "../Footer/Footer";

//* Services
import { getFullRecitalApi } from '../../services/showService';

function ShowPage () {

    const [ recitalData, setRecitalData ] = useState([]);

    useEffect(() => {
        getFullRecitalApi().then(fullData => setRecitalData(fullData));
      }, []);
  
    return (
        <>
            <Header/>
                <div className="container-fluid">
                    <div className="row">
                        {recitalData.map(item => (
                            <div className="col-12 col-lg-10">
                                <CardRecital imagen={item.imgBanda}/>
                            </div>
                        ))}
                        <div className="col-12 col-lg-8 contenedorInformacion">
                            {recitalData.map(item => (
                                <div className="row">
                                    <div className="col-12 col-lg-7">
                                        <CardInformacion descripcion={item.descripcion}/> 
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <PerfilBanda imagen={item.imgBanda}
                                            nombre={item.nombre}
                                            genero={item.genero}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {recitalData.map(item => (
                            <div className="col-12 col-lg-2">
                                <Buttons links={item.linkEntradas}/>
                            </div>
                        ))}
                    </div>               
                </div>
            <Footer/>
        </>
    )
}

export default ShowPage;