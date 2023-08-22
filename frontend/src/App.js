import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Branches from "./pages/Branches";
import Teacher from "./pages/Teacher";
import Landing from "./pages/Landing";
import Semester from "./pages/Semester";
import Note from "./pages/Note";
import Navbar from "./components/Navbar";
import { branchesUrl } from "./utils/branchUrls";

export default function App() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  useEffect(() => {
    const fetchBranches = async () => {
      let response = await fetch(branchesUrl);
      response = await response.json();
      setBranches(response.data);
    };

    fetchBranches();
  }, []);

  return (
    <Router>
      <div className="w-full">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/branches"
            element={
              <Branches
                branches={branches}
                setSelectedBranch={setSelectedBranch}
              />
            }
          />
          <Route path="/landing" element={<Landing />} />
          <Route path="/notes" element={<Note />} />
          <Route
            path="/semester"
            element={<Semester selectedBranch={selectedBranch} />}
          />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>
  );
}
