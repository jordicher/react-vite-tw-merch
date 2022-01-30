import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './containers/Checkout'
import Home from './containers/Home'
import Information from './containers/Information'
import NotFound from './containers/NotFound'
import Payment from './containers/Payment'
import Success from './containers/Success'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="checkout" element={Checkout} />
        <Route path="checkout/information" element={Information} />
        <Route path="checkout/payment" element={Payment} />
        <Route path="checkout/success" element={Success} />
        <Route path="" element={NotFound} />
      </Routes>
    </div>
  )
}

export default App
