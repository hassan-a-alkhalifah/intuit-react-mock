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
            font-size: 72px;
          }
      `}</style>
    <GiantVideo/>
    <div id="giantVideoOverlayContainer">
        <div id="giantVideoOverlayTextContainer">
          <h1>See how the power of Intuit Giants can work for you</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
