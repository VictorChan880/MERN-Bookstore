import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import React from 'react'

export const BackButton = ({ destination = '/'}) => {
  return (
    <div className="flex">
        <Link
        to ={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-1g'>
            <BsArrowLeft className = 'text-2x1'/>
        </Link>
    </div>
  )
}
