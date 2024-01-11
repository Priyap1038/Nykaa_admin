import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Registration from './Pages/Registration'
import Signin from './Pages/Signin'


const adminRoutes = () => {
  return (
    <div>
        <Routes>         
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Signin/>}/>
        </Routes>
    </div>
  )
}

export default adminRoutes