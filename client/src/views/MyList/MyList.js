import React from 'react'
import './MyList.css'
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'

import { myFoodListItems } from '../../util/myList'
import { currentUser } from '../../util/currentUser'

function MyList() {
  async function placeFoodListItem() {
      const response = await axios.post('/orderFoodItems',{
        userId: currentUser._id,
        tableNumber:localStorage.getItem("tableNumber") ||1,
        items: myFoodListItems
      })
      console.log(response.data)
  }
  return (
    <div>
      <Navbar />
      <h1 className='text-center'>MyList</h1>
      {
        myFoodListItems.map((item, index) => {
          return (
            <div>
              <h6>Name: {item.name}</h6>
              <h6>Quantity: {item.quantity}</h6>
              <h6>Price: {item.price}</h6>git c
              <hr />
            </div>)
        })
      }
      <button className='btn btn-danger' onClick={placeFoodListItem}>Confirm Order</button>
    </div>
  )
}

export default MyList