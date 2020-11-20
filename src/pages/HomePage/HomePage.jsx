import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//*Styles
import "../../assets/styles/Home/home.scss";

//* Components
import Header from "../Header/Header";
import BandCard from "./components/BandCard";
import BannerDestacados from "./components/BannerDestacados";
import BigCard from "./components/BigCard";
import FechasButtons from "./components/FechasButtons";
import SideBar from "./components/SideBar";
import SmallCard from "./components/SmallCard";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <Router>
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-2 sidebar">
              <SideBar />
            </div>
            <div className="col-12 col-lg-5 FechasButtons">
              <FechasButtons />
              <div className="col-12 band-card">
                <BandCard />
              </div>
              <div className="col-12 band-card">
                <BandCard />
              </div>
              <div className="col-12 band-card">
                <BandCard />
              </div>
            </div>
            <div className="col-12 col-lg-4 aside">
              <BannerDestacados />
              <div className="row">
                <div className="col-12">
                  <BigCard />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <SmallCard />
                </div>
                <div className="col-12 col-lg-6">
                  <SmallCard />
                </div>
                <div className="col-12 col-lg-6">
                  <SmallCard />
                </div>
                <div className="col-12 col-lg-6">
                  <SmallCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Router>
  );
}

export default HomePage;
