import React ,{useState} from 'react'
import axios from 'axios'
import "./Signup.css"
import signupImg from "./../../Images/signup-page-pic.png"
import profilePic from "./../../Images/profile-pic.png"


function Singup() {
    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [phone, setPhone] =useState("")
    const [password, setPassword] =useState("")
    const [role, setRole] =useState("user")
     
    async function signupUser(){
        const response = await axios.post('/signup', {
            name:name,
            email:email,
            password:password,
            phone:phone,
            role:role
        })
        console.log(response.data)
    }
    return (
        <div>
            <h1 className='text-center mt-3 signup-heading'>create Account</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-container '>
                        <form>
                            <div className='first-container'>
                                <div className='profile-pic-container'>
                                    <img src={profilePic} className='profile-pic'/>
                                </div>
                                <div className='form-item'>
                                    <label htmlFor='name' className=''>Full Name  </label>  
                                    <input type="text" id='name' className='form-input' value={name} onChange = {(e)=>setName(e.target.value)}/>
                                </div>


                                <div className='form-item'>
                                    <label htmlFor='email'>Email </label> {<br></br>}
                                    <input type="email" id='suremailname' className='form-input'value={email} onChange = {(e)=>setEmail(e.target.value)} />
                                </div>

                                <div className='form-item'>
                                    <label htmlFor='password'>Password </label>
                                    <input type="password" id='password' className='form-input' value={password} onChange = {(e)=>setPassword(e.target.value)}/>
                                </div>

                                <div className='form-item'>
                                    <label htmlFor='phone'>Phone No. </label>
                                    <input type="text" id='phone' className='form-input'value={phone} onChange = {(e)=>setPhone(e.target.value)} />
                                </div>

                                <div className='btn-box'>
                                <button type='button' className='create-btn' onClick={signupUser}> Create</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='right-container'>
                        <img src={signupImg} className="right-image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Singup