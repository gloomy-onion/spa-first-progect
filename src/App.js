import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Updates from './components/MainContent/Updates/Updates';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<MainContent />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/updates' element={<Updates />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
