import React from "react";

import { Title, Paragtaph, Button } from "./";
const Fit = () => {
  return (
    <div className="bg-gray-200 p-4">
      <Title text="GET FIT WITH US" />
      <Paragtaph
        text="FIT HUB berusaha memberikan kemudahan akses kesehatan dan kebugaran
        untuk semua orang melalui penawaran akses gym premium ke seluruh lokasi
        FIT HUB, kelas tanpa batas setiap hari dengan biaya terjangkau.
        Sekarang, siapapun menjadi lebih mudah untuk FIT bersama."
      />
      <Button text="CARI TAU LEBIH LANJUT" />
    </div>
  );
};

export default Fit;
