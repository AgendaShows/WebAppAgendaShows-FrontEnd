import React from 'react';

function VideoPreview() {
    return (
        <div className="video-preview">
            <iframe width="530" height="300" src="https://www.youtube.com/embed/J61mtatKT1I" title="videoclip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    )
};

export default VideoPreview;