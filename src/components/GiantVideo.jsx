import React from 'react';


function GiantVideo() {

  return(
    <div>
      <video autoPlay="true" loop="true" muted="true">
        <source src="https://www.intuit.com/content/dam/intuit/intuitcom/index/Videos/giants-1440x550-ratio.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default GiantVideo;
