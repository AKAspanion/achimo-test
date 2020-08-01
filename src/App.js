import React, { useState } from "react";
import "./App.css";

import { useGithubUserFetch } from "./hooks/";

function App() {
  const [name, setName] = useState("AKAspanion");
  const [userData, error, loading] = useGithubUserFetch(name);
  console.log(userData, error, loading);
  return <div className="App">App</div>;
}

export default App;
