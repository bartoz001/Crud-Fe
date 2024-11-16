// import { useState } from 'react'
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
