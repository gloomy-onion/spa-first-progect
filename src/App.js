import React from "react";
import "./App.module.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesElements from "./components/common/routes/routesElements";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect } from "react-redux";
import { initializeApp } from "./state/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";

const renderPath = () =>
  routesElements.map(({ path, exact, element }, index) => (
    <Route key={index} exact={exact} path={path} element={element} />
  ));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Routes>
              {renderPath()}
              <Route path={"/profile"}>
                <Route path={":userId"} element={<ProfileContainer />} />
                <Route path={""} element={<ProfileContainer />} />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
