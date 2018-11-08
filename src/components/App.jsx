import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

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
