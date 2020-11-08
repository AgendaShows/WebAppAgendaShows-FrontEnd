import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

//* Styles
import '../../assets/styles/Landing/landing.scss';

//* Components
import Titulo from './components/Titulo';
import Form from './components/Form';
import ButtonRegistro from './components/ButtonRegistro';
import SocialLogin from './components/SocialLogin';

function LandingPage () {
    
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Titulo />
                    </div>
                    <div className="col-12 col-lg-6 container-form">
                        <Form />
                        <div className="col-12">
                            <ButtonRegistro />
                        </div>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </Router>
    )       
};

export default LandingPage;