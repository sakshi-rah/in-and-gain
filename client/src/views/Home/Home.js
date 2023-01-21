import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Home.css"
import FoodItemCard from "./../../components/FoodItemCard/FoodItemCard"
import { currentUser } from './../../util/currentUser'
import {loginRequired} from "./../../util/loginRequired"
import Navbar from "./../../components/Navbar/Navbar"

function Home() {

  const [searchText, setSearchText] = useState("")
  const [currentFoodItems, setCurrentFoodItems] = useState([])

  async function fetchAllItems() {
    console.log("Fetching All Items");
    const response = await axios.get('/allFoodItems')
    console.log(response.data.data);
    setCurrentFoodItems(response.data.data)
  }

  async function fetchSpecificItems() {
    console.log("Fetching Specific Items");
    const response = await axios.get(`/foodItemByTitle?title=${searchText}`)
    console.log(response.data.data);
    setCurrentFoodItems(response.data.data)
  }

  useEffect(() => {
    if (searchText.length > 0) {
      fetchSpecificItems()
    }
    else {
      fetchAllItems()
    }
  }, [searchText])

  function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = "/login"
  }

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div>
      <Navbar />

      <h4>{currentUser?.name}</h4>

      <div className='search-container text-center'>
        <input type='text' placeholder='Search' className='fs-4'
          value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
      </div>

      <div className='food-items-result'>
        <div className='row '>
          {
            currentFoodItems?.map((foodItem, index) => {
              return (<FoodItemCard category={foodItem?.category} description={foodItem?.description}
                imgUrl={foodItem?.imgUrl} price={foodItem?.price} title={foodItem?.title} key={index} />)
            })
          }
        </div>
      </div>

      <button type='button' className='btn btn-info'
        onClick={logOut}>Logout
      </button>

    </div>
  )
}

export default Home