import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout/Checkout'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import SignIn from './Components/SignIn/SignIn'

const App = () => {
  const [showLogin,SetLogin] = useState(false)
  return (
    <>
    {showLogin?<SignIn />:<></>}
    <div className='app'>
      <Navbar SetLogin={SetLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App