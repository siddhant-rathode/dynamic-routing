import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import PageNotFound from './components/PageNotFound'
import List from './components/List'
import ListItem from './components/ListItem'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='w-[100%] h-[50px] bg-gray-400 flex justify-center items-center '>
      <Nav />
      <div className='w-[600px] h-[300px] bg-gray-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute
       flex justify-center items-center'>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/list/:i' element={<ListItem/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>



      </div>
    </div>
  )
}

export default App