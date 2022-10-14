import React from 'react';
import './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Routes} from 'react-router-dom';
import routesElements from './components/common/routes/routesElements';
import {RoutesApp} from './components/common/routes/RoutesApp';

const App = () => {

    return (<BrowserRouter>
        <div className="App">
            <Header/>
            {routesElements.map((props) =>{
                return (<Routes>
                    <RoutesApp exact={props.exact}
                               path={props.path}
                               element={props.element}/>
                    </Routes>
                )})};
            <Footer/>
        </div>
    </BrowserRouter>);
};

export default App;