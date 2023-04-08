import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./Home.css"
import FoodItemCard from "./../../components/FoodItemCard/FoodItemCard"
import { currentUser } from './../../util/currentUser'
import { loginRequired } from "./../../util/loginRequired"
import Navbar from "./../../components/Navbar/Navbar"
import mithaiImg from "./../../assets/mithai.jpg"
import shLogo from "./../../assets/shlogo.png"
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'


function Home() {

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div >
      <Navbar user={currentUser?.name} />

      <div className='row mt-3'>

        <div className='mt-5 d-flex '>

          <div className='col-md-6 col-sm-12 col-12 left-container'>

            <div className='sweethub-container'>
              <p><img src={shLogo} className='home-shLogo ' /> SweetHub</p>
            </div>

            <div className='home-page-container'>

              <span className='home-page-para'>Healthy & delicious sweet taste</span>

              <p>These healthy desserts cover all the best sweet trests. providing fresh and <br />
                sweet teste desserts,you can serve and enjoy with dessert stay happy!
              </p>

              <Link to='/myOrders'><button className='btn btn-danger' >Order Now</button></Link>
              <Link to='/bookTable'><button className='btn btn-outline-danger ms-5 '>Book Table</button></Link>

            </div>

          </div>

          <div className='col-md-6 col-sm-12 col-12 right-container'>
            <img src={mithaiImg} className="mithaiimg" />
          </div>
        </div>
      </div>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home