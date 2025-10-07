import React from 'react'
import { NavLink } from 'react-router-dom'

const Account = () => {
  return (
    <div className="bg-gray-400 h-[50%] w-[20%] m-3 rounded-lg flex flex-col justify-start items-start">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      
    </div>
  )
}

export default Account