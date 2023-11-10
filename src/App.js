import React from "react"
import {Route, Routes } from "react-router-dom"
import LoginPage from "./Components/LoginPage/index"
import DashBoard from "./Components/DashBoard/index"
import Student from "./Components/StudentPage/index"
import Payment from "./Components/PaymentPage/index"

const App = ()=><Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/dashboard" element={<DashBoard/>} />
              <Route path="/student" element={<Student/>} />
              <Route path="/payment" element={<Payment/>} />
          </Routes>
  
export default App