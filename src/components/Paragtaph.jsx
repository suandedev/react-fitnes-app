import React from 'react'

const Paragtaph = (props) => {
  return (
    <p className={"text-gray-600 text-sm px-4 py-2" + " " + props.className}>{props.text}</p>
  )
}

export default Paragtaph