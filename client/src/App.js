import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import TriviaGame from "./Game";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/history"
            element={<TriviaGame apiUrl="https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple" />}
          />
          <Route
            path="/music"
            element={<TriviaGame apiUrl="https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple" />}
          />
          <Route
            path="/scienceandnature"
            element={<TriviaGame apiUrl="https://opentdb.com/api.php?amount=50&category=17&difficulty=easy&type=multiple" />}
          />
          <Route
            path="/generalknowledge"
            element={<TriviaGame apiUrl="https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple" />}
          />
          <Route
            path="/geography"
            element={<TriviaGame apiUrl="https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
