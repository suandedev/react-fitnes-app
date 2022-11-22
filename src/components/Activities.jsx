import React from "react";

import { Title } from "./";
import { ac1, ac2, ac3 } from "../constants";

const Activities = () => {
  return (
    <div className="bg-gray-200 px-4 py-8">
      <Title text="Temukan aktivitas paling tepat untuk menjadi lebih " />
      <div className="flex flex-col gap-4 pt-4 md:flex-row">
        <a href="#" className="relative block">
          <img className="rounded-xl" src={ac1} alt="ac1" />
          <h1 className="text-5xl font-bold text-gray-50 capitalize absolute left-0 bottom-0 p-6">
            jadwal
          </h1>
        </a>
        <a href="#" className="relative block">
          <img className="rounded-xl" src={ac2} alt="ac2" />
          <h1 className="text-5xl text-gray-50 font-bold capitalize absolute left-0 bottom-0 p-6">
            Lokasi
          </h1>
        </a>
        <a href="#" className="relative block">
          <img className="rounded-xl" src={ac3} alt="ac3" />
            <h1 className="text-5xl text-gray-50 font-bold capitalize absolute left-0 bottom-0 p-6">kelas</h1>
        </a>
      </div>
    </div>
  );
};

export default Activities;
