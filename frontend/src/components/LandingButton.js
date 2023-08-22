import React from "react";
import { Link } from "react-router-dom";

const LandingButton = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="text-white outline outline-2 outline-white px-10 py-3 rounded-full  hover:bg-gray-700 transition-all duration-150 hover:outline-none"
    >
      {title}
    </Link>
  );
};

export default LandingButton;
