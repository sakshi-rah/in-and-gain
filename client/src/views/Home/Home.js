import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Home.css"
import { currentUser } from '../../util/currentUser';

function Home() {
 const [searchText , setSearchText]= useState('')
 const [currentFoodItems, setCurrentFoodItems] = useState([])

 async function fetchAllItems(){
  console.log('fetching all items')
  const response = await axios.get('/allFodItems')
  console.log(response.data.data)
  setCurrentFoodItems(response.data.data)
 }
 async function fetchSpecificItems(){
  console.log('fetching specific items')
  const response = await axios.get(`/foodItemByTitle?title=${searchText}`)
  console.log(response.data.data)
  setCurrentFoodItems(response.data.data)
 }
 useEffect(()=>{
   if(searchText.length>3){
    fetchSpecificItems()
   }
   else{
    fetchAllItems()
   }
 },[setSearchText])

  function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = "/Login"

  }

  if (!currentUser) {
    window.location.href = "/Login"
  }
 
  return (
    <div>
      <h1 className='text-center'>Home</h1>
      <h2>{currentUser?.name}</h2>
      <div className='text-center'>
        <input type='search' placeholder='Search' className='btn-search'
        value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
      </div>
     
     <div className=''>

     </div>


      <button type='button' className='btn btn-info' onClick={logOut}>Logout</button>

    </div>
  )
}

export default Home