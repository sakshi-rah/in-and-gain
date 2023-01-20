import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Home.css"
import FoodItemCard from '../../components/FoodItemCard/FoodItemCard';
import { currentUser } from '../../util/currentUser';

function Home() {
  const [searchText, setSearchText] = useState('')
  const [currentFoodItems, setAllFoodItems] = useState([])

  async function fetchAllItems() {
    console.log('fetching all items')
    const response = await axios.get('/allFodItems')
    console.log(response.data.data)
    setAllFoodItems(response.data.data)
  }
  async function fetchSpecificItems() {
    console.log('fetching specific items')
    const response = await axios.get(`/foodItemByTitle?title=${searchText}`)
    console.log(response.data.data)
    setAllFoodItems(response.data.data)
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

  return (
    <div>
      <h1 className='text-center'>Home</h1>
      <h2>{currentUser?.name}</h2>
      <div className='text-center'>
        <input type='search' placeholder='Search' className='btn-search'
          value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </div>

      <div className='food-items-result'>
        <div className='row'>
          {
            currentFoodItems?.map((foodItem, index) => {
              return (<FoodItemCard description={foodItem.description} category={foodItem.category} title={foodItem.title} 
                price={foodItem.price} imgUrl={foodItem.imgUrl}  key={index}/>)
            })
          }

        </div>
      </div>


      <button type='button' className='btn btn-info' 
      onClick={logOut}>Logout</button>

    </div>
  )
}

export default Home