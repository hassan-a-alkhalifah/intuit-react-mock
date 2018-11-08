import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import GiantVideo from './GiantVideo';

function App() {
  return(
    <div>
      <Header/>
      <GiantVideo/>
    </div>
  );
}

export default App;
