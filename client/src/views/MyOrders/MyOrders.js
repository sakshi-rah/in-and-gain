import React,{useEffect} from 'react'

import { loginRequired } from './../../util/loginRequired'
import Navbar from '../../components/Navbar/Navbar'
import { currentUser } from '../../util/currentUser'
import "./MyOrders.css"
import Footer from "../../components/Footer/Footer"

function MyOrders() {

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div>
      <Navbar user={currentUser?.name} />
      <h1>My Orders</h1>

      <Footer/>
    </div>
  )
}

export default MyOrders