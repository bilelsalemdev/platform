import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Login from './Login';
import Signup from './Signup';
import Newpassword from './Newpassword';
function Pages() {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname} >
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Newpassword' element={<Newpassword/>}></Route>
    </Routes>
  )
}

export default Pages