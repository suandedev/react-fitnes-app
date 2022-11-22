import { useState } from "react";

import { logo } from "./assets";

import { linksFit, hit, tentangkami, kemitraan, blog } from "./constants";
import {Navitem, Hero, Pricing, Activities, Employee, Fit, Add, Post, Opportunity} from './components';

const App = () => {
  const [statusnav, setStatusnav] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="flex flex-col p-4 fixed top-0 left-0 right-0 bg-gray-700/70 z-20">
        <div className="flex flex-row justify-between">
          <button className="cursor-pointer w-[50px]">
            <img
              className="w-[50px] object-center block hover:animate-bounce"
              src={logo}
              alt="logo"
            ></img>
          </button>
          <button
            onClick={() => setStatusnav(!statusnav)}
            className="cursor-pointer block text-gray-50 outline-none"
          >
            {statusnav ? (
              <i class="fas fa-times"></i>
            ) : (
              <i class="fa fa-bars"></i>
            )}
          </button>
        </div>
        {statusnav && (
          <ul className="text-gray-100  flex flex-col md:flex-row gap-4">
            <li>
            <Navitem title={"GET FIT!"} links={linksFit}/>
            </li>
            <li>
              <Navitem title={"HIT THE GYM!"} links={hit}/>
            </li>
            <li>
              <Navitem title={"TENTANG KAMI"} links={tentangkami}/>
            </li>
            <li>
              <Navitem title="KEMITRAAN" links={kemitraan} />
            </li>
            <li>
              <Navitem title="BLOG" links={blog} />
            </li>
          </ul>
        )}
      </header>
      <Hero />
      <Pricing/>
      <Activities />
      <Employee />
      <Fit />
      <Add />
      <Post />
      <Opportunity/>
      <footer className="bg-gray-800 text-gray-100 p-4 text-sm">© Copyright PT. Jaya Digital Properti. All Rights Reserved</footer>
    </div>
  );
};

export default App;
