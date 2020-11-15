import React from 'react';

//* Styles
import '../../assets/styles/Footer/footer.scss';

//* Components 
import Icons from './components/Icons';

function Footer() {
    return (
        <footer>
            <div className="container-fluid container-footer">
                <div className="row col-12">
                    <Icons />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
