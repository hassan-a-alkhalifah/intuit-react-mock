import React from 'react';


function GiantVideo() {
  const videoStyles = {
    position: 'absolute',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    transform: 'translate(-50%)',
    display: 'block',
    overflow: 'hidden',
    zIndex: '0'
  };
  return(
    <div style={videoStyles}>
      <video autoPlay="true" loop="true" muted="true">
        <source  src="https://www.intuit.com/content/dam/intuit/intuitcom/index/Videos/giants-1440x550-ratio.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default GiantVideo;
