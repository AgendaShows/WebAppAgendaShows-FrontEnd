import React from 'react';

//* Styles
import '../../../assets/styles/bootstrap-social.scss';

function SocialLogin () {

    return (
        <div className="col-12 col-lg-6 container-redes">
            <a href="https://www.google.com" className="btn btn-lg btn-social btn-facebook">
                <span className="fa fa-facebook"></span>Inicia con Facebook
            </a>
            <br/>
            <br/>
            <a href="https://www.google.com" className="btn btn-lg btn-social btn-twitter">
                <span className="fa fa-twitter"></span>Inicia con Twitter
            </a>
            <br/>
            <br/>
            <a href="https://www.google.com" className="btn btn-lg btn-social btn-google ">
                <span className="fa fa-google"></span>Inicia con Google
            </a>
        </div>
    )
};

export default SocialLogin;