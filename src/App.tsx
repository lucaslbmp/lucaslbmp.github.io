import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content"></div>
      <Footer />
    </div>
  );
}

export default App;
