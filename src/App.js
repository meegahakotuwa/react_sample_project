import React from 'react';
import './App.css';
import SiteInfo from './components/main';
import Footer from './components/footer';
import './css/main.css';
import ReactBootStrap from './components/navbarcomp';

function App() {
  return (
    <div className="body">
      <ReactBootStrap />
      <SiteInfo />
      
      <Footer />
      </div>
    
  );
}

export default App;
