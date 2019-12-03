import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Gamesc from "./pages/gamesc";
import Banner from "./components/Banner";
import News from "./pages/News";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
body{
  background-color:black;
}

a {
  text-decoration: none;
  color: white;
}

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/gamesc" exact>
          <Gamesc />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
      </Router>
    </>
  );
};

export default App;
