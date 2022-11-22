import React from "react";
import Title from "./Title";

import { girl } from "../constants";
import { Button } from "./";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-l from-gray-100 md:gap-4 lg:gap-4 to-sky-700 px-4  py-8 flex flex-col items-center md:flex-row">
      <div>
        <Title text={"NgeGym Ga Pake Mahal"} />
        <h2 className="text-gray-400 pt-2 font-sans font-semibold">
          Mulai dari <span className="text-sky-200 text-xl">RP 249.000</span>
        </h2>
        <p className="text-gray-800 text-xl pt-4">
          Dapatkan akses tak terbatas ke seluruh premium gym FIT HUB dan kelas
          gratis setiap harinya.
        </p>
        <Button text={"mulai membership anda"} />
      </div>
      <div className="flex flex-row mt-8 gap-2 overflow-x-auto">
        <img className="rounded-lg " src={girl} alt="" />
        <img className="rounded-lg " src={girl} alt="" />
        <img className="rounded-lg " src={girl} alt="" />
      </div>
      <Button className={"mx-auto block md:hidden lg:hidden"} text="MULAI MEMBERSHIP ANDA" />
    </div>
  );
};

export default Pricing;
