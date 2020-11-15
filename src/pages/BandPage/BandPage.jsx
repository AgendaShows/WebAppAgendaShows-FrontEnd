import React from 'react';

//* Styles
import '../../assets/styles/Band/band.scss';

//* Components
import Header from '../Header/Header';
import ProfileCard from './components/ProfileCard';
import VideoPreview from './components/VideoPreview';
import SocialButtons from './components/SocialButtons';
import NextDates from './components/NextDates';
import Carousel from './components/Carousel';
import Footer from '../Footer/Footer';


function BandPage() {
    return (
        <div>
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-5 left-container">
                            <div className="row">
                                <div className="col-12">
                                    <ProfileCard />
                                </div>
                                <div className="col-12">
                                    <VideoPreview />
                                </div>
                                <div className="col-12">
                                    <SocialButtons />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 right-container">
                            <div className="row">
                                <div className="col-12">
                                    <NextDates />
                                </div>
                                <div className="col-12">
                                    <Carousel />
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