import React from "react";
import logo from "../logo.svg";
import { userContainer } from "../container/user.container";
import Counter from "./components/Counter";
import CommonDataTable from "../shared/CommonDataTable";
import { Pagination } from "../shared/Pagination";
import { projectText } from "../description/user.description";

const Home = () => {
  const { usersData, handleOnPageChange, totalPages } = userContainer();
  return (
    <>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>{projectText}</h1>
        {usersData.length > 1 && <CommonDataTable data={usersData} />}
        {/* <Counter counter={counter} setCounter={setCounter} /> */}
        <Pagination pages={totalPages} onClick={handleOnPageChange} />
      </header>
    </>
  );
};

export default Home;
