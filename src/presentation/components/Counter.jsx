import React from "react";

const Counter = ({ counter, setCounter }) => {
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
};

export default Counter;
