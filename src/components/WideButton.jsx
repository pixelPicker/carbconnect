import React from "react";

function WideButton({value, color, hoverColor, activeColor, textColor}) {
  return (
    <>
      <button type='submit' className={`${color} !mt-3 font-Outfit !p-3 text-center ${textColor} w-full rounded-sm ${hoverColor} transition-all duration-300 ${activeColor}`}>{value}</button>
    </>
  )

}

export default WideButton;
