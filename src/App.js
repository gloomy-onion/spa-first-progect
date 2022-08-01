import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Updates from './components/MainContent/Updates/Updates';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route path='/chat' component={Chat} />
        <Route path='/MainContent' component={MainContent} />
        <Route path='/updates' component={Updates} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
