import React from "react";
import Cv from "./cv";
import Navbar from "./navbar";
import { useEffect, useCallback } from "react";
import "./cvku.css";
import { Route, Routes } from "react-router";
import Porto from "./portofolio";
import Comment from "./Comment";

const App = () => {
  useCallback(() => {
    let name = prompt("Enter your name");
    if (name === null) {
      alert("Please enter your name");
    } else {
      alert("Welcome " + name);
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/PersonalCv" element={<Cv />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/comm" element={<Comment />} />
      </Routes>
    </div>
  );
};

export default App;
