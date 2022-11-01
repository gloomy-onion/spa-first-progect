import React from "react";
import "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesElements from "./components/common/routes/routesElements";

const renderPath = () =>
  routesElements.map(({ path, exact, element }) => (
    <Route exact={exact} path={path} element={element} />
  ));

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>{renderPath()}</Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
