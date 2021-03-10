import React from "react";
const Mounting = () => {
  return (
    <div class="text-center">
      <h1>Mounting</h1>
      <h2>Mounting means putting elements into the DOM.</h2>
      <h2>
        React has four built-in methods that gets called, in this order, when
        mounting a component:
      </h2>

      <ol
        style={{
          display: "table",
          margin: "0 auto",
          fontSize: "25px",
          fontWeight: "bold"
        }}
      >
        <li>
          <h2>constructor()</h2>
        </li>
        <li>
          <h2>getDerivedStateFromProps()</h2>
        </li>
        <li>
          <h2>render()</h2>
        </li>
        <li>
          <h2>componentDidMount()</h2>
        </li>
      </ol>
    </div>
  );
};

export default Mounting;
