import React,{useState} from 'react'
import"./Home.css"
import { currentUser } from '../../Util/currentUser';

function Home() {
  function logOut(){
    localStorage.removeItem('currentUser');
    window.location.href="/Login"

  }

  if(!currentUser){
    window.location.href="/Login"
  }
  return (
    <div>
      <h1 className='text-center'>Home</h1>
      <h2>{currentUser?.name}</h2>

      <button type='button' className='btn btn-info' onClick={logOut}>Logout</button>
      
    </div>
  )
}

export default Home