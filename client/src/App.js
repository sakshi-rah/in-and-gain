import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Singup"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App