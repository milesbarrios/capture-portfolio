import React from "react";

//import components
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/OurWork" exact element={<OurWork />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
