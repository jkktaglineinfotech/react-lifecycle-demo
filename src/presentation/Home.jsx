import React, { Component } from "react";
import CommonDataTable from "../shared/CommonDataTable";
import { Pagination } from "../shared/Pagination";
import { projectText } from "../description/user.description";
import UserContainer from "../container/user.container";

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
