import React from "react";
import "./App.css";
import Tabs from "./presentation/Tabs";
import Loader from "./shared/Loader";

const App = () => {
  return (
    <div className="App">
      <Loader />
      <Tabs />
    </div>
  );
};

export default App;
