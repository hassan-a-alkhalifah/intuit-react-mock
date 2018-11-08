import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './HeaderBar/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return(
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
