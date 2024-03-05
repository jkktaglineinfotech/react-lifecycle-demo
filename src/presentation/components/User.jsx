import React from "react";

const User = ({ users, onFunction, stateUpdated }) => {
  console.log(users);
  return (
    <header className="App-header">
      <h1>{users}</h1>
      <button type="button" onClick={onFunction} disabled={stateUpdated}>
        {users}
      </button>
    </header>
  );
};

export default User;
