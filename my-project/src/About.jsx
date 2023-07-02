import video from "../public/codythings.mp4";

import React from "react";

const About = () => {
  return (
    <div className="About">
      <div className="relative">
        <video autoPlay loop muted playsInline className="w-full">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex-col items-center justify-center bg-subsec bg-opacity-75" >
            <p className="text-3xl text-center text-primary mt-64 mb-32" id="about">About</p>
          <p className="text-subprim text-center px-6 text-xl" >
            Hey there, I'm Ahmed! 👋 A biomedical engineering student by day,
            and a web design enthusiast by night. 💡 When I'm not busy geeking
            out over circuits and code, you can find me exploring the creative
            frontiers of web design. Join me on this wild journey as we bridge
            the gap between science and aesthetics! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
