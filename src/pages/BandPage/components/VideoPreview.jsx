import React from 'react';

function VideoPreview(props) {

    const { videoDemo } = props

    return (
        <div className="video-preview">
            <iframe width="530" height="300" src={videoDemo} title="videoclip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    )
};

export default VideoPreview;