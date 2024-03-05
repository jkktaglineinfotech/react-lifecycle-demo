import React, { useEffect, useRef, useState } from "react";

let users = "John";
let stateUpdated = false;

const Home = () => {
  const userRef = useRef();
  const buttonRef = useRef();

  const [event, setEvent] = useState(null);
  const onFunction = () => {
    users = "Jason";
    stateUpdated = true;
    setEvent(users);
    userRef.current.innerHTML = users;
    buttonRef.current.innerHTML = users;
    buttonRef.current.disabled = stateUpdated;
    console.log("onFunction", users);
  };

  // useEffect(() => {
  //   if (event) console.log("Event", event);
  //   return () => {
  //     setEvent(null);
  //   };
  // }, [event]);

  useEffect(() => {
    console.log("Effect Normal", users);
  }, []);
  return (
    <>
      <header className="App-header">
        <h1 ref={userRef}>{users}</h1>
        <button
          ref={buttonRef}
          type="button"
          onClick={onFunction}
          disabled={stateUpdated}
        >
          {users}
        </button>
      </header>
    </>
  );
};

export default Home;

// console.log("Function Called.", users, stateUpdated);
// forceUpdate();

// console.log(users === "John" ? "Test" : "Test User");
// console.log("Test.", users, stateUpdated);

// const [, forceUpdate] = useReducer((x) => x + 1, 0);
// console.log("Ref", homeRef.current.innerHTML);

// console.log(buttonRef.current);
