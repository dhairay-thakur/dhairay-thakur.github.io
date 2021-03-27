import React from "react";
// styles-global
import GlobalStyle from "./components/GlobalStyle";

//pages
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <About />
    </div>
  );
}

export default App;
