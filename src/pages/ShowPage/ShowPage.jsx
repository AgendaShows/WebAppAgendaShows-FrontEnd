import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

//* Styles
import '../../assets/styles/Show/show.scss';

//* Components
import Header from "../Header/Header";
import CardRecital from "./components/CardRecital";
import CardInformacion from "./components/CardInformacion";
import PerfilBanda from "./components/PerfilBanda";
import Buttons from "./components/Buttons";
import Footer from "../Footer/Footer";
function ShowPage () {
  
    return (
        <Router>
            <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <CardRecital />
                        </div>
                        <div className="col-12 col-lg-8 contenedorInformacion">
                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <CardInformacion /> 
                                </div>
                                <div className="col-12 col-lg-3">
                                    <PerfilBanda />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <Buttons />
                        </div>
                    </div>               
                </div>
            <Footer/>
        </Router>
    )
}

export default ShowPage;