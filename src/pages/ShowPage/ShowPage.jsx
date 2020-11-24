import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

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
// import { getFullRecitalApi } from '../../services/showService';

function ShowPage () {

    const { id } = useParams();

    const [ recitalData, setRecitalData ] = useState([]);

    useEffect(() => {
        const obtenerRecital =  () => {
            fetch(`http://localhost:5000/api/obtenerFullRecital/${id}`)
            .then(data=>data.json())
            .then(response=>{
                console.log(response)
                setRecitalData(response)
            });
        }
        obtenerRecital();
    }, [id]);
      
    return (
        <>
            <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <CardRecital imagen={recitalData.bannerRecital}/>
                        </div>
                        <div className="col-12 col-lg-8 contenedorInformacion">
                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <CardInformacion descripcion={recitalData.descripcion}/>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <PerfilBanda imagen={recitalData.imgBanda}
                                        nombre={recitalData.nombre}
                                        genero={recitalData.genero}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <Buttons links={recitalData.linkEntradas}/>
                        </div>
                    </div>               
                </div>
            <Footer/>
        </>
    )
}

export default ShowPage;