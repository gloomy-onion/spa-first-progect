import React from 'react';
import './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routesElements from './components/common/routes/routesElements';

const App = () => {
    const routeComponents = routesElements.map(({path, exact, element}) =>
        (<Route exact={exact} path={path} element={element}/>));
    return (<BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                {routeComponents}
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>);
};

export default App;