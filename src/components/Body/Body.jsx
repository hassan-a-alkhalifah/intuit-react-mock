import React from 'react';
import GiantVideo from './GiantVideo';

function Body() {
  return(
    <div>
      <style jsx>{`
          #giantVideoOverlayContainer {
            width: 100%;
            max-width: 1200px;
            height: 550px;
            z-index: 100;
            position: relative;
          }
          #giantVideoOverlayTextContainer {
            width: 844px;
            margin: 0;
            height: 100%;
            padding-top: 51px;
          }
          h1 {
            font-size: 72px;
            color: #0077C5;
          }
      `}</style>
      <GiantVideo/>
      <div id="giantVideoOverlayContainer">
        <div id="giantVideoOverlayTextContainer">
          <h1>See how the<br/>
          power of Intuit Giants<br/>
          can work for you</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
