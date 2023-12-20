import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomeCompo from '../Components/HomeCompo'
import ContactCompo from '../Components/ContactCompo'
import './navbar.css';
import UsersCompo from '../Components/UsersCompo'

const NavbarCompo = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='navbar'>
          <NavLink className='navbar-link' to='/home'>Home</NavLink>
          <NavLink className='navbar-link' to='/student'>Student</NavLink>
          <NavLink className='navbar-link' to='/contact'>Contact us</NavLink>
        </div>
        <Routes>
          <Route path='/home' element={<HomeCompo />} />
          <Route path='/student' element={<UsersCompo />} />
          <Route path='/contact' element={<ContactCompo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavbarCompo