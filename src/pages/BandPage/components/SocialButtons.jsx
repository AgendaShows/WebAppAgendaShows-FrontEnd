import React from 'react';

function SocialButtons(props) {

    const { webpage, instagram, youtube, spotify } = props

    return (
        <div className="social-links">
            <a href={webpage} className="page"><i className="fas fa-guitar"></i></a>
            <a href={youtube} className="youtube"><i className="fa fa-youtube"></i></a>
            <a href={instagram} className="instagram"><i className="fa fa-instagram"></i></a>
            <a href={spotify} className="spotify"><i className="fa fa-spotify"></i></a>
        </div>
    )
};

export default SocialButtons;
