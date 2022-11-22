import React from "react";

const Navitem = ({title, links}) => {
  return (
    <ul>
      <button className="capitalize cursor-pointer text-xl font-semibold block text-left w-full border-b hover:text-sky-700 border-sky-700 transition-all duration-500 mb-2 mt-4">
        {title}
      </button>
      {links.map((item) => (
        <li className="mx-2">
          <button className="cursor-pointer hover:text-sky-700 transition-all duration-500 capitalize my-1 text-left">
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navitem;
