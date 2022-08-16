import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Updates from './components/Updates/Updates';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<MainContent />} />
          <Route
            path='/chat'
            element={
              <Chat
                messageContent={props.state.chat.messageContent}
                dialogueInfo={props.state.chat.dialogueInfo}
              />
            }
          />
          <Route
            path='/updates'
            element={ <Updates postsData={ props.state.updates.postsData } addPost={props.addPost }/>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;