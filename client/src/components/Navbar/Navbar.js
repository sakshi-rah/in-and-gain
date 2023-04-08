import React, { useState } from 'react'
import "./Navbar.css"
import { myFoodListCount } from '../../util/myList'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import userPic from "./../../assets/userPic.png"
import shLogo from "./../../assets/shlogo.png"
import cart from "./../../assets/cart.png"

function Navbar({ user }) {
  const [foodItemCount, setFoodItemCount] = useState(myFoodListCount)
  const [searchText, setSearchText] = useState("")

  async function logOut() {
    localStorage.removeItem('currentUser')
    await swal({
      icon: 'success',
      title: "Success 🎉",
      text: "Logout Successfully",
      button: "Ok!"
    })
    window.location.href = '/login'
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light  shadow">
        <div class="container-fluid">
          <a class="navbar-brand fs-4 logo" href="/"><img src={shLogo} className='shLogo' /> SweetHub</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fs-5 " aria-current="page" href='/'>Home</a>
              </li>

              <li class="nav-item">
                <Link class="nav-link active fs-5" to='/menu'>
                  Menu
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active fs-5" to='/bookTable'>
                  Table
                </Link>
              </li>


              <li class="nav-item">
                <a class="nav-link active fs-5 " href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-5" href="#">Contact</a>
              </li>

            </ul>


            <form class="d-flex align-items-center">
              <b className='me-2 text-dark'> <Link to="/login"> <img src={userPic} className='userpic me-2' /></Link>{user}</b>

              <button type="button" class="btn position-relative me-1 mt-1">
                <Link to="/myList">
                  <img src={cart} className='cart' />
                  <span class="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">{foodItemCount}</span>
                </Link>
              </button>
              <button type='button' className='btn btn-danger ms-2' onClick={logOut}>Logout</button>

            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar