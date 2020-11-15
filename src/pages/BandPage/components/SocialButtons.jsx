import React from 'react';
import {Link} from 'react-router-dom';

function SocialButtons() {
    return (
        <div className="social-links">
            <Link to="" className="twitter" target="_blank"><i class="fa fa-twitter"></i></Link>
            <Link to="" className="youtube" target="_blank"><i class="fa fa-youtube"></i></Link>
            <Link to="" className="instagram" target="_blank"><i class="fa fa-instagram"></i></Link>
            <Link to="" className="spotify" target="_blank"><i class="fa fa-spotify"></i></Link>
        </div>
    )
}

export default SocialButtons;
