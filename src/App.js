import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Updates from './components/MainContent/Updates/Updates';
import Chat from './components/Chat/Chat';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <MainContent />
      <Updates />
      {/* <script src='script.js'></script> */}
      <Chat />
      <Footer />
      
    </div>
  );
};

export default App;
