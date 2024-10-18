import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-4'>
      <NavLink style={ (e) => e.isActive ? {textDecoration: 'underline'} : {}} className={(e) => e.isActive ? 'text-red-500' : ''} to="/">Home</NavLink>
      <NavLink style={ (e) => e.isActive ? {textDecoration: 'underline'} : {}} className={(e) => e.isActive ? 'text-red-500' : ''} to="/service">Service</NavLink>
      <NavLink style={ (e) => e.isActive ? {textDecoration: 'underline'} : {}} className={(e) => e.isActive ? 'text-red-500' : ''} to="/list">List</NavLink>
    </div>
  )
}

export default Nav