import React from "react";
import { Outlet } from "react-router-dom";

function Calculator() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Calculator;
