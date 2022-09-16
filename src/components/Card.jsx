import React, { useState } from 'react';

const Card = ({ img, type, material, name, price, id, saving }) => {
  return (
    <div className="m-1 md:m-auto my-2 md:my-3 p-2.5 md:p-4 md:w-64 bg-white shadow rounded-md transition-shadow hover:shadow-none">
      <img src={img} alt="" className="mb-2" />
      <div className="flex text-xs font-semibold tracking-wide text-gray-400 uppercase">
        <p>{type}</p>
        &bull;
        <p>{material}</p>
      </div>
      <h2 className="mt-2 text-lg font-semibold capitalize truncate">{name}</h2>
      <h3>${price}</h3>
      <div className="flex justify-between mt-6">
        <button className="px-5 py-1 text-white bg-green-400 rounded shadow-sm sm:px-8 w-max focus:ring-4 focus:ring-green-200">
          Save
        </button>
        <button className="px-5 py-1 text-white bg-blue-400 rounded shadow-sm sm:px-8 w-max focus:ring-4 focus:ring-blue-200">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;