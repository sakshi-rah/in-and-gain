import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./Home.css"
import FoodItemCard from "./../../components/FoodItemCard/FoodItemCard"
import { currentUser } from './../../util/currentUser'
import { loginRequired } from "./../../util/loginRequired"
import Navbar from "./../../components/Navbar/Navbar"
import mithaiImg from "./../../images/mithai.jpg"
import shLogo from "./../../images/shlogo.png"


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


  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <div >
      <Navbar user={currentUser?.name} />
      <div className='row'>
        <div className='col-md-6 '>
          <div className='sweethub-container'>
            <p><img src={shLogo} className='home-shLogo ' /> SweetHub</p>
          </div>

          <div className='home-page-container'>
            <span className='home-page-para'>Healthy & delicious sweet taste</span>
            <p>These healthy desserts cover all the best sweet trests. providing fresh and <br />
              sweet teste desserts,you can serve and enjoy with dessert stay happy! </p>
             <Link to='/myOrders'><button className='btn btn-danger' >Order Now</button></Link> 
          </div>
          
        </div>
        <div className='col-md-6 '>
          <img src={mithaiImg} className="mithaiimg" />
        </div>
      </div>
      <br/><br/>
      <hr/>
      <br/><br/>
      <div className='food-items-result ' id='sweet'>
        <div className='row '>
          {
            currentFoodItems?.map((foodItem, index) => {
              return (<FoodItemCard category={foodItem?.category} description={foodItem?.description}
                imgUrl={foodItem?.imgUrl} price={foodItem?.price} title={foodItem?.title} key={index} />)
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home