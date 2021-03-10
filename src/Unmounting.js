import React from "react";
const Unmounting = () => {
  return (
    <div class="text-center">
      <h1>Unmounting</h1>
      <h2>
        The next phase in the lifecycle is when a component is removed from the
        DOM, or unmounting as React likes to call it.
      </h2>
      <h2>
        React has only one built-in method that gets called when a component is
        unmounted:
      </h2>

      <ul
        style={{
          display: "table",
          margin: "0 auto",
          fontSize: "25px",
          fontWeight: "bold"
        }}
      >
        <li>
          <h2>componentWillUnmount()</h2>
        </li>
      </ul>
    </div>
  );
};

export default Unmounting;
