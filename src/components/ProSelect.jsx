import React from "react";

function ProSelect({ options, value, onValueChange, className = "" }) {
  return (
    <select
      value={value}
      key={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={"w-full px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${className}"}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default ProSelect;