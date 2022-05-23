import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import OtpVerifyPage from './pages/OtpVerify'
import PollingPage from './pages/PollingArea'
import ResultPage from './pages/Result'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/polling" element={<PollingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otpverify" element={<OtpVerifyPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
