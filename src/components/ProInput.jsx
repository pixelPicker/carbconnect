import React from "react";

function ProInput({ type = "text", placeholder, value, onChange, className = "" }) {
  return (
    <input
      
      className={"w-full px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${className}"}
    />
  );
}
export default ProInput;