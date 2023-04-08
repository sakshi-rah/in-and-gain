import React from 'react'
import './MyList.css'
import swal from "sweetalert"
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import { myFoodListItems } from '../../util/myList'
import { currentUser } from './../../util/currentUser'

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
                  <h6>Price: {item.price}₹</h6>
                </div>
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