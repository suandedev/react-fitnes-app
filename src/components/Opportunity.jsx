import React from "react";

import { girl, linksFit, hit, tentangkami, kemitraan } from "../constants";
import { logo } from "../assets";
import { Navitem } from "../components";

const Opportunity = () => {
  return (
    <div className="bg-gray-800/90">
      <h1 className=" text-3xl text-sky-700 font-semibold p-4">
        Peluang Kemitraan{" "}
        <span className="uppercase text-gray-50"> FIT HUB</span>
      </h1>
      <p className="text-gray-100 px-4">
        FIT HUB memiliki pertumbuhan yang cepat dan berbasis digital. Dengan
        model bisnis yang tepat dan konsep yang kuat, FIT HUB dan mitra dapat
        bergerak bersama untuk memberikan akses kesehatan dan kebugaran bagi
        semua orang. Mari lakukan bersama!
      </p>
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-row gap-4 items-center">
          <img className="w-[64px] block" src={logo} alt="" />
          <h1 className="text-2xl font-semibold capitalize text-gray-100">
            Fithub Indonesia
          </h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-100">
            ANY QUESTION?
          </h1>
          <a
            href="#"
            className="text-sky-700 font-semibold hover:text-sky-600 transition-all"
          >
            FAQs
          </a>
        </div>
      </div>
      <ul className="text-gray-100 p-4 flex flex-col md:flex-row md:gap-4">
        <li>
          <Navitem title={"GET FIT!"} links={linksFit} />
        </li>
        <li>
          <Navitem title={"HIT THE GYM!"} links={hit} />
        </li>
        <li>
          <Navitem title={"TENTANG KAMI"} links={tentangkami} />
        </li>
        <li>
          <Navitem title="KEMITRAAN" links={kemitraan} />
        </li>
      </ul>
      <h1 className="text-gray-100 text-2xl font-semibold uppercase p-4">
        HEAD OFFICE
      </h1>
      <p className="text-gray-100 text-sm px-4">
        Menara Sudirman Lt. 8 Unit D Kav. 60, Jalan Jend. Sudirman, Kebayoran
        Baru, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah
        Khusus Ibukota Jakarta 12830
      </p>
      <h1 className="text-gray-100 font-semibold text-2xl upeprcase p-4">
        FIND US.
      </h1>
      <p className="px-4 text-gray-100">+6283185440219</p>
      <p className="px-4 text-gray-100">careers@fithub.idpartnership@fithub.id</p>
    </div>
  );
};

export default Opportunity;
