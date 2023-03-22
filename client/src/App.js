import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import TriviaGame from "./Game";

function App() {
  const [apiUrl, setApiUrl] = useState("");

  function handleMenuSelect(apiUrl) {
    setApiUrl(apiUrl);
  }

  return (
    <div className="app">
      <Menu onMenuSelect={handleMenuSelect} />
      {apiUrl && <TriviaGame apiUrl={apiUrl} />}
    </div>
  );
}

export default App;
