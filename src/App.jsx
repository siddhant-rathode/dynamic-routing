import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Service from './components/Service'
import List from './components/List'
import ListItem from './components/ListItem'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-[100%] h-[50px] bg-gray-400 flex justify-center items-center '>
      <Nav />
      <div className='mt-6 w-[800px] h-[400px] bg-gray-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute
       p-10'>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          {/* <Route path='/list' element={<List/>}/> */}
          {/* <Route path='/list/:i' element={<ListItem/>}/> */}
          <Route path='/list' element={<List />}>
            <Route path='/list/:i' element={<ListItem />}/>
          </Route>
        </Routes>



      </div>
    </div>
  )
}

export default App