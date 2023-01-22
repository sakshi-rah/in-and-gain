import React, { useState } from 'react'
import "./Navbar.css"
import { myFoodListCount } from '../../util/myList'
import { Link } from 'react-router-dom'
import userPic from "./../../images/userPic.png"
import shLogo from "./../../images/shlogo.png"
import cart from "./../../images/cart.png"

function Navbar({ user }) {
  const [foodItemCount, setFoodItemCount] = useState(myFoodListCount)
  const [searchText, setSearchText] = useState("")

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-bg-color shadow">
        <div class="container-fluid">
          <a class="navbar-brand fs-4" href="#"><img src={shLogo} className='shLogo'/>SweetHub</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fs-5" aria-current="page" href='#'>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-5" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-5" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
            </form>
            <form class="d-flex align-items-center">
              <h4 className='me-2 text-light'><img src={userPic} className='userpic' /> {user}</h4>
              <Link to="/myList" className='text-decoration-none'>
                <h4 className='my-list'> <img src={cart} className='cart'/>+{foodItemCount}</h4>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar