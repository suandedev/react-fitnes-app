import React from "react";

import { marisa, alfan, felix, aflariz } from "../constants";

const Card = () => {
  const datas = [
    {
      img: marisa,
      title: "marisa",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: alfan,
      title: "Alfan",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: aflariz,
      title: "alfariz",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: felix,
      title: "felix",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: felix,
      title: "felix",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: felix,
      title: "felix",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: felix,
      title: "felix",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  return (
    <div className="max-w-full flex flex-row gap-4 p-4 overflow-x-auto">
      {datas.map((data) => (
        <div className="min-w-[10rem] flex flex-col justify-center items-start shadow-lg rounded-lg bg-gray-100">
          <img src={data.img} alt="user" />
          <h2 className="text-gray-700 font-bold text-2xl pt-2">{data.title}</h2>
          <p className="text-sm text-gray-600  p-2">
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
