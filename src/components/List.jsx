import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const List = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4'>
        <ul>
            <li>
                <Link to="/list/item1">List 1</Link>
            </li>
            <li>
                <Link to="/list/item2">List 2</Link>
            </li>
            <li>
                <Link to="/list/item3">List 3</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default List