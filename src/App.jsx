import React from "react";
import "./App.css";
import Tabs from "./presentation/Tabs";
import Loader from "./shared/Loader";
import { Route, Routes } from "react-router-dom";
import RequestWrapper from "./layout/RequestWrapper";

const App = () => {
  return (
    <div className="App">
      <Loader />
      <Routes>
        <Route exact path="/" element={<RequestWrapper />} />
        {/* <Route exact path="/:tabName" element={<Tabs />} /> */}
      </Routes>
    </div>
  );
};

export default App;
