import * as React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages'
import Branches from "./pages/Branches";
import Teacher from "./pages/Teacher";
import Landing from "./pages/Landing";
import Semester from "./pages/Semester";
import Note from "./pages/Note";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <Routes>
      <Navbar/>
      <Routes>
        <Route exact path="./" exact element={<Home />} />
        <Route path="/Branches" element={<Branches />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Note" element={<Note />} />
        <Route path="/Semester" element={<Semester />} />
        <Route path="/Teacher" element={<Teacher />} />
      </Routes>
    </Routes>
  );
}