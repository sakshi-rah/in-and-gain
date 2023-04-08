import React, { useEffect } from 'react'
import './MyList.css'
import swal from "sweetalert"
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import { myFoodListItems } from '../../util/myList'
import { currentUser } from './../../util/currentUser'
import Footer from "../../components/Footer/Footer"
import {loginRequired} from '../../util/loginRequired'
import { itemsRequired } from '../../util/itemsRequired'
import { tableRequired } from '../../util/tableRequired'

function MyList() {

  useEffect(() => {
    itemsRequired()
    loginRequired()
    tableRequired()
  }, [])

  async function deletePlate(index) {
    myFoodListItems.splice(index, 1)
    localStorage.setItem('plate', JSON.stringify(myFoodListItems))
    await swal({
      icon: 'success',
      title: "Item Removed",
      text: "Item Removed From Plate",
      button: "Ok"
    })
    window.location.reload()
  }

  async function placeFoodOrder() {
    const response = await axios.post('/orderFoodItems', {
      userId: currentUser._id,
      tableNumber: localStorage.getItem("tableNumber") || 1,
      items: myFoodListItems
    })
    if (response.data.success) {
      await swal("Order placed 🎉", response.data.message, "success")
      localStorage.removeItem('list')
      window.location.href = '/'
    }
  }

  async function clearPlate() {
    localStorage.removeItem("plate")
    await swal({
        icon: 'success',
        title: "Plate Cleared !",
    })
    window.location.href = "/menu";
}

  return (
    <div>
      <Navbar user={currentUser?.name} />
      <h1 className='text-center'>MyList</h1>

      <div className='mylist-container row'>

        {
          myFoodListItems.map((item, index) => {
            return (
              <div className='mylist-card '>
                <div className='text-center mt-3 mb-3'>
                  <img src={item.imgUrl} className='mylistSweet text-center' />
                </div>
                <div className='ms-2 mb-3'>
                  <h6>Name: {item.name}</h6>
                  <h6>Quantity: {item.quantity}</h6>
                  <h6>Price: ₹ {item.price}</h6>
                </div>
              </div>
            )
          })
        }
      </div>
      <button className='btn btn-danger confirm-btn' onClick={placeFoodOrder}>Confirm Order</button>

      <div className='dlt-plate'>
        <i class="fa-solid fa-trash" onClick={() => deletePlate(index)}></i>
      </div>

      <div className='confirm-btn'>
        <button className='btn button' onClick={placeFoodOrder}>PLACE ORDER</button>
        <button className='btn button-clr' onClick={clearPlate}>CLEAR PLATE</button>
      </div>

      <Footer />
    </div>
  )
}

export default MyList