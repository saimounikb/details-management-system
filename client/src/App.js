import "./App.css";
import React from "react";
import Adduser from "./components/Adduser";
import Navbar from "./components/Navbar";
import Allusers from "./components/Allusers";
import Codeforgood from "./components/Codeforgood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edituser from "./components/Edituser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Codeforgood />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/all" element={<Allusers />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
