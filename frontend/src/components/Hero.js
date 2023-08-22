import React from "react";
import { landingUrl } from "../utils/landingUrls";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <img src={landingUrl} alt="" className="absolute w-full h-full -z-10" />
      <div className="absolute w-full h-full bg-black opacity-80 -z-10"></div>
      <div className="w-2/3 h-96 pr-24 pt-96 ps-16">
        <h1 className="text-4xl font-semibold text-white mb-8">
          Unlock Your Success with Notes That <br />
          Truly Stand Out!
        </h1>
        <p className="text-white">
          Elevate your college journey with our meticulously crafted notes,
          tailored to fuel your academic excellence. Access comprehensive
          materials, ace your exams, and embrace success with confidence. Join
          us today and unleash the power of exceptional learning resources
        </p>
        <button className="bg-black text-white mt-10 px-14 py-4 font-semibold text-lg rounded-full">
          Explore Notes
        </button>
      </div>
    </div>
  );
};

export default Hero;
