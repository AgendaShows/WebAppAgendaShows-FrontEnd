import React, { useState, useEffect } from "react";

//*Styles
import "../../assets/styles/Home/home.scss";
import Footer from "../Footer/Footer";

//* Components
import Header from "../Header/Header";
import RecitalCard from "./components/RecitalCard";
import BannerDestacados from "./components/BannerDestacados";
import BigCard from "./components/BigCard";
import FechasButtons from "./components/FechasButtons";
import SideBar from "./components/SideBar";
import SmallCard from "./components/SmallCard";

//* Services
import { getRecitalByFechaApi } from '../../services/showService';
import { getBandasApi, getBandaApi } from '../../services/bandsService';

function HomePage() {

  const [ showsData, setShowsData ] = useState([]);
  const [ bandsData, setBandsData ] = useState([]);
  //const [ destacadoData, setDestacadoData ] = useState([]);

  useEffect(() => {
    getRecitalByFechaApi().then(showData => setShowsData(showData));
    getBandasApi().then(bandData => setBandsData(bandData));
    //getBandaApi().then(desvanData => setDestacadoData(desvanData));
  }, []);

  //! Revisar map de componente BigCard, mensaje: cannot read property 'map' of null.
  //! Lograr hacer match del ID del back con lo que llega al button. 

  return (
    <>
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-2 sidebar">
              <SideBar />
            </div>
            <div className="col-12 col-lg-5 FechasButtons">
              <FechasButtons />
                {showsData.map(item => (
                  <div className="col-12 band-card">
                    <RecitalCard nombreBanda={item.nombreBanda} 
                      titulo={item.titulo} 
                      imagen={item.imgBanda} 
                      descripcion={item.descripcion}
                      id={item._id}/>
                  </div>
                ))}
            </div>
            <div className="col-12 col-lg-4 aside">
              <BannerDestacados />
              {/* {destacadoData.map(element => (
                <div className="row">
                  <div className="col-12">
                    <BigCard image={element.imgBanda}
                      name={element.nombre}
                      genre={element.genero}/>
                  </div>
                </div>
              ))} */}
              <div className="row">
              {bandsData.map(item => (
                <div className="col-12 col-lg-6">
                  <SmallCard imagen={item.imgBanda}
                    nombre={item.nombre}
                    genero={item.genero}/>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;