import React, { Component } from "react";
import CommonDataTable from "../shared/CommonDataTable";
import { projectText } from "../description/user.description";
import UserContainer from "../container/user.container";
import Pagination from "../shared/Pagination";

class Home extends Component {
  render() {
    return (
      <UserContainer>
        {({ usersData, totalPages, handleOnPageChange }) => (
          <header className="App-header">
            <h1>{projectText}</h1>
            {usersData?.length > 1 && <CommonDataTable data={usersData} />}
            <Pagination pages={totalPages} onClick={handleOnPageChange} />
          </header>
        )}
      </UserContainer>
    );
  }
}

export default Home;
