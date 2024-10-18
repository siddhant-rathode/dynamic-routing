import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ListItems = () => {
    const navigate = useNavigate()

    const params = useParams()
    // console.log(params);
    const location = useLocation()
    console.log(location);
    
    
  return (
    <div>
        <h1>{params.i}</h1>
        <button className='px-4 py-2 mt-4 rounded bg-blue-500' onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default ListItems