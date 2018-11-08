import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import GiantVideo from './GiantVideo';
import Footer from './Footer';

function App() {
  return(
    <div>
      <Header/>
      <GiantVideo/>
      <Footer/>
    </div>
  );
}

export default App;
