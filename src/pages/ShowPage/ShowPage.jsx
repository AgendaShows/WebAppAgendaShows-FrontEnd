import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//* Styles
import '../../assets/styles/Show/show.scss';

//* Components
import Spinner from "../Spinner/Spinner"
import Header from "../Header/Header";
import CardRecital from "./components/CardRecital";
import CardInformacion from "./components/CardInformacion";
import PerfilBanda from "./components/PerfilBanda";
import Buttons from "./components/Buttons";
import Footer from "../Footer/Footer";

function ShowPage () {

    const { id } = useParams();

    const [ recitalData, setRecitalData ] = useState();
    const [ loading, setLoading ] = useState(true); 

    useEffect(() => {
        const obtenerRecital =  () => {
            fetch(`http://localhost:5000/api/obtenerFullRecital/${id}`)
            .then(data=>data.json())
            .then(response=>{
                setRecitalData(response)
                setLoading(false)
            });
        }
        obtenerRecital();
    }, [id]);

    if (loading)
    return (
        <>
            <Spinner />
        </>
    )

    return (
        <>
            <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <CardRecital imagen={recitalData.recital.bannerRecital}/>
                        </div>
                        <div className="col-12 col-lg-8 contenedorInformacion">
                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <CardInformacion descripcion={recitalData.recital.descripcion}
                                        lugarEvento={recitalData.locacion[0].nombre}
                                        calle={recitalData.locacion[0].calle}
                                        numero={recitalData.locacion[0].numero}
                                        localidad={recitalData.locacion[0].barrio}/>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <PerfilBanda imagen={recitalData.banda[0].imgBanda}
                                        nombre={recitalData.banda[0].nombre}
                                        genero={recitalData.banda[0].genero}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <Buttons links={recitalData.recital.linkEntradas}
                                value={0}/>
                        </div>
                    </div>               
                </div>
            <Footer/>
        </>
    )
}

export default ShowPage;