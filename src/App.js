import React from "react";
import "./App.module.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesElements from "./components/common/routes/routesElements";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const renderPath = () =>
  routesElements.map(({ path, exact, element }) => (
    <Route exact={exact} path={path} element={element} />
  ));

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Routes>
          {renderPath()}
          <Route path={"/profile"}>
            <Route path={":userId"} element={<ProfileContainer />} />
            <Route path={""} element={<ProfileContainer />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
