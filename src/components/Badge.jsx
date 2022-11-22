import React from "react";

import { app, play } from "../assets";
const Badge = () => {
  return (
    <div className="block max-w-xs my-4 mx-auto p-4 bg-sky-600 rounded-xl ">
      <h1 className="text-2xl text-center font-bold text-gray-50 uppercase">
        DOWNLOAD NOW !
      </h1>
      <div className="flex flex-row gap-4 justify-center">
        <a href="#">
          <img src={app} alt="appstore" />
        </a>
        <a href="#">
          <img src={play} alt="appstore" />
        </a>
      </div>
    </div>
  );
};

export default Badge;
