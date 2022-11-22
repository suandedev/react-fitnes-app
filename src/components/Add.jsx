import React from "react";

import { Title, Paragtaph, Ul, Li, Badge } from "./";
import { phone } from "../constants";

const Add = () => {
  return (
    <div className="bg-gray-200 p-4 flex flex-col md:flex-row md:gap-4">
      <div className=" w-full">
        <Title text="Dapatkan gaya hidup FIT dengan mudah dan menyenangkan di sini" />
        <Paragtaph text="Menjadi lebih FIT dengan ketukan jari. Mudah digunakan dan mudah untuk tetap konsisten. Unduh aplikasi sekarang!" />
        <Ul className="list-disc px-6 text-gray-700">
          <Li text="Daftar Membership" />
          <Li text="Memesan Kelas" />
          <Li text="Promosi spesial" />
          <Li text="membeli paket personal trainer" />
          <Li text="tips kebugaran" />
        </Ul>
      </div>
      <div>
        <Badge />
        <img className="block m-auto" src={phone} alt="" />
      </div>
    </div>
  );
};

export default Add;
