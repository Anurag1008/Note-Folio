import React from "react";
import { Link } from "react-router-dom";

const LandingButton = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="text-blue-200 outline outline-2 outline-blue-500 px-10 py-3 rounded-full hover:text-white  hover:bg-blue-500 transition-all duration-150 hover:outline-none"
    >
      {title}
    </Link>
  );
};

export default LandingButton;
