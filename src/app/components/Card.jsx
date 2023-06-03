import React from "react";

const Card = ({ id, description, title }) => {
  return (
    <div
      className="card bg-white/5 rounded-lg cursor-pointer flex h-64 flex-col relative w-72"
      id={id}
    >
      <div className="card-content">
        <div className="card-image">
          <i className="fa-duotone fa-apartment"></i>
        </div>
        <div className="card-info-wrapper h-full">
          <div className="card-info p-3 flex flex-col gap-1 h-full">
            <div className="card-info-title">
              <h3 className="text-center mb-2">{title}</h3>
            </div>
            <p className="font-bold" >Description</p>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
