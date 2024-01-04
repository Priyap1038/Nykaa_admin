import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Registration from './Pages/Registration'


const adminRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/login' element={}/> */}
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
    </div>
  )
}

export default adminRoutes