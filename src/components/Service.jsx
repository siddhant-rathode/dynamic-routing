import React from 'react'
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate('/')
    
  }
  return (
    <div>
      <h1 className='text-3xl font-bold'>Service</h1>

      <form onSubmit={SubmitHandler}>
        <button className='bg-blue-500 text-white mt-4 px-4 py-2 rounded-md'>Submit</button>
      </form>

    </div>
  )
}

export default Service