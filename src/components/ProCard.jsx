import React from "react";

 function ProCard({ image, title, price, onButtonClick, buttonText = "Add to Cart" }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="!p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-green-700 font-semibold">{price}</p>
        <button
          onClick={onButtonClick}
          className="!mt-2 w-full bg-green-600 text-white font-semibold !py-2 rounded-lg hover:bg-green-700 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default ProCard;