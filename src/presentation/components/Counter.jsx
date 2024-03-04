import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, setCounter } = this.props;
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
  }
}

export default Counter;

// import React from "react";

// const Counter = ({ counter, setCounter }) => {
//   return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
// };

// export default Counter;
