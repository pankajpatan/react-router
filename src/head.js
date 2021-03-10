import React from "react";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <>
      <div class="container-fluid bg-primary text-white">
        <div class="row  ">
          <div style={{ marginBottom: "25px" }} class="col-sm-12 text-center ">
            <h1>Component Life Cycle</h1>
          </div>
          <div class="col-sm-4 text-center">
            <Link to="/">
              <h2 style={{ color: "white" }}>Mounting</h2>
            </Link>
          </div>
          <div class="col-sm-4 text-center">
            <Link to="Updating">
              <h2 style={{ color: "white" }}>Updating</h2>
            </Link>
          </div>
          <div class="col-sm-4 text-center">
            <Link to="unmounting">
              <h2 style={{ color: "white" }}>Unmounting</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
