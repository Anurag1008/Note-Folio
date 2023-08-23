import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ bid, name, description, imgUrl, type, setSelectedBranch }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (type === "branch") {
      setSelectedBranch(bid);
      navigate("/semester");
    } else if (type === "semester") {
      navigate("/semester");
    }
  };

  return (
    <div className="w-full shadow-xl rounded-xl" onClick={handleClick}>
      <img
        src={imgUrl}
        alt=""
        className="w-full h-44 rounded-tl-xl rounded-tr-xl"
      />
      <div className="px-5 flex flex-col gap-2 my-2">
        <h3 className="text-xl font-semibold ">{name}</h3>
        <p>{description}</p>
        <button className="text-white bg-blue-500 w-1/2 mb-5 mt-3 py-2 rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Card;
