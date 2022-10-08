import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatContainer from './components/Chat/ChatContainer';
import MyPostsContainer from './components/Updates/MyPostsConainer';

const App = () => {
    return (<BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route
                    exact path="/"
                    element={<MainContent/>}/>
                <Route
                    path="/chat"
                    element={<ChatContainer/>}
                />
                <Route
                    path="/updates"
                    element={<MyPostsContainer/>}
                />
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>);
};

export default App;