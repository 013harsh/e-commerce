import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../component/Card/Card'

const BookProduct = () => {
  const navigate = useNavigate()
  return (
    <div
   
    className="relative h-screen w-screen bg-gray-100 p-[5%] gap-3"
    >
      <Card/>
      </div>
  )
}

export default BookProduct