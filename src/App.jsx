// import { useState } from 'react'
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Navbar from "./Components/Navbar";
import {AuthProvider} from "./Context/AuthContext"
import Profile from "./Components/Profile";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <>
      <AuthProvider>
      <ProductProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/AddProduct" element={<AddProduct/>} />
          </Routes>
        </Router>
      </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
