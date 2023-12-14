import "./App.css";
import Home from "./home.jsx";
import React from "react";
import Event from "./event.jsx";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
}

export default App;
