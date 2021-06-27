import React from 'react';
import { FooterContainer } from './containers/footer';
import './App.css';
import Navbar from './components/Navbar';
import ContentArea from './components/ContentArea'
;
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentArea />
      <FooterContainer />
    </div>
  );
}

export default App;
