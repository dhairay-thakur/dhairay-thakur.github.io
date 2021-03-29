import React from "react";
// styles-global
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
// pages
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
// Router
import { Switch, Route, useLocation, HashRouter } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <HashRouter basename="/">
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </HashRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
