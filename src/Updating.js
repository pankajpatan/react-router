import React from "react";
const Updating = () => {
  return (
    <div class="text-center">
      <h1>Updating</h1>
      <h2>The next phase in the lifecycle is when a component is updated.</h2>
      <h2>
        A component is updated whenever there is a change in the component's
        state or props.
      </h2>
      <h2>
        React has five built-in methods that gets called, in this order, when a
        component is updated:
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
          <h2>getDerivedStateFromProps()</h2>
        </li>
        <li>
          <h2>shouldComponentUpdate()</h2>
        </li>
        <li>
          <h2>render()</h2>
        </li>
        <li>
          <h2>getSnapshotBeforeUpdate()</h2>
        </li>
        <li>
          <h2>componentDidUpdate()</h2>
        </li>
      </ol>
    </div>
  );
};

export default Updating;
