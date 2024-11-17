import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profilelist from '../Components/Profilelist'
import Profiledetails from '../Components/Profiledetails'
import Profilemap from '../Components/Profilemap'

function Routing() {
  return (
    <Routes>
        <Route path='/' element = {<Profilelist/>} ></Route>
        <Route path='/profile/:id' element = {<Profiledetails/>} ></Route>
        <Route path='/map/:id' element = {<Profilemap/>} ></Route>
    </Routes>
  )
}

export default Routing