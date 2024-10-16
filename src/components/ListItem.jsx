import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

const ListItem = () => {
    const navigate = useNavigate()
    const params = useParams()
    // console.log(params)
    const location = useLocation()    //url location
    console.log(location)
  return (
    <div className='flex flex-col gap-4'>
        <p>{params.i}</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default ListItem