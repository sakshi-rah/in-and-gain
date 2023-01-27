import React from 'react'
import './MyList.css'
import swal from "sweetalert"
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import mylistSweet from "../../images/mylist-sweet.webp.crdownload"
import { myFoodListItems } from '../../util/myList'
import { currentUser } from '../../util/currentUser'

function MyList() {
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

  return (
    <div>
      <Navbar />
      <h1 className='text-center'>MyList</h1>

      <div className='mylist-container row'>
    
        {
          myFoodListItems.map((item, index) => {
            return (
              <div className='mylist-card '>
                <img src={mylistSweet} className='mylistSweet' />
                <h6>Name: {item.name}</h6>
                <h6>Quantity: {item.quantity}</h6>
                <h6>Price: {item.price}₹</h6>
              </div>
            )
          })
        }
      </div>
      <button className='btn btn-danger confirm-btn' onClick={placeFoodOrder}>Confirm Order</button>
    </div>
  )
}

export default MyList