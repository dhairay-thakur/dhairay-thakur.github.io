import React from "react";
// styles-global
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//pages
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
    </div>
  );
}

export default App;
