import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={"bg-sky-800 rounded-full p-2 text-gray-100 uppercase hover:bg-sky-700 transition-all duration-500 font-bold text-sm mt-4 hover:shadow-md " + " " + className}>
        {text}
      </button>
  )
}

export default Button