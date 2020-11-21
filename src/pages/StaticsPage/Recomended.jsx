import React from 'react';
import Tool from './image/Screw.png';

//* Styles
import '../../assets/styles/Statics/static.scss';

//* Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Recomended() {
    return (
        <div>
            <Header />
            <div className="tool-container">
                <div className="center-block">
                    <img src={Tool} alt="Rueda giratoria"></img>
                </div>
                <div className="ad">
                    <i class="fas fa-fire"/>
                    <p className="text"><strong>Proximamente</strong></p>
                    <i class="fas fa-fire"/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Recomended;