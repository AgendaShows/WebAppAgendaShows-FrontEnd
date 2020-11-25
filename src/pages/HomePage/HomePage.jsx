import React, { useState, useEffect } from "react";

//*Styles
import "../../assets/styles/Home/home.scss";

//* Components
import Header from "../Header/Header";
import RecitalCard from "./components/RecitalCard";
import BannerDestacados from "./components/BannerDestacados";
import BigCard from "./components/BigCard";
import FechasButtons from "./components/FechasButtons";
import SideBar from "./components/SideBar";
import SmallCard from "./components/SmallCard";
import Footer from "../Footer/Footer";

//* Services
import { getRecitalByFechaApi } from '../../services/showService';
import { getBandasApi, getUnaBandaApi } from '../../services/bandsService';

function HomePage() {

  const [ showsData, setShowsData ] = useState([]);
  const [ bandsData, setBandsData ] = useState([]);
  const [ destacadosData, setDestacadosData ] = useState([]);

  useEffect(() => {
    getRecitalByFechaApi().then(showData => setShowsData(showData));
    getBandasApi().then(bandData => setBandsData(bandData));
    getUnaBandaApi().then(descatadoData => setDestacadosData(descatadoData));
  }, []);

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
                <div className="row">
                  <div className="col-12">
                    <BigCard imagen={destacadosData.imgBanda}
                      nombre={destacadosData.nombre}
                      genero={destacadosData.genero}/>
                  </div>
              </div>
              <div className="row">
              {bandsData.map(item => (
                <div className="col-12 col-lg-6">
                  <SmallCard imagen={item.imgBanda}
                    nombre={item.nombre}
                    genero={item.genero}
                    id={item._id}/>
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