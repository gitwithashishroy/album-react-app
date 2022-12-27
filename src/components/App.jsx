import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./TopNav";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
