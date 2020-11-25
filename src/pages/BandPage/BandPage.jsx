import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//* Styles
import '../../assets/styles/Band/band.scss';

//* Components
import Spinner from "../Spinner/Spinner"
import Header from '../Header/Header';
import ProfileCard from './components/ProfileCard';
import VideoPreview from './components/VideoPreview';
import SocialButtons from './components/SocialButtons';
import NextDates from './components/NextDates';
import Carousel from './components/Carousel';
import Footer from '../Footer/Footer';

function BandPage() {

    const { id } = useParams();

    const [ bandaData, setBandaData ] = useState();
    const [ loading, setLoading ] = useState(true); 

    useEffect(() => {
        const obtenerBanda =  () => {
            fetch(`http://localhost:5000/api/obtenerBanda/${id}`)
            .then(data=>data.json())
            .then(response=>{
                setBandaData(response)
                setLoading(false)
            });
        }
        obtenerBanda();
    }, [id]);

    if (loading)
    return (
        <>
            <Spinner />
        </>
    )

    return (
        <div>
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-5 left-container">
                            <div className="row">
                                <div className="col-12">
                                    <ProfileCard imagen={bandaData.imgBanda}
                                        nombre={bandaData.nombre}
                                        genero={bandaData.genero}/>
                                </div>
                                <div className="col-12">
                                    <VideoPreview videoDemo={bandaData.videoDemo}/>
                                </div>
                                <div className="col-12">
                                    <SocialButtons webpage={bandaData.sitioWeb}
                                        instagram={bandaData.instagram}
                                        youtube={bandaData.youtube}
                                        spotify={bandaData.spotify}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 right-container">
                            <div className="row">
                                <div className="col-12">
                                    <NextDates />
                                </div>
                                <div className="col-12">
                                    <Carousel foto1={bandaData.carousel[0]}
                                        foto2={bandaData.carousel[1]}
                                        foto3={bandaData.carousel[2]}
                                        foto4={bandaData.carousel[3]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default BandPage;