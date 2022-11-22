import React from "react";

import { Title, Paragtaph, Button } from "./";
import { post1, post2, post3, post4 } from "../constants";

const Post = () => {
  const posts = [
    {
      img: post1,
      title: "Alasan Kamu Harus Update Aplikasi FIT HUB Secara Rutin",
    },
    {
      img: post2,
      title:
        "Cek Disini untuk Mendapatkan Kombinasi, Jadwal, dan Durasi Workout Khusus untuk Kamu!",
    },
    {
      img: post3,
      title: "Hobi Olahraga Rame-rame, Tapi Sama Siapa ya?",
    },
    {
      img: post4,
      title:
        "Community FIT HUB: Perbanyak Wawasan, Perluas Jaringan di Dunia Olahraga",
    },
  ];
  return (
    <div className="flex flex-col p-4 bg-gray-200 justify-center">
      <Title text="Terkini" />
      <Paragtaph
        text={"Eksplor hal-hal baru mengenai kesehatan dan kebugaran."}
      />
      <div className="grid grid-cols-2 gap-4">
        {posts.map((item) => (
          <div className="block w-full rounded-xl relative">
            <img
              className="rounded-3xl block maxh-[20vh]"
              src={item.img}
              alt="post1"
            />
            <a
              className="absolute w-full flex rounded-b-2xl bottom-0  m-auto capitalize p-4 text-gray-100 bg-sky-600/50 text-lg font-bold"
              href="#"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <Button text="Cari tahu >" />
    </div>
  );
};

export default Post;
