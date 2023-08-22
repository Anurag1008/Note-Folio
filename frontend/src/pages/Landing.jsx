import React from "react";
import Hero from "../components/Hero";
import LandingButton from "../components/LandingButton";
import { links } from "../utils/landingUrls";

const Landing = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="absolute top-5 flex gap-10 right-5">
        {links.map((link, ind) => (
          <LandingButton key={ind} title={link.title} link={link.link} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
