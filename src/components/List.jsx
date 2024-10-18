import React from 'react'
import { Link, Outlet,  } from 'react-router-dom'

const List = () => {
    
  return (
    <>
    <div className='flex flex-col gap-4'>
        <Link to={'/list/item1'}>item1</Link>
        <Link to={'/list/item2'}>item2</Link>
        <Link to={'/list/item3'}>item3</Link>
        <hr className='my-10 bg-red-500 h-[3px]' />
        <Outlet />
    </div>
    
    </>
  )
}

export default List