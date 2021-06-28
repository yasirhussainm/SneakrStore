import React from 'react';

const Card = (props) => {
  return (
    <div className="m-1 md:m-auto my-2 md:my-3 p-2.5 md:p-4 md:w-64 bg-white shadow rounded-md">
      <div>
        <img src={props.img} alt="" className="mb-2" />
      </div>
      <div>
        <div className="flex text-gray-400 font-semibold uppercase tracking-wide text-xs">
          <p>{props.type}</p>
          &bull;
          <p>{props.material}</p>
        </div>
        <h2 className="text-lg capitalize font-semibold mt-2 truncate">
          {props.name}
        </h2>
        <h3>${props.price}</h3>
        <div className="flex justify-between mt-6">
          <button className="py-1 px-5 sm:px-8 shadow-sm w-max rounded text-white  bg-green-400">
            Save
          </button>
          <button className="py-1 px-5 sm:px-8 shadow-sm w-max rounded text-white  bg-blue-400">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
