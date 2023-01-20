import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Singup"
import BookTable from './views/BookTable/BookTable'
import MyOrders from './views/MyOrders/MyOrders'
import MyList from './views/MyList/MyList'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bookTable" element={<BookTable/>}/>
        <Route path="/myOrders" element={<MyOrders/>}/>
          <Route path="/myList" element={<MyList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App